document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('language') || 'en'; // Default to English if no language is stored
    console.log(`Page loaded. Stored language is: ${storedLanguage}`);
    setLanguage(storedLanguage);


    // Add event listeners for language buttons
    document.querySelectorAll('.language-btn').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.id.includes('en') ? 'en' : 'it';
            setLanguage(language);
            localStorage.setItem('language', language); // Store the selected language in localStorage
        });
    });
});

let dataTableInstance = null; // Variabile globale per memorizzare l'istanza della DataTable

// Funzione per ottenere il nome del file corrente
function getCurrentPage() {
    const path = window.location.pathname;
    return path.split("/").pop();
}


function setLanguage(language) {
    console.log(`Setting language to: ${language}`);

    const buttons = document.querySelectorAll('.language-btn');
    buttons.forEach(btn => btn.classList.remove('btn-active'));

    // Set active button based on language
    document.getElementById(`${language}-btn-top`).classList.add('btn-active');
    document.getElementById(`${language}-btn-sidebar`).classList.add('btn-active');
    //if(document.getElementById(`${language}-btn-modal` == null)){}
    //else{
    //    document.getElementById(`${language}-btn-modal`).classList.add('btn-active');
    //}

    const texts = {
        'en': {
            'upper_text': 'We are',
            'lower_text': 'A contemporary music union. Musicians and Composers, together.',
            'about2': 'about',
            'team': 'team',
            'events': 'events',
            'projects': 'projects',
            'repertoire': 'repertoire',
            'contacts': 'contacts',
            'credits': 'Credits',
            'follow': 'FOLLOW US',
            'about-side': '&nbsp About',
            'team-side': '&nbsp Team',
            'events-side': '&nbsp Events',
            'projects-side': '&nbsp Projects',
            'repertoire-side': '&nbsp Repertoire',
            'contacts-side': '&nbsp Contacts',
            'follow-side': '&nbsp FOLLOW US',
            //============================================Team============================================//
            'team-title' : 'the Team',
            'team-subtitle' : 'Meet our Team... bla bla bla',
            'team-filter-all' : 'All',
            'team-filter-musician' : 'Musician',
            'team-filter-composer' : 'Composer',
            'team-filter-staff' : 'Staff',
            'team-role-clarinetist': 'Clarinetist',
            'team-role-percussionist' : 'Percussionist',
            'team-role-composer' : 'Composer',
            'team-role-cellist' : 'Cellist',
            'team-role-flautist' : 'Flautist',
            'team-role-harpist' : 'Harpist',
            'team-role-violinist' : 'Violinist',
            'team-role-saxophonist' : 'Saxophonist',
            'team-role-pianist' : 'Pianist',
            'team-role-violist' : 'Violist',
            'team-role-general-manager' : 'General Manager',
            'team-role-designer' : 'Designer',
            'team-role-developer' : 'Developer',
            'team-role-artistic-director' : 'Artistic Director',
            //============================================Team(Personal Page)============================================//
            'team-pp-info' : 'Personal Info',
            'team-pp-birthday' : 'Birthday',
            'team-pp-role' : 'Role',
            'team-pp-degree' : 'Birth Place',
            'team-pp-date' : 'Member since',
            'team-pp-resume' : 'Resume',
            'team-pp-contact' : 'Contact',
            'team-pp-high-school' : 'High School',
            'team-pp-bachelor' : 'Bachelor Degree',
            'team-pp-master' : 'Master Degree',
            'team-pp-phd' : 'Ph.D.',
            'team-pp-luca-giuliani-1' : "Born in L'Aquila in 1997, in 2017 he graduated brilliantly in clarinet from the 'A.Casella' conservatory in L'Aquila under the guidance of Maestro Lee YinNigh. He subsequently obtained a level II academic diploma in 'Special Instruments chamber music - clarinet' with 110 cum laude under the guidance of Maestro Roberto Petrocchi at the “A.Casella” music conservatory. He took part in high-level masterclasses in clarinet held by masters Fabrizio Meloni, Calogero Palermo, Peter Szucs, Simone Nicoletta, Angelo De Angelis, Gianmarco Casani, Gianluca Sulli, Marge Loharu.",
            'team-pp-luca-giuliani-2' : "He has participated in and won national and international competitions such as the “VIII Città di Greci Trophy Competition”, the “Giovani Musicians” of Rome, “XV International Competition P. Barrasso”, “IV National Competition “Urania”, “IX Competition Marco Dall’Aquila”. In 2015 she formed the chamber duo “Giuliani-Rizzuto” performing in various events and competitions. In October 2016 he performed for the “34th Korea International Music Festival” in South Korea in collaboration with the Seoul Orchestra at the Seoul Art Center hall, Young-in Poeun Art Center and in Suncheon Culture and Art Center. Since 2017 he has collaborated with the musical organization Società dei Concerti “B.Barattelli” participating in numerous projects including the first three editions of the “Youth Culture Experimentation” project.",
            'team-pp-alfonso-1' : "Born in San Benedetto del Tronto, he began his musical studies as a teenager at the age of 16 under the guidance of Maestro Claudio Bollini, later continuing with Maestro Lorenzo Poliandri. He attended masterclasses with internationally renowned drummers such as Ian Paice, Roberto Gatto, Christian Mayer, Roberto Pistolesi, and John B. Arnold. He graduated from the Casella Conservatory in L’Aquila under the guidance of Maestro Massimo Di Rocco and Maestro Alessandro Tomassetti, ultimately completing his studies with Maestro Gianluca Ruggeri, graduating with highest honors. He is currently pursuing a two-year specialization course in Chamber Music at the same institution. He actively performs as a drummer and percussionist, collaborating with internationally renowned institutions and artists such as Venditti, Bertè, Masini, New Trolls, Leali, Vecchioni, and M. Piovani. Having developed an interest in performing arts and contemporary music, he embarked on a journey to enhance his theatrical, musical, and artistic skills. With significant experience under his belt, he has also been teaching for the past six years at primary and private schools.",
            'team-pp-gabriele-1' : "Composer, electroacoustic performer, and cellist from Terni. He graduated with highest honors and distinction in the second-level academic diploma in Electroacoustic Musical Composition (under the guidance of Maestro Agostino Di Scipio) and obtained a first-level academic diploma in Cello from the Conservatory of L’Aquila (under the guidance of Maestro Matteo Scarpelli). He was awarded a diploma of merit from the Chigiana Music Academy in Siena for the advanced course in Live Electronics, Sound, and Music Computing, taught by Alvise Vidolin and Nicola Bernardini. Since 2015, he has attended courses and seminars led by internationally renowned artists. His compositions have been performed at the Nuovi Spazi Musicali festival in Ascoli Piceno, the 2023 Chigiana International Festival in Siena, the ArteScienza festival in Rome, the intermedia art series elettroAQustica in L’Aquila, the Le Forme del Suono Festival in Latina, at the Academy of Fine Arts in L’Aquila, the Ecos Urbanos Festival in Monterrey, and at concerts organized by the Sabina Elettroacustica Association (Rieti), of which he has been a member since 2022.",
            'team-pp-angelo-1' : "Roman Flautist, born in 1998. He graduated from the A. Casella Conservatory in L’Aquila with a degree in flute (under Luigi Tufano) and in Chamber Music. He then attended numerous masterclasses with internationally renowned flutists and continued studying for three years with Adriana Ferreira. His artistic experiences began during his training years, where he often had the opportunity to perform as principal flutist, starting with the symphony orchestra of the Conservatory, particularly for external projects, including a notable performance of the opera “The Magic Flute,” organized by “I Cantieri dell’Immaginario.” From 2019 to 2022, he participated in the “Comporre Oggi” festival as a member of the “Exegéma Ensemble.” This was his first real encounter with modern music, leading him to explore and perform both “repertoire” pieces and very recent compositions by composers such as Caterina Calderoni, Bettina Skrzypczak, and Francesca Virgili, with the composers present in the hall. He continues his journey in contemporary music, taking part in multiple performances of “In C” with the dance company “Sasha Waltz & Guests” (including one at the RomaEuropa Festival), and in 2023, he co-founded Bottega Sonora Ensemble with his colleague and friend Federico Santori. Currently, he teaches at a middle school, continues to perform with BSE, and collaborates with both established and emerging composers, such as Fabio Massimo Capogrosso, occasionally recording flute parts for some of his soundtracks.",
            'team-pp-angelo-2' : "His artistic experiences began during his formative years, where he often (but not too often) had the opportunity to play as first flute in the prestigious International Academic Philharmonic Orchestra of the Conservatory, as well as in numerous chamber groups with fellow Maestros and with fellow maestros. 'n addition to'the (perhaps too many) numerous artistic activities in which he took part within the A. Casella Conservatory, he also collaborated for the realization of many external (or Outdoor) projects, among which stands out 'he performanc' of the opera “The Magic Flute” (“Die Zauberflote”) by W.A. Mozart, as 'irst flute, o'ganized by “I Cantieri dell’immaginario”, an association formed by a small group of retired smokers from L’Aquila. 'n the summer 'f 2019, during a high-level masterclass with Maestro Michael Faust in Brescia, he won an audition that allowed him to perform as a soloist with the orchestra part of the concert KV 313 in G by W.A. Mozart. Mozart, in addition to allowing him to spend the modest sum of 4789.31 euros for travel, food and accommodation (excluding VAT). 'e then played'in the same orchestra (Bazzini Consort Orchestra), as a second flute, to accompany some 'f his fellow 'ianists, also winners of the aforementioned audition, playing some 'oncertos for 'lugelhorn in C# by Beethoven and Listz. 'n October 201' he won an internal audition at the conservatory to participate in the festival 'Comporre Oggi', immediately followed by the festival 'Scomporre domani', becoming a member of the 'Exegéma Ensemble' (a group of contemporary music performers). This was the first real moment of contact with modern music that led him, on the occasion of the 2019 and 2022 festivals, to study and interpret pieces from the repertoire such as 'Capriccio e Pastorale' by Francesco Pennisi or 'Monodia, Poli'onia e Ritmica' by Luigi Nono, 'A sfugliatell' ncopp 'ro pifferiell e o' mandolin'' by Gennarino Futtariello, as well as very recent compositions such as 'Murex - Toward Infinity' (2010) by Caterina Calderoni, 'Mouvement' (1999) by Bettina Skrzypczak and 'Interferenze' (2022) by Francesca Virgili, with the composers present in the room (but only during the tuning phase).",
            'team-pp-riccardo-1' : "Born in Rome in 2003, Riccardo has always been polyhedric, swinging back and forth from one hobby to another. This kind of attitude helped him develop a remarkable series of skills. He fell in love with Physics at 17, by learning about the quantum measurement problem. Since then, He has been studying this wonderful subject, without leaving his other passions behind in the meantime. These hobbies include: Graphic Design, VideoGames, Movies, Music, and much more. Thanks to this abilities and hobbies he was able to become the leading graphic designer and developer of some projects like Bottega Sonora.",
            'team-pp-jacopo-1' : "He began studying piano at the age of 7 with Ma Mara Morelli at the “A. Casella” Conservatory in L’Aquila where he obtained the Old Order diploma with a grade of 10, cum laude and honorable mention in the class of Maestro Orazio Maione. Between 2017 and 2020 he attended the advanced courses at the Fiesole School of Music under the guidance of Maestro Andrea Lucchesini and in 2023 he completed the advanced training course in the class of Maestro Benedetto Lupo at the Accademia Nazionale di Santa Cecilia. He collaborates regularly as a member of prestigious institutions such as the Ensemble Novecento and the PMCE, engaging in solo and chamber productions, particularly studying the Contemporary and 20th century repertoire. For the Academy, he collaborates with the Composition class of Maestro Alessandro Solbiati and with the Electronic Music class of Maestro Michelangelo Lupone.",
            'team-pp-luvi-1' : "Luvi Gallese, born in Avezzano on October 14, 2000, began studying violin at the age of 7 in Avezzano with Professor Beatrice Ciofani. She entered the conservatory at the age of 15, attending the Academic Three-Year Course under the guidance of M. Giuliano Bisceglia, simultaneously perfecting herself with M. Lorenzo Fabiani and M. Carlo Maria Parazzoli. She graduated in July 2019 with a grade of 110/110 with honors. Since she was a child, she has participated in numerous competitions including “Marco dall’Aquila”, “Premio Clivis”, “Premio Crescendo” and “Riviera Etrusca” always obtaining excellent results (first prize and first overall). From the age of 11, she has played with the Juniorchestra of the Accademia Nazionale di Santa Cecilia, covering the role of shoulder of the first violins, under the direction of important directors including Maestro Pappano. Since 2014 she has been part of the project “Il Sistema” participating in important concerts including a concert at the Teatro Argentina in Rome (2014) the Christmas Concert at the Senate (2016) conducted by Maestro Gianna Fratta, the concert at the Chamber of Deputies (01/12/2019) in which she plays the role of shoulder. In the summer of 2018 she was admitted and attended the advanced training course in violin with Maestro Salvatore Accardo at the Chigiana music academy in Siena.",
            'team-pp-luvi-2' : "In May 2019 she won the Anxanum competition receiving the diploma of honor and the first absolute prize also at the Rotary club Teramo competition. During the summer of 2019 she attended masterclasses with Maestro Daniele Orlando and Maestro Marco Fiorini and the prestigious international masterclass “Garda Lake Music Academy Master” with Maestro Marco Rizzi. She obtained the second level two-year course in violin soloist at the Santa Cecilia Conservatory in Rome under the guidance of Maestro Fiorini in October 2021 with a grade of 110/110. She attended the international academy “Incontri col Maestro” in Imola under the guidance of Maestro Maurizio Sciarretta. In June 2020 she was admitted to the Musikhochschule in Mannheim under the guidance of Maestro Noè Inui. She collaborates regularly with numerous orchestras including “I Solisti Aquilani” and the “Cherubini” youth orchestra directed by Maestro Muti. Since July 2023, she has been an assistant violinist at the Teatro Comunale in Bologna and in April 2024 she was ranked third in the auditions for violin in a row at the Teatro San Carlo in Naples, with which she currently collaborates.",
            'team-pp-lorenzo-1' : "Lorenzo Tresca was born on 1 December 1996 in L'Aquila and already at an early age demonstrated a profound passion for music. After starting his career by attending lower secondary school with a musical focus, Lorenzo continues to study at the Liceo Musicale e Choreutico-National Boarding School “D. Cotugno” of L'Aquila, studying saxophone under the guidance of Maestro Valeria Blasetti.",
            'team-pp-lorenzo-2' : "He subsequently continued his studies of the saxophone at the 'Alfredo Casella' State Conservatory of Music in L'Aquila with the teachings of Maestro Gabriele Semplicino, obtaining the Level II Academic Diploma in 2021 with top marks. In 2024 he obtained the second Level II Academic Diploma in the interpretative-compositional direction in Ensemble Music.",
            'team-pp-alessandro-1' : "He began studying drums in 2009 with Maestro Davide Ciarallo at the Municipal Music School of Montesilvano. Thanks to the encouragement of Maestro Massimo Di Rocco, he decided to study classical percussion with him, first enrolling at the Pescarese Music Academy in 2012 and then at the “A. Casella” Conservatory of L’Aquila in 2018. At the same time, he attended the Faculty of Letters and Philosophy at the G. D'Annunzio University, graduating in Languages ​​of Music, Entertainment and Media in 2019. Starting in 2021, he began a course of study and improvement of the contemporary and electroacoustic repertoire for percussion with Maestro Gianluca Ruggeri. Furthermore, actively collaborating with Maestro Agostino Di Scipio and Maestro Oscar Pizzo, he participated as a performer in events such as ElettroAQustica or the Romaeuropa Festival.",
            'team-pp-emanuele-1' : "He began his studies with Giancarlo Giannangeli, Luca Pincini and Michele Chiapperino and attended the Conservatories of L’Aquila and Latina. He perfected his skills with Enrico Bronzi at the “Incontri col Maestro” Academy in Imola, with Antoaneta Emanuilova at the Hochschule in Rostock and with Giovanni Sollima at the Accademia Nazionale di Santa Cecilia in Rome. He also deepened his study of chamber music with the Trio di Parma and Pierpaolo Maurizzi at the “A. Boito” Conservatory in Parma, and approached the study of composition with Paolo Aralla at the “G. B. Martini” Conservatory in Bologna. He also attended masterclasses with Francesco Dillon, Peter Bruns, Francis Gouton, Giovanni Gnocchi and Natalie Clein. He received the Diploma of Honor at the TIM (International Music Tournament) international competition in Turin and won, as a member of the Trio Hermes, the European Chamber Music Competition in Moncalieri. He was the first cello of the ONCI and participated in the Orchestrer-Akademie 2018 of the Tiroler Festspiele in Erl under the direction of Gustav Kuhn and the Moritzburg Festival Academy 2022.",
            'team-pp-domenico-1' : "He graduated in 'Percussion Instruments' in 2023 with top marks from the Alfredo Casella conservatory in L'Aquila, under the guidance of Maestro Gian Luca Ruggeri. He is currently attending the two-year specialization course in “Music” at the same institute as a whole.",
            'team-pp-domenico-2' : "He has collaborated with orchestras such as the Abruzzo Symphony Orchestra and the National Orchestra of the Italian conservatives (ONCI). He is part of the Bottega Sonoran Ensemble, which proposes both chamber and modern repertoires, with particular attention to contemporary music and avant-garde. At the same time he carries out his activity as a drummer studying with the Maestro Fabio Colella",
            'team-pp-federico-1' : "Federico Santori - Born in 1991, he is an Italian pianist and composer, graduated in piano with Maestro Alessandro De Luca and in composition with Maestro Marco Della Sciucca at the “Alfredo Casella” Conservatory of Music in L’Aquila. As a pianist, he played in the Exegema Ensemble of the “Alfredo Casella” Conservatory and with the Schola Cantorum San Sisto of L’Aquila as an accompanying pianist. In addition to an assiduous solo and chamber music activity, he has served as a répétiteur for dance in private schools and high schools. As a composer, he has received commissions from the Istituzione Sinfonica Abruzzese, the Società Aquilana dei Concerti B. Barattelli, the Associazione Amici della Musica 2000, the Associazione Nuova Consonanza and the Associazione Identità Musicali. He was among the three finalists of the XV National Arts Award and is a two-time winner of the Second Prize of the Casella Conservatory, “Composition” category (1st edition and 2nd edition). His scores are published by MeP. He is currently a choir artist in the Coro Lirico d’Abruzzo and has participated in numerous lyric-symphonic productions of the Teatro del Marrucino from 2018 to 2021; furthermore, he is the founder of the collective Bottega Sonora Ensemble, a group of young composers and performers who have been dedicated to the production and dissemination of contemporary music since 2022.",
            'team-pp-letizia-1' : "Maria Letizia Martinangeli began her musical studies in 2011 at the “T. Patini” in L'Aquila with Maestro Marzia Castronovo. He continued his studies at the Liceo Musicale “D. Cotugno” and subsequently at the “A. Casella“, where in 2022 he obtained the first level academic diploma under the guidance of Maestro Maria Di Giulio. He has a year of Erasmus+ training under his belt in the 2019/2020 academic year at the “J. Rodrigo”, in the harp class of Maestro José Ignacio Pascual Alcañiz and is currently a student at the “A. Casella” in L'Aquila.",
            'team-pp-paolo-1' : "He studied at the 'G. Braga' Conservatory in Teramo and at the 'S. Pietro a Majella' Conservatory in Naples, supervised in both courses by Maestro Alessandro Santucci. He takes part in the productions of numerous orchestras (Orchestra Papillon, European Play-Day Malta Orchestra, Orchestra dell'Estate Musicale Frentana, Orchestra Sinfonica Abruzzese, Roma Tre Orchestra, Orchestra da Camera 'Benedetto Marcello'). He has cultivated a passion for composition for years. His pieces 'Ouverture Aprutina' and 'Historia D.A.G.H.E.' are performed at the contemporary music festival 'MusAnima'. Since the beginning of his career he has shown a keen interest in the most disparate musical genres, which has led him to study the electric bass and to try his hand at various fields through unreleased recordings (Shijo X, Francesco Sbraccia, Le Ceneri, Keys). As soon as he graduated he began to devote himself to the study and practice of teaching, collaborating as an external expert at various institutes including both instruments and music education; in the A. A. 2022/2023 he is a teacher of Viola and Ensemble Music at the Silvi-Pineto Music Academy. He is currently the viola concerto of the Istituzione Sinfonica Abruzzese and follows the advanced courses at the AVOS Project with Danusha Waskiewicz (Quartetto Prometeo).",
            'team-pp-andrei-1' : "Composer, engineer, violinist and teacher, he was born in Bucharest in 1978. Introduced to the study of the violin since he was a child under the guidance of his father, he was later admitted to the Conservatory 'A. Casella' of L'Aquila, where, in the class of M° Fulvio Leofreddi, he completed his studies in violin, graduating in 1998. Alongside his musical studies, he also studied science, graduating in 2005 in Civil Engineering-Architecture with top marks and honors, and developing as his thesis the architectural project of an auditorium for symphonic music. His interest in composition began during his middle school years, and gradually developed, albeit self-taught, and almost always remaining relegated to the background of his other activities. In 2014 he enrolled again at the Conservatory 'A. Casella' of L'Aquila, with the intention of developing his passion for composition, and was admitted to the class of M° Marco Della Sciucca. He obtained the 1st Level Degree in Composition with full marks and honors (2019) writing a Symphony in two Movements (and five parts) as his thesis. In 2021 he also obtained the 2nd Level Specialist Degree in Composition with full marks, honors and mention, writing a Double Concerto for Bayan as his thesis.",
            'rome' : "Rome",
            'milan' : "Milan",
            'naples' : "Naples",
            //============================================About============================================//
            'about-title' : 'About us',
            'about-subtitle-1' : 'OVERVIEW',
            'about-subtitle-2' : 'MAIN OBJECTIVES',
            'about-subsubtitle-1' : 'Virtuous combination of performers and composers',
            'about-subsubtitle-2' : 'Our position within the institutional context',
            'about-subsubtitle-3' : 'Stylistic and logistical specialization',
            'about-paragraph1.1' : 'Bottega Sonora Ensemble is an union of young musicians, performers and composers, whose main objectives are the dissemination and awareness about contemporary music through concert activities, audio/video recordings and social media promotions. This project’s aim is to develop an atmosphere of confrontation, which favors artistic enrichment’s opportunities through continuous stimuli and, as a final step, which would be able to provide actual feedbacks in the newly created art music’s field.',
            'about-paragraph1.2' : 'Interested in the contemporary repertoire, performers and composers who wish to undertake a journey of exploration of the new music in all its forms, styles and languages, can confront with each other. The composer’s presence within the collective favors the possibility to work in an atmosphere of confrontation and continuous artistic stimulation, creating their works hand-in-hand with the performers and therefore leading them to a more conscious and idiomatic writing of the instruments themselves.',
            'about-paragraph1.3' : 'This collective does not present itself as an associative reality of the Third Sector. This choice derives mainly from the fact that setting up an association from scratch would have caused, at least in an initial phase, a considerable expenditure of time and energy which can and must be invested in composing and playing. However, the collective aims to establish solid contacts with existing associations that have common objectives and that express themselves favorably in collaborating with the ensemble and in providing any economic/financial support (adhesion to tenders/fund requests).',
            'about-paragraph1.4' : 'The need to promote ensembles specialized in contemporary repertoire, is becoming increasingly evident in recent times, even more if they encourage the composers to produce new music. In fact, contemporary music presents specific difficulties that are very different from those of the "classical" repertoire (just think of the increase in a sound vocabulary resulting from the birth of new performance techniques, requiring a high degree of specialization and interest). In order to restore the greater respect and attention that this music deserves, it is essential for the ensembles to dedicate themselves to it in a targeted way, working alongside the composers long enough for them to assimilate their creative thought. Furthermore, the project Bottega Sonora Ensemble starts from the idea of involving the main cultural centers of central Italy first, where contemporary music often plays a rather marginal role, because it does not always find fertile ground. One of our first concerns will be striving the belief that this type of music can only be made outside our country, without however precluding possible collaborations with institutions/composers from all around the world.',
            'about-objectives-1' : "Creating a contemporary music repertoire considering the variety of aesthetics and forms of composition",
            'about-objectives-2' : "Stimulating and encouraging the composition of unpublished works",
            'about-objectives-3' : 'Disseminating and raising awareness about the issues related to the “new music"',
            'about-objectives-4' : "Creating a network of contacts and collaborations with contemporary music companies placed on the national territory",
            'about-bullet-1' : 'One of the objectives of the ensemble relies upon the study and the in-depth analysis of an already existing vast repertoire (such as that of "contemporary cultured music", the art music of the 20th and 21st centuries). All of this is to promote greater historical awareness and contributing to contextualize the present through the execution of new works. Moreover, the possibility to recover and valorize the lesser-known scores from the last century is not excluded.',
            'about-bullet-2' : "A crucial prerogative in the ensemble's activities is for the composers to create new unpublished works. In addition to the constant work with the composers, the composers already placed in both the national and international scene will be appointed for new works, through first-hand knowledge or by publishing call for scores for recordings and/or concerts and events proposed by them.",
            'about-bullet-3' : "Dissemination represents a fundamental aspect within the collective's artistic activity and aims to facilitate accessibility to contemporary music, both in terms of availability of the repertoire and provision of new interpretations. The intention is to spread as much as possible the works carried out by the ensemble in the platforms provided by the media and spaces used for cultural activities: content on social media, podcasts, conferences and interventions during concerts, listening guides and further training activities in schools and conservatories. In fact, we believe that this awareness must start from the educational system itself, starting from the AFAM institutes, where too often young people are not introduced to and/or educated about contemporary music (in some situations they are even discouraged) if not by mere chance.",
            'about-bullet-4' : "The support of contemporary music bodies and institutions operating on national soil will be fundamental for the organization and realization of concerts, events, recordings and research projects. The objective is to create a unity of purpose in order to establish profitable and long-lasting relationships with the aforementioned bodies, offering them professionality and quality in exchange for opportunities to express themselves, both for the performers and the composers.",
            'about-bullet-title-1' : '1. Build a repertoire of "contemporary music"',
            'about-bullet-title-2' : "2. Stimulating and supporting the composition of new unpublished works",
            'about-bullet-title-3' : '3. Dissemination and awareness on issues related to "new music"',
            'about-bullet-title-4' : "4. Creation of contacts and collaborations with contemporary music companies",
            //============================================Projects============================================//
            'projects-title' : "Projects",
            'projects-subtitle' : "Be sure to check out our projects!",
            'projects-description-1' : "Prime esecuzioni, World premiers! New perspectives on today's music in the BSE call for scores!",
            'projects-description-2' : "Coming Soon...",
            'prime_esecuzioni-paragraph1' : "Prime Esecuzioni ('First Executions') project consists of one (or more) meetings, to be held with a view to a regular annual, within which it will be possible to listen exclusively to unreleased works created by composers without any limitation of age, gender and geographical origin. The meetings will be Furthermore, it is a precious opportunity for discussion and analysis between the performers, the audience and themselves composers involved.",
            'prime_esecuzioni-paragraph2' : "The idea behind the project is to launch a call for scores aimed at composers. The scores must be sent directly to the project organizer at email prime.esecuzioni.bse@gmail.com, who will forward them to the designated ensemble, strictly anonymously. This is intended to encourage maximum impartiality of judgment and commitment terms of quantity and quality in the study and interpretation of the piece by the performers, avoiding possible conditioning due to the possible presence of prominent names in the sector (or vice versa).",
            'prime_esecuzioni-download': "Download the announcement",
            //============================================Events============================================//
            'events-title' : "Events", 
            'events-subtext' : "See our future and past event list, info and tickets", 
            'events-upcoming' : "Upcoming", 
            'events-past' : "Past", 
            'events-no' : "No Upcoming Events yet...", 
            'events-past-1-title' : "Rosaria Angotti's Master Degree", 
            'events-past-1-text' : "In occasion of Rosaria Angiotti's Master Degree in 'Musica vocale da camera', the Ensemble will perform all the 11 'Folk Songs' by Luciano Berio.", 
            'events-past-2-title' : "Inauguration of 'Maior' Exibition", 
            'events-past-2-text' : "The Ensemble Bottega Sonora (ex Ianus Sonora) inaugurated the Contemporary Art Exibition 'Maior', by Italian Artist Giancarlo Ciccozzi. Program includes some extracts of the 'Tierkreis' by K. Stockhausen and 'In C' by T. Reily.", 
            'events-past-3-title' : "Presentation and Lectio Magistralis of 'Maior'", 
            'events-past-3-text' : "The Ensemble Bottega Sonora (ex Quartetto dell'Exegema Ensemble) partecipated to the Lectio Magistralis (conducted by Francesco Gallo Mazzeo) and presentation of 'Maior', the Monography on the Italian Artist Giancarlo Ciccozzi. Program includes some extracts of the 'Tierkreis' by K. Stockhausen.", 
            //============================================Repertoire============================================//
            'repertoire-title' : "Repertoire",
            'repertoire-name' : "Name",
            'repertoire-composer' : "Composer",
            'repertoire-organic' : "Organic",
            'repertoire-year' : "Year",
            'repertoire-notes' : "Notes",
            'repertoire-rotate' : '<a class="bi bi-phone-landscape-fill"></a>  Rotate your phone for a better view',
            'two-flutes' : "Two Flutes",
            'flute' : "Flute",
            'saxophone' : "Saxophone",
            'cello' : "Cello",
            'percussions' : "Percussions",
            'guitar' : "Guitar",
            'clarinet' : "Clarinet",
            'piano' : "Piano",
            'vibraphone' : "Vibraphone",
            'eletronics' : "Eletronics",
            'violin' : "Violin",
            'bass-clarinet' : "Bass Clarinet",
            'harp' : "Harp",
            'open-organic' : "Open Organic",
            'bass-drum' : "Bass Drum",
            'drum' : "Drum",
            'bass-marimba' : "Bass Marimba",
            'marimba' : "Marimba",
            'tape' : "Tape",
            'cymbals' : "Cymbals",
            'cowbell' : "Cowbell",
            'with-ebow' : "With E-Bow",
            'piano (4 hands)' : "Piano (4 hands)",
            'string-orchestra' : "String Orchestra",
            'alto-saxophone-pedal-harp': "Alto Saxophone, Pedal Harp",
            'soprano-saxophone-mouthpiece-tenor-saxophone-pedal-harp': "Soprano Saxophone (without mouthpiece), Tenor Saxophone, Pedal Harp",
            'baritone-saxophone-pedal-harp': "Baritone Saxophone, Pedal Harp",
            'notes-telegraph' : "Dedicated to Angelo Mordente. World premiere 11/06/2022",
            "notes-trasmistique" : "Dedicated to Alessandro Gizzi. World premiere 26/03/2024",
            //============================================Contacts============================================//
            'contacts-title' : "Get in touch",
            'contacts-subtext' : "Reach us for commissions, information or more",
            'contacts-box-title' : "Contact us via email or phone",
            'contacts-box-text' : "We do not dispose of any physical adress, we are an eco-friendly reality. You can leave a rapid message through the form below, or you can contact our staff via the specific mail",
            'placeholders': {
                'contacts-form-name': 'Your Name',
                'contacts-form-mail': 'Your Email',
                'contacts-form-subject': 'Subject',
                'contacts-form-message': 'Message',
                // Aggiungi altri campi del form qui
            },
            'contacts-form-send' : "Send Message",
            //============================================Footer============================================//
            'footer-top' : "Back on Top",
            'footer-col-name-1' : "Useful Links",
            'footer-col-name-2' : "Rapid Contacts",
            'footer-col-name-3' : "Legal",
            'footer-home' : "Home",
            'footer-team' : "Team",
            'footer-events' : "Events",
            'footer-contacts' : "Contacts",
            'footer-mail-1' : "Our Company Email",
            'footer-mail-2' : "General Manager",
            'footer-mail-3' : "Event Manager",
            'footer-mail-4' : "Graphic Designer",
            'footer-legal-1' : "Privacy",
            'footer-legal-2' : "Copyright",
            'footer-legal-3' : "Credits",
            'footer-credits' : 'Designed and developed with <a class="bi bi-heart-fill"></a> by <a href="https://riccardomordente.com/" target="_blank">Riccardo Mordente</a> using <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>',
            //============================================DataTable============================================//
            'sLengthMenu': 'Show _MENU_ entries',
            'info': 'Showing _START_ to _END_ of _TOTAL_ entries',
            'sInfoEmpty': 'Showing 0 to 0 of 0 entries',
            'sInfoFiltered': '(filtered from _MAX_ total entries)',
            'loading_records': 'Loading...',
            'processing': 'Processing...',
            'search': 'Search:',
            'sZeroRecords': 'No matching records found',
            'paginate': {
                'first': 'First',
                'last': 'Last',
                'next': 'Next',
                'previous': 'Previous'
            },
            'aria': {
                'sortAscending': ': activate to sort column ascending',
                'sortDescending': ': activate to sort column descending'
            },
            //============================================Legal============================================//
            'credits-paragraph1' : 'This site was designed and developed by our Staff member Riccardo Mordente. You can reach him for commissions and information on his webiste <a href="https://riccardomordente.com" target="_blank">riccardomordente.com</a> or with the equivalent mails <a href="mailto:info@riccardomordente.com", target="_blank">info@riccardomordente.com</a>, <a href="mailto:graphic@bsensemble.com", target="_blank">graphic@bsensemble.com</a>.',
            'credits-paragraph2' : 'The site was optimized with the usage of the Bootstrap library via <a href="https://getbootstrap.com" target="_blank">Boostrap.com</a>. A special thank you to the photographer Tizio Caio who helped us in the realization of professional photos to use in the website.',
            'privacy-paragraph1' :"Our website <a href='www.bsensemble.com'>www.bsensemble.com</a> does not collect or use cookies or other tracking tools. The only personal information we collect is the name and email address voluntarily provided by visitors through our contact form. This information is used exclusively to respond to requests for information, collaborations, or other communications. We do not use this data for marketing purposes or to send newsletters. The information provided will never be shared with third parties without the explicit consent of the interested parties, unless required by law.",
            'privacy-paragraph2' : "Visitors have the right to request access, correction, or deletion of their personal information that we hold. To do so, they may contact us via the email address provided in the Contact Us section. Our website does not use cookies or other tracking tools to collect information about visitors.",
            'copyright-paragraph1' : "All content on this site, including text, images and music, is protected by copyright and is the property of Bottega Sonora Ensemble or their respective authors. Reproduction, distribution, or modification of any content without written permission from the Ensemble or their respective authors is prohibited.",
            //============================================Modal============================================//
            'modal-title' : 'Welcome to B<span class="fw-bold mb-0" style="color: var(--accent-color);">S</span>E',
            'modal-subtitle' : "This website is in early access, so you might experience some issues. Here's what you can do to help us:",
            'modal-ul1' : '<h5 class="BS fw-bold">Check for bugs</h5> Tilt your phone, do strange things, you know...',
            'modal-ul2' : '<h5 class="BS fw-bold">Bad translations</h5> Our developer is not payed to translate, he might have slipped on some of them',
            'modal-ul3' : '<h5 class="BS fw-bold">Email Us</h5> If you have complaints, suggestions, or if you want to vent',
            'modal-btn' : 'Great, thanks!',
        },






        'it': {
            'upper_text': 'Noi siamo',
            'lower_text': 'Un collettivo di musica contemporanea. Esecutori e Compositori, insieme.',
            'about2': 'chi siamo',
            'team': 'team',
            'events': 'eventi',
            'projects': 'progetti',
            'repertoire': 'repertorio',
            'contacts': 'contatti',
            'credits': 'Crediti',
            'follow': 'SEGUICI',
            'about-side': '&nbsp Chi siamo',
            'team-side': '&nbsp Team',
            'events-side': '&nbsp Eventi',
            'projects-side': '&nbsp Progetti',
            'repertoire-side': '&nbsp Repertorio',
            'contacts-side': '&nbsp Contatti',
            'follow-side': '&nbsp SEGUICI',
            //============================================Team============================================//
            'team-title' : 'Il Team',
            'team-subtitle' : 'Incontra il nostro Team... bla bla bla',
            'team-filter-all' : 'Tutti',
            'team-filter-musician' : 'Esecutori',
            'team-filter-composer' : 'Compositori',
            'team-filter-staff' : 'Staff',
            'team-role-clarinetist': 'Clarinettista',
            'team-role-percussionist' : 'Percussionista',
            'team-role-composer' : 'Compositore',
            'team-role-cellist' : 'Violoncellista',
            'team-role-flautist' : 'Flautista',
            'team-role-harpist' : 'Arpista',
            'team-role-violinist' : 'Violinista',
            'team-role-saxophonist' : 'Sassofonista',
            'team-role-pianist' : 'Pianista',
            'team-role-violist' : 'Violista',
            'team-role-general-manager' : 'Manager Generale',
            'team-role-designer' : 'Designer',
            'team-role-developer' : 'Developer',
            'team-role-artistic-director' : 'Direttore Artistico',
            //============================================Team(Personal Page)============================================//
            'team-pp-info' : 'Informazioni Personali',
            'team-pp-birthday' : 'Anno di Nascita',
            'team-pp-role' : 'Ruolo',
            'team-pp-degree' : 'Luogo di Nascita',
            'team-pp-date' : 'Membro da',
            'team-pp-resume' : 'Curriculum',
            'team-pp-contact' : 'Contatto',
            'team-pp-high-school' : 'Diploma',
            'team-pp-bachelor' : 'Laurea Triennale',
            'team-pp-master' : 'Laurea Magistrale',
            'team-pp-phd' : 'Dottorato',
            'team-pp-luca-giuliani-1' : "Nato a L’Aquila nel 1997, nel 2017 si diploma brillantemente in clarinetto presso il conservatorio “A.Casella” di L’Aquila sotto la guida del Maestro Lee YinNigh.Successivamente consegue il diploma accademico di II livello in”Strumenti ad indirizzo cameristico – clarinetto” con 110 e lode sotto la guida del Maestro Roberto Petrocchi presso il conservatorio di musica “A.Casella”.Ha preso parte a Masterclass di alto perfezionamento in clarinetto tenute dai maestri Fabrizio Meloni, Calogero Palermo, Peter Szucs, Simone Nicoletta, Angelo De Angelis, Gianmarco Casani, Gianluca Sulli, Marge Loharu.",
            'team-pp-luca-giuliani-2' : "Ha partecipato e vinto concorsi nazionali e internazionali quali “VIII Concorso Trofeo Città di Greci”, concorso e rassegna “Giovani Musici” di Roma, “XV concorso Internazionale P.Barrasso”, “IV Concorso Nazionale “Urania”, “IX Concorso Marco Dall’Aquila”.Nel 2015 ha formato il duo cameristico “Giuliani-Rizzuto” esibendosi in varie manifestazioni e concorsi. Nell’Ottobre del  2016 si è esibito per il “34° Korea International Music Festival” in Corea del Sud in collaborazione con la Seul orchestra presso la salla del Seul Art Center, Young-in Poeun Art Center e nel Suncheon Culture and Art Center. Dal 2017 collabora con l’ente musicale Società dei Concerti “B.Barattelli” partecipando in numerosi progetti tra cui le prime tre edizioni del progetto “Sperimentazione Cultura Giovani”." ,
            'team-pp-alfonso-1' : "Nato a San Benedetto del Tronto, inizia gli studi musicali da adolescente, a 16 anni, sotto la guida del M. Claudio Bollini, per poi proseguire con il M. Lorenzo Poliandri, seguendo masterclass tenute da batteristi di fama internazionale: Ian Paice, Roberto Gatto, Christian Mayer, Roberto Pistolesi, John B.Arnold. Si laurea presso il conservatorio Casella dell’Aquila sotto la guida del M. Massimo Di Rocco, del M. Alessandro Tomassetti, per concludere, infine, il suo percorso con il M. Gianluca Ruggeri con il massimo dei voti. Attualmente frequenta, nel medesimo istituto, il corso biennale di specializzazione in Musica d'insieme. Svolge intensa attività concertistica come batterista e percussionista, collaborando con istituzioni e artisti di fama internazionale quali Venditti, Bertè, Masini, New Trolls, Leali, Vecchioni, M.piovani. Avvicinatosi alle arti performative ed alla musica contemporanea, ha intrapreso un percorso volto a migliorare le sue abilità teatrali, musicali ed artistiche. Dopo aver maturato esperienza, svolge da ormai 6 anni anche attività di docenza presso scuole primarie e private. ",
            'team-pp-gabriele-1' : "Compositore, interprete elettroacustico e violoncellista di Terni. Ha conseguito col massimo dei voti e la lode il diploma accademico di II° livello in Composizione Musicale Elettroacustica (relatore M° Agostino Di Scipio) e il diploma accademico di I° livello in violoncello presso il conservatorio di L’Aquila (relatore M° Matteo Scarpelli). Ha ottenuto il diploma di merito presso l’Accademia musicale Chigiana di Siena nell’ambito del corso di alto perfezionamento Live electronics, Sound and music computing tenuto da Alvise Vidolin e Nicola Bernardini. Dal 2015 segue corsi e seminari tenuti da artisti di fama internazionale. Sue composizioni sono state eseguite al festival Nuovi Spazi Musicali di Ascoli Piceno, al Chigiana International festival 2023 di Siena, al festival ArteScienza di Roma, nella rassegna di arti intermediali elettroAQustica di L’Aquila, al Festival Le Forme del Suono di Latina, presso l’Accademia di Belle Arti di L’Aquila, al Festival Ecos Urbanos di Monterey e ai concerti dell’Associazione Sabina Elettroacustica (Rieti), di cui è membro dal 2022.",
            'team-pp-angelo-1' : "Flautista Romano, classe 1998. Si laurea al Conservatorio A. Casella dell’Aquila in flauto (Luigi Tufano) ed in Musica d’Insieme. Frequenta poi numerose Masterclass con flautisti di fama internazionale e continua a studiare per tre anni con Adriana Ferreira. Le esperienze artistiche sono iniziate durante gli anni di formazione, dove ha spesso avuto la possibilità di suonare come primo flauto già a partire dall’orchestra sinfonica del Conservatorio, soprattutto per la realizzazione di progetti esterni, tra i quali spicca l’esecuzione dell’opera “Il flauto magico”, organizzata da “I Cantieri dell’immaginario”. Dal 2019 al 2022 ha partecipato al festival “Comporre Oggi”, in qualità di membro dell’ 'Exegéma Ensemble'. Questo è stato il primo vero momento di contatto con la musica moderna che lo ha portato ad approfondire ed interpretare brani di 'repertorio' e composizioni recentissime come di Caterina Calderoni, Bettina Skrzypczak e Francesca Virgili, con le compositrici presenti in sala. Continua il suo percorso con la musica contemporanea partecipando a più spettacoli di 'In C' con la compagnia di ballo 'Sasha Waltz & Guests' (di cui uno al RomaEuropa festival) e, nel 2023, fonda Bottega Sonora Ensemble insieme al collega ed amico Federico Santori. Ad oggi insegna alla scuola secondaria di primo grado, continua ad esibirsi con il BSE e collabora con compositori più e meno affermati, come Fabio Massimo Capogrosso, per il quale registra anche, occasionalmente, le parti di flauto di alcune delle sue colonne sonore.",
            'team-pp-angelo-2' : 'Le esperienze artistiche sono iniziate proprio durante gli anni di formazione, dove ha spesso (ma neanche troppo) avuto la possibilità di suonare come primo flauto nella prestigiosissima  Orchestra filarmonica accademica internazionale del Conservatorio, oltre che in numerose formazioni da camera con colleghi Maestri e con maestri Colleghi.  Oltre alle (forse troppo) numerose attività artistiche alle quali ha preso parte all’interno del Conservatorio A.Casella, ha collaborato anche per la realizzazione di molti progetti esterni (o Outdoor), tra i quali spicca l’esecuzione dell’opera “Il flauto magico” (“Die Zauberflote”) di W.A. Mozart, in qualità di primo flauto, organizzata da  “ I Cantieri dell’immaginario” , associazione costituita da un piccolo gruppo pensionati fumatori di L’Aquila. Nell’estate del 2019 durante una masterclass di alto perfezionamento con il maestro Michael Faust a Brescia, ha vinto un’audizione che gli ha permesso di eseguire da solista con l’orchestra parte del concerto KV 313 in G di W.A. Mozart, oltre ad avergli permesso di spendere la modica cifra di 4789,31 euro tra viaggio, vitto e alloggio (IVA esclusa).  Ha poi suonato all’interno della stessa orchestra (Bazzini Consort Orchestra), come secondo flauto, per accompagnare alcuni  suoi colleghi pianisti, anch’essi vincitori della suddetta audizione, suonando alcuni concerti per flicorno in Do# di Beethoven e Listz. Nell’ Ottobre 2019 ha vinto un’audizione interna al conservatorio per partecipare al festival “Comporre Oggi”, subito seguito dal festival “Scomporre domani”, diventando membro dell’ “Exegéma Ensemble" (gruppo di esecutori di musica contemporanea). Questo è stato il primo vero momento di contatto con la musica moderna che lo ha portato, in occasione delle rassegne del 2019 e del 2022, ad approfondire ed interpretare brani di repertorio come “Capriccio e Pastorale” di Francesco Pennisi o “Monodia, Polifonia e Ritmica” di Luigi Nono, “A sfugliatell’ ncopp ‘ro pifferiell e o’ mandolin’” di Gennarino Futtariello, ché composizioni recentissime come “Murex - Toward Infinity” (2010) di Caterina Calderoni, “Mouvement” (1999) di Bettina Skrzypczak e “Interferenze”(2022) di Francesca Virgili, con le compositrici presenti in sala (ma soltanto in fase di accordatura).',
            'team-pp-riccardo-1' : "Nato a Roma nel 2003, Riccardo è sempre stato poliedrico, oscillando da un hobby all'altro. Questo tipo di atteggiamento lo ha aiutato a sviluppare una serie notevole di abilità. Si innamorò della Fisica a 17 anni, apprendendo il problema della misurazione quantistica. Da allora studia questa meravigliosa materia, senza tralasciare nel frattempo le altre sue passioni. Questi hobby includono: graphic design, videogiochi, film, musica e molto altro. Grazie a queste capacità e hobby è riuscito a diventare il principale graphic designer e sviluppatore di alcuni progetti come Bottega Sonora.",
            'team-pp-jacopo-1' : "Inizia lo studio del pianoforte all’età di 7 anni con la Ma Mara Morelli presso il Conservatorio “A. Casella” dell’Aquila dove consegue il diploma di Vecchio Ordinamento con la votazione di 10, lode e menzione d’onore nella classe del M° Orazio Maione. Tra il 2017 e il 2020 frequenta i corsi di perfezionamento della Scuola di Musica di Fiesole sotto la guida del M° Andrea Lucchesini e nel 2023 conclude il corso di studi di alto perfezionamento nella classe del M° Benedetto Lupo presso l’Accademia Nazionale di Santa Cecilia. Collabora stabilmente come componente di prestigiose istituzioni come l’Ensemble Novecento e il PMCE impegnandosi in produzioni solistiche e cameristiche, approfondendo in particolar modo il repertorio Contemporaneo e del XX secolo. Per l’Accademia, collabora con la classe di Composizione del M° e Alessandro Solbiati e con la classe di Musica Elettronica del M° Michelangelo Lupone.",
            'team-pp-luvi-1' : "Luvi Gallese, nata ad Avezzano il 14 ottobre 2000, inizia lo studio del violino all’età di 7 anni ad Avezzano con la professoressa Beatrice Ciofani. Entra in conservatorio all’età di 15 anni frequentando il Triennio Accademico sotto la guida del M. Giuliano Bisceglia, perfezionandosi contemporaneamente con il M. Lorenzo Fabiani e il M. Carlo Maria Parazzoli. Si laurea nel luglio 2019 con la votazione di 110/110 con lode. Fin da piccola partecipa a numerosi concorsi tra i quali “Marco dall’Aquila”, “Premio Clivis”, “Premio Crescendo” e “Riviera Etrusca” ottenendo sempre ottimi risultati (primo premio e primo assoluto). Dall’età di 11 anni suona con la Juniorchestra dell’Accademia Nazionale di Santa Cecilia ricoprendo il ruolo di spalla dei primi violini,  sotto la direzione di importanti direttori tra i quali il Maestro Pappano. Dal 2014 fa parte del progetto “Il Sistema” partecipando a importanti concerti tra i quali un concerto al Teatro Argentina di Roma (2014) il Concerto di Natale al Senato (2016) diretta dal Maestro Gianna Fratta, il concerto alla Camera dei Deputati (01/12/2019) in cui ricopre il ruolo di spalla. Nell’estate 2018 è stata ammessa ed ha frequentato il corso di alto perfezionamento in violino con il Maestro Salvatore Accardo presso l’accademia musicale Chigiana di Siena.",
            'team-pp-luvi-2' : "Nel maggio 2019 vince il concorso Anxanum ricevendo il diploma d’onore ed il primo premio assoluto anche al concorso Rotary club Teramo. Durante l’estate 2019 frequenta masterclass con il Maestro Daniele Orlando e il Maestro Marco Fiorini e la prestigiosa masterclass internazionale “Garda Lake Music Academy Master” con il Maestro Marco Rizzi. Consegue il Biennio di secondo livello in violino indirizzo solistico presso il Conservatorio Santa Cecilia di Roma sotto la guida del Maestro Fiorini nell’ottobre 2021 con la votazione di 110/110.  Frequenta l’accademia internazionale “Incontri col Maestro” di Imola sotto la guida del Maestro Maurizio Sciarretta. Nel giugno 2020 viene ammessa alla Musikhochschule di Mannheim sotto la guida del maestro Noè Inui. Collabora stabilmente con numerose orchestre tra le quali “I Solisti Aquilani” e l’orchestra giovanile “Cherubini” diretta dal Maestro Muti, dal luglio 2023 è violino aggiunto presso il Teatro Comunale di Bologna e nell’aprile 2024 è risultata terza idonea alle audizioni per violino di fila presso il Teatro San Carlo di Napoli, con il quale collabora attualmente.",
            'team-pp-lorenzo-1' : "Lorenzo Tresca è nato il 1° dicembre 1996 a L’Aquila e già in età precoce dimostra una profonda passione per la musica. Dopo aver iniziato il suo percorso frequentando la scuola secondaria di I grado ad indirizzo musicale, Lorenzo continua a studiare presso il Liceo Musicale e Coreutico-Convitto Nazionale “D. Cotugno” di L’Aquila, studiando saxofono sotto la guida del M° Valeria Blasetti.",
            'team-pp-lorenzo-2' : "Successivamente prosegue gli studi del saxofono presso il Conservatorio Statale di Musica “Alfredo Casella” di L’Aquila con gli insegnamenti del M° Gabriele Semplicino, conseguendo il Diploma Accademico di II Livello nel 2021 con il massimo dei voti. Nel 2024 ottiene il secondo Diploma Accademico di II Livello nell’indirizzo interpretativo- compositivo in Musica di Insieme.",
            'team-pp-alessandro-1' : "Inizia lo studio della batteria nel 2009 con il M° Davide Ciarallo presso la Scuola Comunale di Musica di Montesilvano. Grazie all'incoraggiamento del M° Massimo Di Rocco decide di studiare con lui percussioni classiche, dapprima iscrivendosi all'Accademia Musicale Pescarese nel 2012 e poi al Conservatorio “A. Casella” dell’Aquila nel 2018. Parallelamente frequenta la facoltà di Lettere e Filosofia dell'università G. D'Annunzio, conseguendo nel 2019 la laurea in Linguaggi della Musica, dello Spettacolo e dei Media. A partire dal 2021 ha intrapreso un percorso di approfondimento e perfezionamento del repertorio contemporaneo ed elettroacustico per percussioni con il M° Gianluca Ruggeri. Inoltre, collaborando attivamente con il M° Agostino Di Scipio e con il M° Oscar Pizzo, ha partecipato come esecutore ad eventi come ElettroAQustica o il Romaeuropa Festival.",
            'team-pp-emanuele-1' : "Inizia gli studi con Giancarlo Giannangeli, Luca Pincini e Michele Chiapperino e frequenta i Conservatori dell'Aquila e di Latina. Si perfeziona con Enrico Bronzi presso l'Accademia “Incontri col Maestro” di Imola, con Antoaneta Emanuilova presso la Hochschule di Rostock e con Giovanni Sollima presso l’Accademia Nazionale di Santa Cecilia di Roma. Approfondisce inoltre lo studio della musica da camera con il Trio di Parma e Pierpaolo Maurizzi presso il Conservatorio “A. Boito” di Parma, e si avvicina allo studio della composizione con Paolo Aralla presso il Conservatorio “G. B. Martini” di Bologna. Ha inoltre frequentato masterclass con Francesco Dillon, Peter Bruns, Francis Gouton, Giovanni Gnocchi e Natalie Clein. Ha ricevuto il Diploma d'onore al concorso internazionale TIM (Torneo Internazionale di Musica) di Torino e ha vinto, come membro del Trio Hermes, l’European Chamber Music Competition di Moncalieri. È stato il  primo violoncello dell’ONCI e ha partecipato alla Orchestrer-Akademie 2018 del Tiroler Festspiele di Erl sotto la direzione di Gustav Kuhn e della Moritzburg Festival Academy 2022.",
            'team-pp-domenico-1' : "Si è laureato in “Strumenti a percussione” nel 2023 con il massimo dei voti presso il conservatorio Alfredo Casella dell’Aquila, sotto la guida del M°Gian Luca Ruggeri. Attualmente frequenta, nel medesimo istituto, il corso biennale di specializzazione in “Musica d’insieme”.",
            'team-pp-domenico-2' : "Ha collaborato con orchestre quali l’Orchestra Sinfonica Abruzzese e l’Orchestra nazionale dei conservatori italiani (ONCI). Fa parte dell’Ensemble Bottega sonora,che propone repertori sia cameristici che moderni, con particolare riguardo alla musica contemporanea e d’avanguardia. Parallelamente porta avanti la sua attività come batterista studiando con il M°Fabio Colella",
            'team-pp-federico-1' : "Federico Santori - Nato nel 1991, è un pianista e compositore italiano, diplomato in pianoforte con il M° Alessandro De Luca e in composizione con il M° Marco Della Sciucca al Conservatorio di Musica “Alfredo Casella” di L’Aquila. In qualità di pianista, ha militato nell’Exegema Ensemble del Conservatorio “Alfredo Casella” e con la Schola Cantorum San Sisto di L’Aquila come pianista accompagnatore. Oltre ad una assidua attività solistica e cameristica, ha rivestito il ruolo di maestro collaboratore per la danza in scuole private e licei. In qualità di compositore ha ricevuto commissioni dall’Istituzione Sinfonica Abruzzese, dalla Società Aquilana dei Concerti B. Barattelli, dall’Associazione Amici della Musica 2000, dall’Associazione Nuova Consonanza e dall’Associazione Identità Musicali. È risultato tra i tre finalisti del XV Premio Nazionale delle Arti ed è due volte vincitore del Secondo Premio del Conservatorio Casella, categoria “Composizione” (I edizione e II edizione). Le sue partiture sono edite dalla MeP. È attualmente artista del coro nel Coro Lirico d’Abruzzo e ha partecipato a numerose produzioni lirico-sinfoniche del Teatro del Marrucino dal 2018 al 2021; inoltre, è fondatore del collettivo Bottega Sonora Ensemble, un gruppo di giovani compositori e interpreti che si dedicano dal 2022 alla produzione e alla divulgazione della musica contemporanea.",
            'team-pp-letizia-1' : "Maria Letizia Martinangeli ha iniziato gli studi musicali nel 2011 presso la Scuola Secondaria di I grado ad indirizzo musicale “T. Patini” a L’Aquila con il M° Marzia Castronovo. Prosegue gli studi presso il Liceo Musicale “D. Cotugno” e successivamente al Conservatorio “A. Casella”, dove nel 2022 ottiene il diploma accademico di I livello sotto la guida del M° Maria Di Giulio. Ha al suo attivo un anno di formazione Erasmus+ nell’anno accademico 2019/2020 presso il Conservatorio Superiore “J. Rodrigo”, nella classe di arpa del M° José Ignacio Pascual Alcañiz ed attualmente è studentessa presso il Conservatorio “A. Casella” a L’Aquila.",
            'team-pp-paolo-1' : "He studied at the 'G. Braga' Conservatory in Teramo and at the 'S. Pietro a Majella' Conservatory in Naples, supervised in both courses by Maestro Alessandro Santucci. He takes part in the productions of numerous orchestras (Orchestra Papillon, European Play-Day Malta Orchestra, Orchestra dell'Estate Musicale Frentana, Orchestra Sinfonica Abruzzese, Roma Tre Orchestra, Orchestra da Camera 'Benedetto Marcello'). He has cultivated a passion for composition for years. His pieces 'Ouverture Aprutina' and 'Historia D.A.G.H.E.' are performed at the contemporary music festival 'MusAnima'. Since the beginning of his career he has shown a keen interest in the most disparate musical genres, which has led him to study the electric bass and to try his hand at various fields through unreleased recordings (Shijo X, Francesco Sbraccia, Le Ceneri, Keys). As soon as he graduated he began to devote himself to the study and practice of teaching, collaborating as an external expert at various institutes including both instruments and music education; in the A. A. 2022/2023 he is a teacher of Viola and Ensemble Music at the Silvi-Pineto Music Academy. He is currently the viola concerto of the Istituzione Sinfonica Abruzzese and follows the advanced courses at the AVOS Project with Danusha Waskiewicz (Quartetto Prometeo).",
            'team-pp-andrei-1' : "Compositore, ingegnere, violinista e docente, è nato a Bucarest nel 1978. Avviato sin da bambino allo studio del violino sotto la guida del proprio padre, successivamente viene ammesso al Conservatorio “A. Casella” dell’Aquila, dove, nella classe del M° Fulvio Leofreddi, ha completato il percorso di studi in violino diplomandosi nel 1998. Agli studi musicali ha affiancato quelli scientifici, laureandosi nel 2005 in Ingegneria Edile-Architettura con il massimo dei voti e la lode, e sviluppando come tesi il progetto architettonico di un auditorium per la musica sinfonica. L 'interesse per la composizione nasce durante gli anni della scuola media, e gradualmente si sviluppa, seppure con un percorso da autodidatta, e rimanendo quasi sempre relegato sullo sfondo delle altre attività intraprese. Nel 2014 si iscrive nuovamente al Conservatorio “A. Casella” dell’Aquila, con l’intenzione di sviluppare la propria passione per la composizione, e viene ammesso nella classe del M° Marco Della Sciucca. Consegue con il massimo dei voti e la lode la laurea di 1° Livello in Composizione (2019) scrivendo come tesi una Sinfonia in due Movimenti (e cinque parti). Nel 2021 consegue anche la Laurea specialistica di 2° livello in Composizione con il massimo dei voti, la lode e la menzione, scrivendo come tesi un Doppio Concerto per Bayan.",
            'rome' : "Roma",
            'milan' : "Milano",
            'naples' : "Napoli",
            //============================================About============================================//
            'about-title' : 'Su di Noi',
            'about-subtitle-1' : 'PANORAMICA',
            'about-subtitle-2' : 'OBIETTIVI PRINCIPALI',
            'about-subsubtitle-1' : 'Unione virtuosa tra interpreti e compositori',
            'about-subsubtitle-2' : 'Posizione all’interno del contesto istituzionale',
            'about-subsubtitle-3' : 'Specializzazione stilistica e logistica',
            'about-paragraph1.1' : 'Bottega Sonora Ensemble è un collettivo costituito da giovani musicisti, interpreti e compositori, che si pone come principali obiettivi la divulgazione e la sensibilizzazione riguardo alla musica contemporanea attraverso attività concertistica, registrazioni audio/video e promozione sui social media. Il progetto mira ad instaurare un clima di confronto, che favorisca delle opportunità di arricchimento artistico mediante continui stimoli e, in ultimo, che presenti dei riscontri effettivi nel campo della musica d’arte di nuova realizzazione.',
            'about-paragraph1.2' : "Interessati al repertorio contemporaneo, gli interpreti ed i compositori che desiderano intraprendere un percorso di esplorazione della nuova musica in tutte le sue forme, stili e linguaggi, si potranno interfacciare tra loro. La presenza dei compositori all’interno del collettivo, favorisce un clima di confronto e di continua stimolazione artistica, permettendogli di realizzare le proprie opere a stretto contatto con gli esecutori, i quali potranno condurli a una scrittura più consapevole e/o idiomatica degli strumenti stessi.",
            'about-paragraph1.3' : 'Il collettivo non si pone come realtà associativa del Terzo Settore. Questa scelta deriva principalmente dal fatto che costituire un’associazione da zero avrebbe causato, almeno in una fase iniziale, un notevole dispendio di tempo ed energie che possono e devono essere investiti per comporre e per suonare. Tuttavia, il collettivo mira ad instaurare solidi contatti con realtà associative esistenti che abbiano obiettivi comuni e che si esprimano favorevolmente nel collaborare con l’ensemble e nel fornire eventuale supporto economico/finanziario (adesione bandi/richieste fondi).',
            'about-paragraph1.4' : "La necessità di promuovere ensemble specializzati nel repertorio contemporaneo, ancor più se incentivano i compositori a produrre musica nuova, si sta palesando sempre di più negli ultimi tempi. La musica contemporanea, infatti, presenta difficoltà specifiche anche molto diverse da quelle del repertorio “classico”, si pensi solo all’incremento di un vocabolario sonoro scaturito dalla nascita di nuove tecniche esecutive, richiedendo un alto grado di specializzazione ed interesse. Per restituire a questa musica il maggior rispetto e la cura che essa necessita, appare indispensabile che gli ensemble vi si dedichino in maniera mirata, lavorando a stretto contatto con i compositori per il tempo necessario ad assimilare il loro pensiero creativo. Inoltre, il progetto del Bottega Sonora Ensemble parte dall'idea di coinvolgere in primo luogo i principali poli culturali dell’Italia centrale, dove la musica contemporanea non sempre trova terreno fertile, ma anzi spesso ricopre un ruolo piuttosto marginale. Combattere l’ideale che questo tipo di musica si possa fare solo fuori dal nostro paese sarà una delle nostre prime preoccupazioni, senza però precludere eventuali collaborazioni con enti/compositori di ogni dove.",
            'about-objectives-1' : "Costituire un repertorio di musica contemporanea tenendo conto della pluralità delle estetiche e delle forme del comporre",
            'about-objectives-2' : "Stimolare e favorire la composizione di  opere inedite",
            'about-objectives-3' : 'Divulgare e sensibilizzare riguardo tematiche legate alla “nuova musica”',
            'about-objectives-4' : "Creazione di una rete di contatti e collaborazioni con le società di musica contemporanea presenti sul territorio nazionale",
            'about-bullet-1' : "Uno degli obiettivi primari dell’ensemble  risiede nello studio e nell’approfondimento di un vasto repertorio già esistente  come quello della “musica colta contemporanea” (musica d’arte del XX e XXI secolo); ciò al fine di favorire una maggiore consapevolezza storica e di contribuire a contestualizzare il presente mediante l’esecuzione di nuove opere.  Non si esclude poi la possibilità di effettuare un lavoro di recupero e di valorizzazione di partiture meno conosciute del secolo scorso.",
            'about-bullet-2' : "La creazione di opere inedite da parte dei compositori interni rappresenta un’ulteriore prerogativa, cruciale nelle attività dell’ensemble. Oltre al costante lavoro con i compositori del collettivo, verranno richieste nuove opere a compositori già inseriti nella scena nazionale e internazionale, per conoscenza diretta o pubblicando call for scores per registrazioni e/o concerti ed eventi.",
            'about-bullet-3' : "La divulgazione rappresenta un aspetto fondamentale all’interno dell’attività artistica del collettivo e si pone l'obiettivo di facilitare l'accessibilità alla musica contemporanea, sia in termini di reperibilità del repertorio che di offerta di nuove chiavi di lettura. L’intenzione è quella di divulgare il più possibile i lavori svolti dall’ensemble nelle varie forme fornite dai media e dagli spazi adibiti ad attività culturali: contenuti sui social, podcast, conferenze ed interventi durante i concerti, guide all’ascolto ed attività formative ulteriori all’interno di scuole e conservatori. Riteniamo infatti che tale sensibilizzazione debba partire proprio dal sistema educativo, iniziando dagli istituti AFAM, dove i ragazzi troppo spesso non vengono avvicinati e/o educati alla musica contemporanea (in alcune realtà sono persino disincentivati) se non per mera casualità..",
            'about-bullet-4' : "Il supporto di enti ed istituzioni di musica contemporanea che operano sul suolo nazionale sarà fondamentale per l’organizzazione e la realizzazione di concerti, eventi, registrazioni e progetti di ricerca. L'obiettivo è quello di creare un’unione di intenti al fine di instaurare dei rapporti proficui e duraturi con tali enti, offrendo loro professionalità e qualità in cambio di opportunità per esprimersi, tanto per gli esecutori quanto per i compositori.",
            'about-bullet-title-1' : '1. Costituire un repertorio di “musica contemporanea”',
            'about-bullet-title-2' : "2. Stimolare e favorire la composizione di nuove opere inedite",
            'about-bullet-title-3' : '3. Divulgazione  e sensibilizzazione su tematiche legate alla “nuova musica”',
            'about-bullet-title-4' : "4. Creazione di contatti e collaborazioni con le società di musica contemporanea",
            //============================================Projects============================================//
            'projects-title' : "Progetti",
            'projects-subtitle' : "Scopri i nostri progetti!",
            'projects-description-1' : "Prime esecuzioni, primo ascolto! Nuove panoramiche sulla musica del qui ed ora nella call for scores del BSE!",
            'projects-description-2' : "Ci stiamo lavorando...",
            'prime_esecuzioni-paragraph1' : "Il progetto Prime Esecuzioni consiste in uno (o più) incontri, da svolgersi in un'ottica di regolare annuale, all'interno del quale sarà possibile ascoltare esclusivamente opere inedite realizzate da compositori senza alcuna limitazione di età, sesso e provenienza geografica. Gli incontri ci saranno Inoltre, è una preziosa occasione di confronto e di approfondimento tra gli interpreti, il pubblico e loro stessi compositori coinvolti.",
            'prime_esecuzioni-paragraph2' : "L'idea alla base del progetto è quella di lanciare una call for scores mirata compositori. Le partiture dovranno essere inviate direttamente all'organizzatore del progetto all'indirizzo e-mail prime.esecuzioni.bse@gmail.com, che li inoltrerà tassativamente all'ensemble designato in modo anonimo. Ciò ha lo scopo di incoraggiare la massima imparzialità di giudizio e di impegno termini di quantità e qualità nello studio e nell’interpretazione del brano da parte degli esecutori, evitando possibili condizionamenti dovuti alla possibile presenza di nomi di spicco del settore (o viceversa).",
            'prime_esecuzioni-download': "Scarica il Bando",
            //============================================Events============================================//
            'events-title' : "Eventi", 
            'events-subtext' : "Scopri i nostri eventi futuri e passati. Tutte le info e i biglietti", 
            'events-upcoming' : "Prossimi", 
            'events-past' : "Passati", 
            'events-no' : "Nessun evento in vista, per ora...", 
            'events-past-1-title' : "Laurea Magistrale di Rosaria Angotti", 
            'events-past-1-text' : "In occasione della discussione di tesi della Laurea Magistrale in 'Musica vocale da camera' di Rosaria Angiotti, l'Ensemble eseguirà tutte le 11 'Folk Songs' di Luciano Berio.", 
            'events-past-2-title' : "Inaugurazione dell'esibizione 'Maior'", 
            'events-past-2-text' : "L'Ensemble Bottega Sonora (ex Ianus Sonora) ha inaugurato la mostra d'arte contemporanea 'Maior', dell'artista italiano Giancarlo Ciccozzi. Il programma comprende alcuni estratti del 'Tierkreis' di K. Stockhausen e 'In C' di T. Reily.", 
            'events-past-3-title' : "Presentazione e Lectio Magistralis di 'Maior'", 
            'events-past-3-text' : "Sonora (ex Quartetto dell'Exegema Ensemble) ha partecipato alla Lectio Magistralis (diretta da Francesco Gallo Mazzeo) e alla presentazione di 'Maior', la Monografia sull'artista italiano Giancarlo Ciccozzi. Il programma comprende alcuni estratti del 'Tierkreis' di K. Stockhausen.", 
            //============================================Repertoire============================================//
            'repertoire-title' : "Repertorio",
            'repertoire-name' : "Nome",
            'repertoire-composer' : "Compositore",
            'repertoire-organic' : "Organico",
            'repertoire-year' : "Anno",
            'repertoire-notes' : "Note",
            'repertoire-rotate' : '<a class="bi bi-phone-landscape-fill"></a> Ruota il telefono per una vista migliore',
            'two-flutes' : "Due Flauti",
            'flute' : "Flauto",
            'saxophone' : "Sassofono",
            'cello' : "Violoncello",
            'percussions' : "Percussioni",
            'guitar' : "Chitarra",
            'clarinet' : "Clarinetto",
            'piano' : "Pianoforte",
            'vibraphone' : "Vibrafono",
            'eletronics' : "Elettronica",
            'violin' : "Violino",
            'bass-clarinet' : "Clarinetto Basso",
            'harp' : "Arpa",
            'open-organic' : "Organico Aperto",
            'bass-drum' : "Grancassa",
            'drum' : "Tamburo",
            'bass-marimba' : "Marimba Bassa",
            'marimba' : "Marimba",
            'tape' : "Nastro",
            'cymbals' : "Piatti",
            'cowbell' : "Campanaccio",
            'with-ebow' : "Con E-Bow",
            'piano (4 hands)' : "Piano (4 mani)",
            'string-orchestra' : "Orchestra d'archi",
            'alto-saxophone-pedal-harp': "Sassofono alto, Arpa a pedali",
            'soprano-saxophone-mouthpiece-tenor-saxophone-pedal-harp': "Sassofono soprano (senza bocchino), Sassofono tenore, Arpa a pedali",
            'baritone-saxophone-pedal-harp': "Sassofono baritono, Arpa a pedali",
            'notes-telegraph' : "Dedicato ad Angelo Mordente. Prima assoluta il 11/06/2022",
            "notes-trasmistique" : "Dedicato ad Alessandro Gizzi. Prima assoluta il 26/03/2024",
            //============================================Contacts============================================//
            'contacts-title' : "Contattaci",
            'contacts-subtext' : "Entra in contatto con noi per commissioni, informazioni e altro",
            'contacts-box-title' : "Contattaci via email o telefono",
            'contacts-box-text' : "Non abbiamo un indirizzo fisico, siamo una realtà eco-friendly. Puoi invarci un messaggio rapido tramite il form sottostante, oppure contattare il nostro staff tramite le apposite mail.",
            'placeholders': {
                'contacts-form-name': 'Inserisci il tuo nome',
                'contacts-form-mail': 'Inserisci la tua email',
                'contacts-form-subject': 'Oggetto della mail',
                'contacts-form-message': 'Inserisci il tuo messaggio',
                // Aggiungi altri campi del form qui
            },
            'contacts-form-send' : "Invia il Messaggio",
            //============================================Footer============================================//
            'footer-top' : "Torna su",
            'footer-col-name-1' : "Link Utili",
            'footer-col-name-2' : "Contatti Rapidi",
            'footer-col-name-3' : "Legal",
            'footer-home' : "Home",
            'footer-team' : "Team",
            'footer-events' : "Eventi",
            'footer-contacts' : "Contatti",
            'footer-mail-1' : "Email Aziendale",
            'footer-mail-2' : "General Manager",
            'footer-mail-3' : "Event Manager",
            'footer-mail-4' : "Graphic Designer",
            'footer-legal-1' : "Privacy",
            'footer-legal-2' : "Copyright",
            'footer-legal-3' : "Crediti",
            'footer-credits' : 'Disegnato e sviluppato con <a class="bi bi-heart-fill"></a> da <a href="https://riccardomordente.com/" target="_blank">Riccardo Mordente</a> con il supporto della libreria <a href="https://bootstrapmade.com/" target="_blank">BootstrapMade</a>',
            //============================================DataTable============================================//
            'info': 'Mostrando da _START_ a _END_ di _TOTAL_ elementi',
            'sInfoEmpty': 'Mostrando 0 a 0 di 0 elementi',
            'sInfoFiltered': '(filtrati da _MAX_ elementi totali)',
            'loading_records': 'Caricamento...',
            'processing': 'Elaborazione...',
            'search': 'Cerca:',
            'sZeroRecords': 'Nessun dato trovato',
            'sLengthMenu': 'Mostra _MENU_ elementi',
            'paginate': {
                'first': 'Primo',
                'last': 'Ultimo',
                'next': 'Successivo',
                'previous': 'Precedente'
            },
            'aria': {
                'sortAscending': ': attiva per ordinare la colonna in ordine crescente',
                'sortDescending': ': attiva per ordinare la colonna in ordine decrescente'
            },
            //============================================Legal============================================//
            'credits-paragraph1' : 'Questo sito è stato disegnato e sviluppato dal nostro membro dello staff Riccardo Mordente. Puoi contattarlo per commissioni e informazioni tramite il suo sito <a href="https://riccardomordente.com" target="_blank">riccardomordente.com</a> o tramite le mail equivalenti <a href="mailto:info@riccardomordente.com", target="_blank">info@riccardomordente.com</a>, <a href="mailto:graphic@bsensemble.com", target="_blank">graphic@bsensemble.com</a>.',
            'credits-paragraph2' : 'Il sito è stato ottimizzato tramite la libreria Bootstrap, che si piò facilmente trovare su <a href="https://getbootstrap.com" target="_blank">Boostrap.com</a>. Un grazie speciale al fotografo Tizio Caio, che ci ha aiutato nella realizzazione degli scatti professionali che sono stati usati nel sito.',
            'privacy-paragraph1' : "Il nostro sito web <a href='www.bsensemble.com'>www.bsensemble.com</a> non raccoglie né utilizza cookie o altri strumenti di tracciamento. L'unica informazione personale che raccogliamo è il nome e l'indirizzo email forniti volontariamente dai visitatori tramite il nostro form di contatto. Queste informazioni vengono utilizzate esclusivamente per rispondere alle richieste di informazioni, collaborazioni, o altre comunicazioni. Non utilizziamo questi dati per scopi di marketing o per l'invio di newsletter. Le informazioni fornite non verranno mai condivise con terze parti senza il consenso esplicito degli interessati, a meno che non sia richiesto dalla legge.",
            'privacy-paragraph2' : "I visitatori hanno il diritto di richiedere l'accesso, la correzione o la cancellazione delle loro informazioni personali in nostro possesso. Per farlo, possono contattarci tramite l'indirizzo email fornito nella sezione Contatti. Il nostro sito web non utilizza cookie o altri strumenti di tracciamento per raccogliere informazioni sui visitatori.",
            'copyright-paragraph1' : "Tutti i contenuti presenti su questo sito, inclusi testi, immagini e musica, sono protetti da copyright e sono di proprietà di Bottega Sonora Ensemble o dei rispettivi autori. È vietata la riproduzione, distribuzione, o modifica di qualsiasi contenuto senza il permesso scritto dell'Ensemble o dei rispettivi autori.",
            //============================================Modal============================================//
            'modal-title' : 'Benvenuto in B<span class="fw-bold mb-0" style="color: var(--accent-color);">S</span>E',
            'modal-subtitle' : "Il sito è in accesso anticipato, quindi potresti trovare degli errori. Ecco cosa puoi fare per aiutarci:",
            'modal-ul1' : '<h5 class="BS fw-bold">Trova  i bug</h5> Ruota il telefono, spulcia le pagine, cose così...',
            'modal-ul2' : '<h5 class="BS fw-bold">Traduzioni</h5> Il nostro developer non è pagato per tradurre, potrebbe aver sbagliato qualcosa',
            'modal-ul3' : '<h5 class="BS fw-bold">Contattaci</h5> Se hai lamentele, suggerimenti, o se vuoi sfogarti',
            'modal-btn' : 'Ok, Grazie!',
        },
    };

    const currentTexts = texts[language];

    if (currentTexts) {
        console.log(`Updating text elements for language: ${language}`);
                // Aggiorna i placeholder del form
                Object.keys(currentTexts.placeholders).forEach(key => {
                    const element = document.getElementById(key);
                    if (element) {
                        element.setAttribute('placeholder', currentTexts.placeholders[key]);
                    } else {
                        console.warn(`Element with ID '${key}' not found.`);
                    }
                });

        // Update elements by ID
        Object.keys(currentTexts).forEach(id => {
            updateTextElement(id, currentTexts[id]);
            updateInnerHtmlElement(id, currentTexts[id]);
        });

        // Update elements by class
        const translatableElements = document.querySelectorAll('.translatable');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (currentTexts[key]) {
                element.innerHTML = currentTexts[key];
            }
        });

        // Verifica se siamo su repertoire.html prima di inizializzare DataTable
        if (getCurrentPage() === 'repertoire.html') {
            if ($.fn.DataTable.isDataTable('#sortTable')) {
                $('#sortTable').DataTable().destroy();
            }

            $('#sortTable').DataTable({
                "language": currentTexts,
                "lengthMenu": [ [25, 50, 100, 200], [25, 50, 100, 200] ],
                "pageLength": 25,
                columnDefs: [
                    { orderable: true, targets: [0, 1, 3] },
                    { orderable: false, targets: [2, 4] }
                ]
            });
        }
        

        // Store selected language in localStorage
        localStorage.setItem('language', language);
        console.log(`Language set to ${language} and stored in localStorage.`);
    } else {
        console.error(`No text found for language: ${language}`);
    }
}

function updateTextElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = text;
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}

function updateInnerHtmlElement(id, html) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = html;
    } else {
        console.warn(`Element with ID '${id}' not found.`);
    }
}




///////////////////////Mobile modal///////////////////////

(function() {
  
"use strict";
    // Verifica se l'utente sta usando un dispositivo mobile
    function isMobile() {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/.test(navigator.userAgent);
    }

// Funzione per mostrare l'avviso solo la prima volta che l'utente visita il sito su Firefox
function showFirefoxAlertOnce() {
    var isFired = localStorage.getItem('checkFired');
    const modal = document.getElementById('modalTour');
    if (localStorage.getItem('checkFired') == null){
    isFired = '0';
    }
    console.log(isFired)
    if (isFired !== '1') {
    modal.classList.add('visible');
    localStorage.setItem('checkFired', '1');
    }
}

// Esegui l'avviso al caricamento completo del DOM
document.addEventListener('DOMContentLoaded', function() {
    showFirefoxAlertOnce();
});

})();
