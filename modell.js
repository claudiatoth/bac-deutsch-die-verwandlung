// ============================================
// MODELL-PRÜFUNG — Die Verwandlung (BAC germană maternă)
// Claudia Toth · Subiect I + II + III rezolvate complet
// „Versuch zuerst selbst → dann aufdecken". Galben = zu merken. 🏅 = warum 10p.
// Reutilizează toggleMuster() din theory.js.
// Subiect I: Jakob van Hoddis „Weltende" (1911) — text verificat verbatim (gemeinfrei, Wikipedia DE).
// ============================================

const modellHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Aici ai o <strong>probă BAC completă</strong> (Subiect I + II + III), rezolvată integral. <strong>Încearcă fiecare cerință singur</strong> — apoi dezvăluie Musterlösung și compară. Ce e <span class="merken">galben</span> merită memorat (Zitate &amp; Redemittel). Caseta 🏅 îți arată DE CE ia punctajul maxim.</div>
        </div>
    </div>
    <div class="strategie">Subiect II (eseul pe operă) se învață și se adaptează — el aduce nota. La Subiect I textul e necunoscut la examen → memorezi METODA. La III memorezi tiparul scrisorii.</div>

    <!-- ================= SUBIECT I ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📄 Subiect I — Textinterpretation</h4></div>
    <p>Lesen Sie das Gedicht und bearbeiten Sie die Aufgaben.</p>
    <div class="gedicht">
        <span class="titel">Jakob van Hoddis: Weltende (1911)</span>
        <div class="strophe">Dem Bürger fliegt vom spitzen Kopf der Hut,<br>In allen Lüften hallt es wie Geschrei.<br>Dachdecker stürzen ab und gehn entzwei<br>Und an den Küsten – liest man – steigt die Flut.</div>
        <div class="strophe">Der Sturm ist da, die wilden Meere hupfen<br>An Land, um dicke Dämme zu zerdrücken.<br>Die meisten Menschen haben einen Schnupfen.<br>Die Eisenbahnen fallen von den Brücken.</div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 1:</strong> Interpretieren Sie das Gedicht, indem Sie auf die äußere Form und auf die sprachliche Gestaltung eingehen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1a')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1a">
        <p><strong>Einleitung:</strong> Das Gedicht <em>„Weltende"</em> (1911) von Jakob van Hoddis gilt als <span class="merken">Auftaktgedicht des Expressionismus</span>. Es entwirft in grotesken Bildern eine <span class="merken">Weltuntergangsstimmung</span>.</p>
        <p><strong>Äußere Form:</strong> <span class="merken">Zwei Strophen mit je vier Versen</span>; in der ersten Strophe umarmender Reim (abba), in der zweiten Kreuzreim. Auffällig ist der <span class="merken">„Reihungsstil" (Simultanstil)</span>: unverbundene Katastrophenbilder werden einfach aneinandergereiht.</p>
        <p><strong>Sprachliche Gestaltung:</strong></p>
        <ul>
            <li>Die <span class="merken">Reihung apokalyptischer Bilder</span> (Sturm, Flut, stürzende Dachdecker, fallende Eisenbahnen) erzeugt das Bild eines Weltuntergangs.</li>
            <li>Die <span class="merken">groteske Mischung von Katastrophe und Banalität</span>: „Die meisten Menschen haben einen Schnupfen" steht zwischen Flut und stürzenden Zügen → bittere Ironie.</li>
            <li>Der <span class="merken">Spott auf den „Bürger" mit dem „spitzen Kopf"</span> drückt die antibürgerliche Haltung des Expressionismus aus.</li>
            <li>Die <span class="merken">Personifikation „die wilden Meere hupfen / An Land"</span> macht die Naturgewalt lebendig und bedrohlich.</li>
            <li>Der beiläufige Zeitungston „<span class="merken">liest man</span>" zeigt, wie gleichgültig die Katastrophe registriert wird.</li>
        </ul>
        <p><strong>Schluss:</strong> Van Hoddis zeigt eine <strong>aus den Fugen geratene Welt</strong>, in der der Mensch klein und ausgeliefert ist — ein Lebensgefühl, das auch Kafkas <em>Verwandlung</em> prägt.</p>
        <div class="warum"><ul>
            <li>Einleitung mit Autor, Werk und Epoche ✔</li>
            <li>äußere Form (Strophen, Reim, Reihungsstil) benannt ✔</li>
            <li>mindestens 4 sprachliche Mittel <strong>mit Beleg</strong> erklärt (Reihung, Ironie/Groteske, Spott, Personifikation) ✔</li>
            <li>Schluss mit Deutung (Weltuntergang / der kleine Mensch) ✔</li>
        </ul></div>
    </div>

    <div class="modell-aufgabe"><span class="punkte">15 Punkte</span><strong>Aufgabe 2:</strong> Welches Lebensgefühl drückt das Gedicht aus? Wie gehen Menschen Ihrer Meinung nach mit Krisen und Bedrohungen um? Belegen Sie Ihre Meinung mit mindestens zwei Beispielen.</div>
    <button class="muster-btn" onclick="toggleMuster('s1b')">🔓 Musterlösung aufdecken</button>
    <div class="muster-antwort" id="s1b">
        <p>Das Gedicht drückt ein Gefühl von <strong>Unsicherheit und drohendem Untergang</strong> aus — und zugleich eine erschreckende <strong>Gleichgültigkeit</strong>: Die große Katastrophe und der kleine „Schnupfen" stehen nebeneinander.</p>
        <p><span class="merken">Meiner Meinung nach</span> reagieren Menschen auf Krisen sehr unterschiedlich. <strong>Erstens</strong> verfallen manche in <strong>Panik</strong>, andere verdrängen die Gefahr und machen einfach weiter wie bisher. <strong>Zweitens</strong> zeigt die Geschichte, dass gerade in Krisen <strong>Zusammenhalt</strong> entscheidend ist — wo er fehlt (wie in Gregors Familie), wird der Schwächste fallen gelassen.</p>
        <p><span class="merken">Abschließend lässt sich festhalten</span>, dass es darauf ankommt, eine Bedrohung weder zu verdrängen noch in ihr zu erstarren, sondern besonnen und gemeinsam zu handeln.</p>
        <div class="warum"><ul>
            <li>Lebensgefühl aus dem Text belegt (Untergang, Gleichgültigkeit) ✔</li>
            <li>klare eigene Position ✔</li>
            <li><strong>zwei</strong> Argumente mit Beispielen (erstens / zweitens) ✔</li>
            <li>Redemittel der Meinungsäußerung ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT II ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">📝 Subiect II — Literarischer Aufsatz</h4></div>
    <p><strong>Aufgabe:</strong> Charakterisieren Sie die Figur Gregor Samsa aus Franz Kafkas Erzählung <em>Die Verwandlung</em>. Gehen Sie auf Wesen, Charakter (mind. fünf Aspekte), Entwicklung und Beziehungen ein.</p>
    <button class="muster-btn" onclick="toggleMuster('s2')">🔓 Muster-Aufsatz aufdecken</button>
    <div class="muster-antwort" id="s2">
        <p><strong>Einleitung:</strong> In Franz Kafkas Erzählung <span class="merken">„Die Verwandlung" (1915), einem Hauptwerk der Moderne</span>, ist Gregor Samsa die Hauptfigur. Er verkörpert den Menschen, der nur noch „funktioniert" und an seiner <span class="merken">Entfremdung</span> zugrunde geht.</p>
        <p><strong>Wesen &amp; Stellung:</strong> Gregor arbeitet seit fünf Jahren als <span class="merken">Handelsreisender für Tuchwaren</span> und ist der <strong>Versorger der Familie</strong>, deren Schulden er abträgt; er lebt im Zimmer der elterlichen Wohnung.</p>
        <p><strong>Charakter:</strong> Er ist <span class="merken">pflichtbewusst, aufopfernd, fürsorglich, geduldig und bescheiden</span>. Bezeichnend ist, dass er sich nach der Verwandlung zuerst um den <span class="merken">verpassten Zug und die Arbeit</span> sorgt, nicht um seinen Körper. Zugleich ist er <strong>selbstvergessen, isoliert und stimmlos</strong>.</p>
        <p><strong>Entwicklung:</strong> Nach der Verwandlung wird Gregor <strong>äußerlich immer mehr zum Tier</strong>, bleibt aber <strong>innerlich menschlich</strong> (Selbstvorwürfe, Sorge um die Familie, Liebe zur Musik). Nach der <strong>Apfel-Verletzung</strong> durch den Vater verfällt er; vernachlässigt und abgelehnt, stirbt er schließlich <strong>vereinsamt</strong>.</p>
        <p><strong>Beziehungen:</strong> Der <strong>Vater</strong> wird zum Aggressor; die <strong>Mutter</strong> ist zwischen Liebe und Abscheu zerrissen; <strong>Grete</strong> pflegt ihn zuerst, wendet sich dann ab; die <strong>Arbeitswelt</strong> (Prokurist) sieht in ihm nur eine Funktion.</p>
        <p><strong>Schluss:</strong> <span class="merken">Zusammenfassend lässt sich sagen</span>, dass Gregor eine <strong>tragische Figur</strong> und ein <strong>Symbol der Entfremdung</strong> ist: Der Mensch wird auf seine <strong>Leistung</strong> reduziert; seine Menschlichkeit bleibt, wird aber von niemandem mehr gesehen.</p>
        <div class="warum"><ul>
            <li>Einleitung: Werk, Autor, <strong>Jahr</strong> und Epoche ✔</li>
            <li>Wesen + <strong>mehr als fünf</strong> Eigenschaften ✔</li>
            <li>jede Aussage <strong>mit Textbeleg / Szene</strong> ✔</li>
            <li>Entwicklung und Beziehungen behandelt ✔</li>
            <li>Schluss mit Deutung (Entfremdung, tragische Figur) ✔</li>
        </ul></div>
    </div>

    <!-- ================= SUBIECT III ================= -->
    <div class="modell-aufgabe"><span class="punkte">30 Punkte</span><h4 style="margin:0;">✉️ Subiect III — Bewerbungsbrief</h4></div>
    <p><strong>Aufgabe:</strong> Sie heißen David Stan und bewerben sich auf eine Anzeige des <em>Kaufhauses am Markt</em> in Mediasch um einen Ferienjob als Aushilfe. Schreiben Sie einen vollständigen Bewerbungsbrief.</p>
    <button class="muster-btn" onclick="toggleMuster('s3')">🔓 Muster-Bewerbung aufdecken</button>
    <div class="muster-antwort" id="s3">
        <p style="color:#5A5147;">David Stan<br>Str. Johann Honterus 9<br>551025 Mediasch</p>
        <p style="color:#5A5147;">Kaufhaus am Markt<br>z. Hd. Herrn Fischer<br>Piața Regele Ferdinand 3<br>551002 Mediasch</p>
        <p style="color:#5A5147;">Mediasch, den 21. Juni 2026</p>
        <p><span class="merken"><strong>Betreff: Bewerbung um einen Ferienjob als Aushilfe in Ihrem Kaufhaus</strong></span></p>
        <p><span class="merken">Sehr geehrter Herr Fischer,</span></p>
        <p><span class="merken">mit großem Interesse habe ich Ihre Anzeige gelesen</span> und bewerbe mich hiermit um die Stelle als Aushilfe in den Sommerferien.</p>
        <p>Ich besuche die zwölfte Klasse und arbeite gern mit Menschen. <span class="merken">Zu meinen Stärken gehören</span> Zuverlässigkeit, Freundlichkeit und Ordnungssinn. Außerdem spreche ich gut Deutsch und Rumänisch.</p>
        <p>Gern möchte ich Ihre Kundinnen und Kunden beraten und beim Einräumen der Ware helfen. <span class="merken">Über ein persönliches Vorstellungsgespräch würde ich mich sehr freuen.</span></p>
        <p><span class="merken">Mit freundlichen Grüßen</span><br>David Stan</p>
        <p style="color:#5A5147; font-size:0.85rem;">Anlage: Lebenslauf</p>
        <div class="warum"><ul>
            <li>Absender, Empfänger, Ort + Datum ✔</li>
            <li><strong>Betreffzeile (2 P)</strong> und <strong>Anrede (2 P)</strong> korrekt ✔</li>
            <li>Einleitung (Bezug zur Anzeige) + Hauptteil (Stärken) + Schluss (Gespräch) ✔</li>
            <li>Grußformel, Unterschrift, Anlage ✔</li>
        </ul></div>
    </div>
`;

// ============================================
// INJECTARE
// ============================================
(function () {
    function inject() {
        const c = document.getElementById('modell-container');
        if (c) c.innerHTML = modellHTML;
    }
    if (document.readyState !== 'loading') { inject(); }
    else { document.addEventListener('DOMContentLoaded', inject); }
})();
