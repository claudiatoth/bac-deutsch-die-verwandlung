// ============================================
// LERNKARTEN — Die Verwandlung (BAC germană maternă)
// Claudia Toth · Figuren · Begriffe · Symbole · Zitate · Wortschatz
// Delimitator ' ; apostrof = ’ (U+2019); fără audio la nivel matern.
// ============================================

const flashcardsData = [
    // === Figuren (6) ===
    { de: 'Gregor Samsa', ro: 'Protagonistul · Handelsreisender care întreține familia; trezit ca Ungeziefer; exterior animal, interior om; moare vereinsamt — simbol al Entfremdung' },
    { de: 'Der Vater (Herr Samsa)', ro: 'La început slab &amp; îndatorat → după Verwandlung recâștigă autoritate; devine agresor — îl rănește pe Gregor cu un măr 🍎' },
    { de: 'Die Mutter (Frau Samsa)', ro: 'Astmatică, slabă · sfâșiată între Mutterliebe și Abscheu; leșină de mai multe ori, nu-l poate ajuta' },
    { de: 'Grete (die Schwester)', ro: 'La început singura care-l îngrijește (Nahrung, Violine) → se întoarce împotriva lui, cere „es" loszuwerden; la final „aufgeblüht"' },
    { de: 'Der Prokurist', ro: 'Reprezentantul lumii muncii nemiloase · vine după Gregor, fuge îngrozit la vederea lui' },
    { de: 'Die Zimmerherren &amp; die Bedienerin', ro: 'Außenwelt · cei 3 chiriași = ordine/judecată burgheză (concediază); Bedienerin = curățătoarea fără frică, îi spune „alter Mistkäfer", îi înlătură corpul' },

    // === Begriffe (8) ===
    { de: 'die Moderne (um 1900–1920)', ro: 'Epoche · aproape de Expressionismus; criza individului în lumea modernă' },
    { de: '„kafkaesk"', ro: 'Stil propriu Kafka · lume sobră dar rätselhaft, ausweglos, bedrohlich; vină fără cauză clară' },
    { de: 'die Entfremdung', ro: 'Tema centrală · înstrăinarea de muncă, familie, corp și de sine; omul redus la funcție' },
    { de: 'die Dehumanisierung', ro: 'Omul ca Arbeitskraft/„Ware" · valoarea = Leistung; când nu mai „folosește", nu mai contează' },
    { de: 'die personale Erzählsituation', ro: 'Er-Erzähler din perspectiva lui Gregor · după moartea lui, privirea trece la familie' },
    { de: 'die Parabel / das Symbol', ro: 'Povestea = parabolă/simbol pentru Entfremdung &amp; Schuld; nicio explicație a transformării' },
    { de: 'der Vater-Sohn-Konflikt', ro: 'Tată ↔ fiu · tatăl redevine puternic și autoritar pe măsură ce Gregor decade' },
    { de: 'die Rollenumkehr', ro: 'Răsturnarea rolurilor · Gregor întreținea familia → familia muncește și „înflorește" când el moare' },

    // === Symbole (6) ===
    { de: 'das Ungeziefer', ro: 'Simbol central al Entfremdung &amp; excluziunii · omul devenit „Ekel"/Außenseiter; intenționat nedefinit („ungeheures Ungeziefer")' },
    { de: 'der Apfel', ro: 'Mărul aruncat de tată rămâne înfipt în spate &amp; îl rănește mortal · violență paternă &amp; vină (aluzie biblică)' },
    { de: 'die Tür / das Zimmer', ro: 'Izolare &amp; graniță · Gregor e încuiat; camera devine Abstellkammer' },
    { de: 'das Bild der „Dame im Pelz"', ro: 'Gregor îl apără · semn al umanității rămase &amp; al dorinței lui' },
    { de: 'Gretes Violine', ro: 'Arta &amp; dorul · muzica îl atrage pe Gregor afară — ultima scânteie umană care-l duce la pieire 🎻' },
    { de: 'das Fenster', ro: 'Privirea spre lumea exterioară pierdută · cu timpul vede tot mai prost' },

    // === Zitate &amp; Schlüsselszenen (5) ===
    { de: '„… zu einem ungeheuren Ungeziefer verwandelt." (erster Satz)', ro: 'Deschiderea celebră · imposibilul enunțat sec, ca un fapt — kafkaesk, fără explicație' },
    { de: '„ungeheures Ungeziefer"', ro: 'Cuvântul nedefinit · Kafka NU spune ce insectă — deschiderea sporește neliniștea' },
    { de: 'der Apfelwurf des Vaters', ro: 'Scena-cheie din Kap. 2 · tatăl îl rănește pe Gregor; rana grăbește declinul' },
    { de: '„es muss weg" (Grete)', ro: 'Întorsătura · Grete îl numește pe Gregor „es" și cere să scape de el — abandonul familiei' },
    { de: 'Grete „aufgeblüht" (Schluss)', ro: 'Finalul tulburător · familia ușurată, fata înflorită; viața merge mai departe ca și cum Gregor n-ar fi existat' },

    // === Wortschatz DE → RO (8) ===
    { de: 'die Verwandlung', ro: 'transformarea / metamorfoza' },
    { de: 'das Ungeziefer', ro: 'gângania / insecta scârboasă' },
    { de: 'der Handelsreisende', ro: 'comis-voiajorul (agent comercial)' },
    { de: 'die Entfremdung', ro: 'înstrăinarea' },
    { de: 'die Schuld', ro: 'vina' },
    { de: 'der Käfer', ro: 'gândacul' },
    { de: 'die Erzählung', ro: 'povestirea / nuvela' },
    { de: 'das Mitleid', ro: 'mila / compasiunea' }
];

// ============================================
// RUNTIME — render + flip (.flipped) + navigare (fără audio)
// ============================================
let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} Lernkarten:</strong> Figuren · Begriffe · Symbole · Zitate · Wortschatz.<br>
            Klick auf die Karte für die Erklärung · Pfeile zum Blättern.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Karte 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <div class="flashcard-content"><div class="de" id="flashcard-de">${flashcardsData[0].de}</div><div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div></div>
            <div class="flashcard-hint">👆 Klick für die Erklärung</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Zurück</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Weiter →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.innerHTML = c.de;
    ro.innerHTML = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Karte ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
