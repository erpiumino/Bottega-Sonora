const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const eventsDir = path.join(__dirname, 'events');
const outputFile = path.join(__dirname, 'events.json');

const events = [];

// Legge tutti i file .md nella cartella events/
fs.readdirSync(eventsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(eventsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content); // frontmatter

    events.push({
      title: data.title || '',
      description: data.description || '',
      pubDate: data.pubDate || '',
      time: String(data.time || '').padStart(5, '0'), // sicurezza HH:MM
      place: data.place || '',
      heroImage: data.heroImage || '',
      info: data.info || '',               // NUOVO
      mapsUrl: data.mapsUrl || '',         // NUOVO
      mapsAddress: data.mapsAddress || ''  // NUOVO
    });
  }
});

// Ordina correttamente per data+ora
events.sort((a, b) => {
  const dateA = new Date(`${a.pubDate}T${a.time}`);
  const dateB = new Date(`${b.pubDate}T${b.time}`);
  return dateA - dateB;
});

// Scrive il JSON
fs.writeFileSync(outputFile, JSON.stringify(events, null, 2));
console.log(`Events JSON generato in ${outputFile}`);
