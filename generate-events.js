// generate-events.js
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const EVENTS_DIR = path.join(__dirname, 'events'); // stessa cartella definita nel .yml
const OUTPUT_FILE = path.join(__dirname, 'events.json');

if (!fs.existsSync(EVENTS_DIR)) {
  console.error(`Cartella events non trovata: ${EVENTS_DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(EVENTS_DIR).filter(f => f.endsWith('.md'));

const events = files.map(filename => {
  const full = path.join(EVENTS_DIR, filename);
  const raw = fs.readFileSync(full, 'utf8');
  const { data } = matter(raw);

  // Assicuriamoci di mantenere time come stringa esattamente com'è
  const timeStr = data.orario === undefined || data.orario === null ? '' : String(data.orario).trim();

  // Manteniamo pubDate nel formato DD/MM/YYYY come l'hai definito
  const pubDate = data.pubDate || '';

  // Calcoliamo un valore timestamp basato solo sul giorno (ignora orario)
  let dateTimestamp = null;
  if (typeof pubDate === 'string' && pubDate.includes('/')) {
    const [d, m, y] = pubDate.split('/');
    // protezione contro dati malformati
    if (d && m && y) {
      const dateObj = new Date(Number(y), Number(m) - 1, Number(d));
      dateTimestamp = dateObj.getTime();
    }
  }

  return {
    title: (data.title || '').toString(),
    description: (data.description || '').toString(),
    pubDate: pubDate,
    orario: timeStr,
    place: (data.place || '').toString(),
    heroImage: (data.heroImage || '').toString(),
    url: (data.url || '').toString(),       // Google Maps link dal .yml
    tickets: (data.tickets || '').toString(), // Link biglietti dal .yml
    timestamp: dateTimestamp // utile per sorting nel file e/o frontend
  };
});

// Ordina per data (timestamp) crescente: eventi più prossimi in testa
events.sort((a, b) => {
  const ta = a.timestamp || 0;
  const tb = b.timestamp || 0;
  return ta - tb;
});

// Scrive file JSON
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(events, null, 2), 'utf8');
console.log(`Generati ${events.length} eventi in ${OUTPUT_FILE}`);
