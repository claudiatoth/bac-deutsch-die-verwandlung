// ============================================
// ÜBUNGEN — Die Verwandlung (BAC germană maternă)
// Claudia Toth · 5 Übungen: Multiple Choice + Lückentext (autoverificare)
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
        .replace(/[.!?;:,]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}
function answerMatches(input, accept) {
    const n = normalizeAnswer(input);
    if (!n) return false;
    return accept.some(a => normalizeAnswer(a) === n);
}

const ex1Data = {
    instr: '👇 Wähle die richtige Antwort. (Wissen über Werk, Epoche und Figuren)',
    questions: [
        { q: 'Zu welcher Epoche gehört „Die Verwandlung"?', options: ['Romantik', '(frühe) Moderne', 'Barock', 'Aufklärung'], correct: 1 },
        { q: 'Welcher Gattung gehört das Werk an?', options: ['Roman', 'Erzählung (Novelle)', 'Drama', 'Ballade'], correct: 1 },
        { q: 'Was ist Gregor Samsa von Beruf?', options: ['Lehrer', 'Handelsreisender', 'Arzt', 'Beamter'], correct: 1 },
        { q: 'In was verwandelt sich Gregor?', options: ['in einen Vogel', 'in ein Ungeziefer (Insekt)', 'in einen Hund', 'in einen Stein'], correct: 1 },
        { q: 'Wer versorgt Gregor anfangs mit Nahrung?', options: ['der Vater', 'die Schwester Grete', 'der Prokurist', 'die Bedienerin'], correct: 1 },
        { q: 'Womit verletzt der Vater Gregor?', options: ['mit einem Messer', 'mit einem Apfel', 'mit einem Stock', 'mit Wasser'], correct: 1 },
        { q: 'Wie endet die Erzählung für Gregor?', options: ['er wird geheilt', 'er stirbt, und die Familie ist erleichtert', 'er flieht ins Ausland', 'er wird wieder Mensch'], correct: 1 }
    ]
};

const ex2Data = {
    instr: '👇 Ordne jedem Zitat / jeder Szene die richtige Bedeutung zu.',
    questions: [
        { q: '„ungeheures Ungeziefer" (erster Satz)', options: ['ein genau bestimmtes Insekt', 'das bewusst unbestimmte Wort für Gregors neue Gestalt', 'ein Schimpfwort der Mutter', 'ein Tier im Garten'], correct: 1 },
        { q: 'der Apfelwurf des Vaters', options: ['ein Spiel', 'der Vater verletzt Gregor schwer (Gewalt &amp; Schuld)', 'eine Mahlzeit für Gregor', 'ein Geschenk'], correct: 1 },
        { q: 'Gretes Violinenspiel', options: ['lockt Gregor aus seinem Zimmer hervor', 'vertreibt die Zimmerherren', 'heilt Gregor', 'beruhigt den Vater'], correct: 0 },
        { q: '„es muss weg" (Grete)', options: ['Grete fordert, Gregor loszuwerden', 'Grete will umziehen', 'Grete meint die Möbel', 'Grete spricht von der Arbeit'], correct: 0 },
        { q: 'Grete ist am Ende „aufgeblüht"', options: ['der verstörende Schluss: die Familie macht einen Neuanfang', 'Grete wird krank', 'Grete rettet Gregor', 'Grete verlässt die Stadt'], correct: 0 }
    ]
};

const ex3Data = {
    instr: '👇 Welcher Begriff / welches Stilmittel ist gemeint? (wichtig für Subiect I &amp; II)',
    questions: [
        { q: 'Der Mensch ist seiner Arbeit, seiner Familie und sich selbst fremd geworden.', options: ['die Entfremdung', 'die Romantik', 'die Ironie', 'der Realismus'], correct: 0 },
        { q: 'Das Unmögliche wird ganz nüchtern und sachlich als Tatsache erzählt.', options: ['kafkaesk', 'pathetisch', 'komisch', 'sachlich-wissenschaftlich'], correct: 0 },
        { q: 'Wir sehen fast das ganze Geschehen aus Gregors Sicht.', options: ['personale Erzählsituation', 'Ich-Erzähler', 'auktorialer Erzähler', 'Reportage'], correct: 0 },
        { q: 'Die Geschichte ist ein Gleichnis für ein größeres Problem (Entfremdung).', options: ['Parabel', 'Ballade', 'Komödie', 'Sage'], correct: 0 },
        { q: 'Gregor unterstützte die Familie — nach der Verwandlung müssen sie selbst arbeiten und „blühen auf".', options: ['die Rollenumkehr', 'die Rückblende', 'die Alliteration', 'der Reim'], correct: 0 }
    ]
};

const ex4Data = {
    instr: '👇 Ergänze die Inhaltsangabe mit dem passenden Wort. (ä=ae, ö=oe, ü=ue gehen auch)',
    items: [
        { before: 'Kafkas', after: 'gehört zur Epoche der Moderne.', accept: ['Erzählung', 'Novelle', 'die Erzählung'], hint: 'Gattung', answer: 'Erzählung' },
        { before: 'Eines Morgens erwacht Gregor Samsa, verwandelt in ein', after: '.', accept: ['Ungeziefer', 'Insekt'], hint: 'gânganie/insectă', answer: 'Ungeziefer' },
        { before: 'Anfangs versorgt ihn nur seine Schwester', after: '.', accept: ['Grete'], hint: 'sora lui', answer: 'Grete' },
        { before: 'Der Vater verletzt Gregor schwer mit einem', after: '.', accept: ['Apfel'], hint: 'fruct', answer: 'Apfel' },
        { before: 'Am Ende stirbt Gregor, und die Familie ist', after: '.', accept: ['erleichtert', 'froh'], hint: 'ușurată', answer: 'erleichtert' }
    ]
};

const ex5Data = {
    instr: '👇 Bewerbungsbrief (Subiect III): Wähle das Richtige.',
    questions: [
        { q: 'Welche zwei Elemente bringen je 2 Punkte?', options: ['Datum und Unterschrift', 'Betreffzeile und Anrede', 'Absender und Anlagen', 'Grußformel und Empfänger'], correct: 1 },
        { q: 'Welche Grußformel ist passend (formell)?', options: ['Tschüss und bis bald', 'Liebe Grüße', 'Mit freundlichen Grüßen', 'Servus'], correct: 2 },
        { q: 'Wie beginnt man den Brieftext, wenn man den Namen nicht kennt?', options: ['Hallo!', 'Sehr geehrte Damen und Herren,', 'Liebe Firma,', 'Guten Tag, Leute,'], correct: 1 },
        { q: 'Welcher Satz passt in eine Bewerbung?', options: ['Ich will unbedingt diesen Job.', 'Mit großem Interesse habe ich Ihre Anzeige gelesen.', 'Gebt mir bitte die Stelle.', 'Ich brauche dringend Geld.'], correct: 1 }
    ]
};

function buildMC(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.questions.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' + it.q + '</label><div class="mc-options">';
        it.options.forEach(function (opt, j) {
            const id = prefix + '-q' + i + '-o' + j;
            html += '<div class="mc-option"><input type="radio" name="' + prefix + '-q' + i + '" id="' + id + '" value="' + j + '"><label for="' + id + '">' + opt + '</label></div>';
        });
        html += '</div><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkMC(data, prefix) {
    let correct = 0;
    data.questions.forEach(function (it, i) {
        const sel = document.querySelector('input[name="' + prefix + '-q' + i + '"]:checked');
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (sel && parseInt(sel.value, 10) === it.correct) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.options[it.correct]; }
        }
    });
    return { correct: correct, total: data.questions.length };
}

function resetMC(containerId, data, prefix) {
    data.questions.forEach(function (it, i) {
        const sels = document.querySelectorAll('input[name="' + prefix + '-q' + i + '"]');
        sels.forEach(function (s) { s.checked = false; });
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function buildLueckentext(containerId, data, prefix) {
    const c = document.getElementById(containerId);
    if (!c) return;
    let html = '<div class="exercise-instruction">' + data.instr + '</div>';
    data.items.forEach(function (it, i) {
        html += '<div class="exercise-item"><div class="exercise-number">' + (i + 1) + '</div><div class="input-group"><label>' +
            it.before + ' <input type="text" id="' + prefix + '-in-' + i + '" placeholder="(' + it.hint + ')" autocomplete="off"> ' + it.after +
            '</label><div class="feedback" id="' + prefix + '-fb-' + i + '"></div></div></div>';
    });
    c.innerHTML = html;
}

function checkLueckentext(data, prefix) {
    let correct = 0;
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (input && answerMatches(input.value, it.accept)) {
            correct++;
            if (fb) { fb.className = 'feedback correct'; fb.textContent = ''; }
        } else {
            if (fb) { fb.className = 'feedback incorrect'; fb.textContent = 'Richtig: ' + it.answer; }
        }
    });
    return { correct: correct, total: data.items.length };
}

function resetLueckentext(data, prefix) {
    data.items.forEach(function (it, i) {
        const input = document.getElementById(prefix + '-in-' + i);
        if (input) input.value = '';
        const fb = document.getElementById(prefix + '-fb-' + i);
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
}

function checkEx1() { return checkMC(ex1Data, 'ex1'); }
function checkEx2() { return checkMC(ex2Data, 'ex2'); }
function checkEx3() { return checkMC(ex3Data, 'ex3'); }
function checkEx4() { return checkLueckentext(ex4Data, 'ex4'); }
function checkEx5() { return checkMC(ex5Data, 'ex5'); }

function resetEx1() { resetMC('ex1-container', ex1Data, 'ex1'); }
function resetEx2() { resetMC('ex2-container', ex2Data, 'ex2'); }
function resetEx3() { resetMC('ex3-container', ex3Data, 'ex3'); }
function resetEx4() { resetLueckentext(ex4Data, 'ex4'); }
function resetEx5() { resetMC('ex5-container', ex5Data, 'ex5'); }

(function () {
    function buildAll() {
        buildMC('ex1-container', ex1Data, 'ex1');
        buildMC('ex2-container', ex2Data, 'ex2');
        buildMC('ex3-container', ex3Data, 'ex3');
        buildLueckentext('ex4-container', ex4Data, 'ex4');
        buildMC('ex5-container', ex5Data, 'ex5');
    }
    if (document.readyState !== 'loading') { buildAll(); }
    else { document.addEventListener('DOMContentLoaded', buildAll); }
})();
