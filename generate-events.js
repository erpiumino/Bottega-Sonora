const fs = require('fs');
const path = require('path');
const matter = require('gray-matter'); // serve per leggere i front matter YAML

const eventsDir = path.join(__dirname, 'events'); // la cartella dove PagesCMS salva i .md
const outputFile = path.join(__dirname, 'events.json');

const events = [];

// Legge tutti i file .md nella cartella events/
fs.readdirSync(eventsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(eventsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content); // estrae i metadati YAML

    events.push({
      title: data.title || '',
      description: data.description || '',
      pubDate: data.pubDate || '',
      time: data.time || '',
      place: data.place || '',
      heroImage: data.heroImage || ''
    });
  }
});

// Ordina per data crescente
events.sort((a, b) => new Date(a.pubDate + 'T' + a.time) - new Date(b.pubDate + 'T' + b.time));

// Scrive il JSON
fs.writeFileSync(outputFile, JSON.stringify(events, null, 2));
console.log(`Events JSON generato in ${outputFile}`);
