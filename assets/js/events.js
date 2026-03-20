/**
 * events.js
 * Gestione caricamento, rendering e localizzazione degli eventi da events.json
 */

// ─── Lazy Loading SVG con IntersectionObserver ────────────────────────────────

function initSVGLazyLoad() {
  const svgImages = document.querySelectorAll('svg image[data-href]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('href', entry.target.dataset.href);
        observer.unobserve(entry.target);
      }
    });
  });
  svgImages.forEach(img => observer.observe(img));
}

// ─── Fetch e init ─────────────────────────────────────────────────────────────

fetch('events.json')
  .then(r => r.json())
  .then(data => {
    window.eventsJSON = data;
    initEvents();
  })
  .catch(err => console.error("ERRORE CARICAMENTO JSON:", err));

// ─── Core ─────────────────────────────────────────────────────────────────────

function initEvents() {
  const events = window.eventsJSON || [];

  function parseDateTime(pubDateStr) {
    // pubDateStr = "20/11/2025 18:30" oppure solo "20/11/2025"
    const [datePart, timePart] = pubDateStr.split(' ');
    const [day, month, year] = datePart.split('/');
    const isoString = `${year}-${month}-${day}T${timePart || '00:00'}`;
    return new Date(isoString);
  }

  function createEventHTML(event) {
    const container = document.createElement('div');
    container.className = "row mb-2";

    const [datePart, timePart] = event.pubDate.split(' ');
    const lang = localStorage.getItem('language') || 'en';

    container.innerHTML = `
      <div class="col-md-12">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block">
            <svg class="event-img" width="300" height="300" xmlns="http://www.w3.org/2000/svg" role="img"
              aria-label="${event.title}" preserveAspectRatio="xMidYMid slice" focusable="false">
              <image data-href="${event.heroImage}" height="300"/>
            </svg>
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 date-time">
              <i class="bi bi-calendar-date-fill"></i> ${datePart} &nbsp;&nbsp;&nbsp;
              <i class="bi bi-clock-fill"></i> ${timePart || ''}
            </strong>
            <h3 class="mb-0">${event.title}</h3>
            <div class="mb-1 place">
              <i class="bi bi-geo-alt-fill"></i>
              ${event.url
                ? `<a class="place-maps" href="${event.url}" target="_blank">${event.place}</a>`
                : `<span>${event.place}</span>`}
            </div>
            <p class="card-text mb-auto event-text" style="width: 90%;"
               data-en="${event.description_en || event.description}"
               data-it="${event.description}">
              ${lang === 'en' ? (event.description_en || event.description) : event.description}
            </p>
            <div class="row-md">
              ${event.tickets ? `<a href="${event.tickets}" target="_blank" class="tickets">Info</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `;
    return container;
  }

  const upcomingContainer = document.querySelector('#day-1');
  const pastContainer    = document.querySelector('#day-2');

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Ordina per data crescente: i più recenti vengono appesi per ultimi
  // → upcoming: ordine crescente (il più lontano in fondo)
  // → past:     ordine decrescente (il più recente in cima)
  const upcoming = [];
  const past     = [];

  events.forEach(event => {
    const eventDate = parseDateTime(event.pubDate);
    eventDate.setHours(0, 0, 0, 0);
    (eventDate >= now ? upcoming : past).push(event);
  });

  // Upcoming: dal più vicino al più lontano (crescente)
  upcoming
    .sort((a, b) => parseDateTime(a.pubDate) - parseDateTime(b.pubDate))
    .forEach(event => upcomingContainer.append(createEventHTML(event)));

  // Past: dal più recente al più vecchio (decrescente)
  past
    .sort((a, b) => parseDateTime(b.pubDate) - parseDateTime(a.pubDate))
    .forEach(event => pastContainer.append(createEventHTML(event)));

  // Avvia lazy load sugli SVG appena inseriti nel DOM
  initSVGLazyLoad();
}

// ─── Localizzazione ───────────────────────────────────────────────────────────

function updateEventsLanguage(language) {
  document.querySelectorAll('.event-text').forEach(p => {
    p.textContent = p.getAttribute(`data-${language}`);
  });
}

document.querySelectorAll('.language-btn').forEach(button => {
  button.addEventListener('click', () => {
    const language = button.id.includes('en') ? 'en' : 'it';
    localStorage.setItem('language', language);
    updateEventsLanguage(language);
  });
});