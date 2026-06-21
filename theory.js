// ============================================
// THEORIE — BAC kompakt: Die Verwandlung (Franz Kafka)
// Limba și literatura germană maternă · Claudia Toth
// Conținut în germană; note de strategie scurte în RO.
// Surse: materialele Claudiei (BAC Deutsch/Expressionismus/Die Verwandlung/) — Inhalt,
//        Charakterisierungen, Interpretation, Epoche; Zitate verbatim verifiziert.
// ============================================

const theoryHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Kafkas <em>Die Verwandlung</em> ist <strong>nicht</strong> wirklich eine Insektengeschichte — sie ist ein Bild für <strong>Entfremdung</strong>. Verstehe den <strong>Konflikt</strong> (der Mensch, der nur noch „funktioniert"), die <strong>Familie Samsa</strong> und die <strong>Symbole</strong> (das Ungeziefer, der Apfel). Merke dir den berühmten ersten Satz: <strong>„… fand er sich … zu einem ungeheuren Ungeziefer verwandelt."</strong> Öffne mai jos secțiune cu secțiune. 🪲</div>
        </div>
    </div>

    <!-- 0: BAC auf einen Blick -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🆘 BAC auf einen Blick (die SOS-Seite)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="sos-box">
                <h4>Die Verwandlung — das Wichtigste in 1 Minute</h4>
                <div class="sos-row"><div class="sos-k">Autor</div><div class="sos-v">Franz Kafka (1883–1924) — Prager deutschsprachiger Autor</div></div>
                <div class="sos-row"><div class="sos-k">Werk / Jahr</div><div class="sos-v">Die Verwandlung — geschrieben 1912, veröffentlicht <strong>1915</strong></div></div>
                <div class="sos-row"><div class="sos-k">Epoche</div><div class="sos-v">(frühe) <strong>Moderne</strong>, dem <strong>Expressionismus</strong> nahe; eigener Stil: „<strong>kafkaesk</strong>"</div></div>
                <div class="sos-row"><div class="sos-k">Gattung</div><div class="sos-v"><strong>Erzählung</strong> (Novelle)</div></div>
                <div class="sos-row"><div class="sos-k">Hauptfigur</div><div class="sos-v">Gregor Samsa — Handelsreisender, Versorger der Familie</div></div>
                <div class="sos-row"><div class="sos-k">Schauplatz</div><div class="sos-v">die Wohnung der Familie Samsa — v. a. Gregors Zimmer</div></div>
                <div class="sos-row"><div class="sos-k">Aufbau</div><div class="sos-v"><strong>drei Kapitel</strong> (Verwandlung → Anpassung &amp; Verletzung → Verfall &amp; Tod)</div></div>
                <div class="sos-row"><div class="sos-k">Themen</div><div class="sos-v">Entfremdung · Schuld &amp; Familie · Dehumanisierung / der Mensch als „Ware" · Kommunikationslosigkeit · Körper &amp; Identität</div></div>
                <div class="sos-row"><div class="sos-k">Symbole</div><div class="sos-v">das Ungeziefer · der Apfel · die Tür / das Zimmer · das Bild der Dame im Pelz · Gretes Violine</div></div>
                <div class="sos-row"><div class="sos-k">Ende</div><div class="sos-v">Gregor stirbt schwach und abgemagert in seinem Zimmer. Die Familie ist <strong>erleichtert</strong>, macht einen Ausflug und plant einen Neuanfang — die „aufgeblühte" Grete soll bald heiraten.</div></div>
            </div>
            <div class="strategie">Pagina de memorat pe de rost. Autor – Jahr (1915) – Epoche (Moderne/„kafkaesk") – Gattung (Erzählung) trebuie să iasă automat în Einleitung.</div>
        </div>
    </div>

    <!-- 1: Die Geschichte -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📜 Die Geschichte (Inhalt &amp; Aufbau)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="theory-box">
                <h4>Kapitel 1 — Die Verwandlung</h4>
                <p>Der Handelsreisende <strong>Gregor Samsa</strong> erwacht eines Morgens, <em>„zu einem ungeheuren Ungeziefer verwandelt"</em>. Statt zu erschrecken, sorgt er sich um den <strong>verpassten Zug</strong> und seine Arbeit. Der <strong>Prokurist</strong> seiner Firma erscheint, um sich nach Gregor zu erkundigen, flieht aber entsetzt, als Gregor sich zeigt. Der <strong>Vater</strong> treibt den Sohn gewaltsam zurück in sein Zimmer.</p>
            </div>
            <div class="theory-box">
                <h4>Kapitel 2 — Anpassung &amp; Verletzung</h4>
                <p>Die Familie arrangiert sich. Die Schwester <strong>Grete</strong> versorgt Gregor mit Nahrung; sie räumt — gemeinsam mit der Mutter — sein Zimmer leer. Gregor will sein letztes Stück Menschlichkeit retten und verteidigt das <strong>Bild der „Dame im Pelz"</strong>. Der Vater bewirft ihn mit <strong>Äpfeln</strong>; ein Apfel bleibt in Gregors Rücken stecken und <strong>verwundet ihn schwer</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>Kapitel 3 — Verfall &amp; Tod</h4>
                <p>Gregor verfällt; sein Zimmer wird zur Abstellkammer. Die Familie arbeitet nun selbst und nimmt drei <strong>Zimmerherren</strong> auf. Vom <strong>Violinenspiel</strong> Gretes angezogen, kriecht Gregor hervor und wird entdeckt; die Zimmerherren kündigen. Grete fordert, man müsse „<strong>es</strong>" loswerden. In derselben Nacht <strong>stirbt Gregor</strong>. Die erleichterte Familie macht einen Ausflug und plant die Zukunft.</p>
            </div>
            <div class="bac-wissen">Reține rolul-cheie: Gregor întreținea familia → după Verwandlung familia trebuie să muncească → ei „înfloresc" exact când el se stinge. <strong>Răsturnarea rolurilor</strong> e centrală.</div>
        </div>
    </div>

    <!-- 2: Die Figuren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👥 Die Figuren verstehen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">

            <div class="theory-box">
                <h4>👤 Gregor Samsa — der Protagonist</h4>
                <p><em>Der pflichtbewusste Sohn, der nur noch „funktioniert" — und als Mensch übersehen wird.</em></p>
                <div class="merkmale">
                    <span class="chip plus">pflichtbewusst</span><span class="chip plus">aufopfernd</span><span class="chip plus">fürsorglich</span><span class="chip plus">geduldig</span>
                    <span class="chip minus">selbstvergessen</span><span class="chip minus">isoliert</span><span class="chip minus">stimmlos</span>
                </div>
                <p>Gregor arbeitet seit fünf Jahren als <strong>Handelsreisender für Tuchwaren</strong> und trägt die Schulden der Familie ab. Nach der Verwandlung wird er <strong>äußerlich immer mehr zum Tier</strong>, leidet aber <strong>innerlich</strong> unter Selbstvorwürfen und Sorge um die Familie. Er kann sich <strong>nicht mehr verständlich machen</strong> und stirbt schließlich vereinsamt.</p>
                <div class="bac-wissen">Die Verwandlung ist <strong>symbolisch</strong>: Gregor war schon vorher „entmenschlicht" — ein Rädchen im Arbeits- und Familienapparat. Das Ungeziefer macht diese <strong>Entfremdung sichtbar</strong>.</div>
            </div>

            <div class="theory-box">
                <h4>👤 Der Vater &amp; die Mutter</h4>
                <p><strong>Herr Samsa:</strong> zunächst schwach und verschuldet, gewinnt nach Gregors Verwandlung wieder <strong>Kraft und Autorität</strong>; er nimmt eine Stelle an (Uniform) und wird zum <strong>Aggressor</strong> — er ist es, der Gregor mit dem Apfel verletzt.</p>
                <p><strong>Frau Samsa:</strong> asthmatisch und schwach; sie ist zwischen <strong>Mutterliebe und Abscheu</strong> hin- und hergerissen, fällt mehrmals in Ohnmacht und kann Gregor nicht wirklich helfen.</p>
            </div>

            <div class="theory-box">
                <h4>👤 Grete — die Schwester</h4>
                <p>Anfangs die <strong>Einzige</strong>, die sich um Gregor kümmert (Nahrung, Pflege) und <strong>Violine</strong> spielt. Im Lauf der Erzählung <strong>wendet sie sich ab</strong> und fordert am Ende, „es" loszuwerden.</p>
                <div class="merkmale"><span class="chip plus">anfangs fürsorglich</span><span class="chip plus">musikalisch</span><span class="chip minus">später ablehnend</span></div>
                <p>Grete macht die größte <strong>Entwicklung</strong> durch: vom Kind zur jungen Frau. Am Schluss ist sie <strong>„aufgeblüht"</strong> — die Hoffnung der Familie, die bald heiraten soll. Ihr Erblühen kontrastiert grausam mit Gregors Tod.</p>
            </div>

            <div class="theory-box">
                <h4>👥 Die Außenwelt</h4>
                <ul>
                    <li><strong>Der Prokurist</strong> — Vertreter der gnadenlosen <strong>Arbeitswelt</strong>; er flieht beim Anblick Gregors.</li>
                    <li><strong>Die drei Zimmerherren</strong> — pedantische Untermieter; sie verkörpern bürgerliche <strong>Ordnung &amp; Urteil</strong> und kündigen, als sie Gregor sehen.</li>
                    <li><strong>Die Bedienerin</strong> — die grobe Putzfrau, die keine Angst hat, Gregor „alter Mistkäfer" nennt und am Ende seinen Körper beseitigt.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>🔗 Figurenkonstellation</h4>
                <div class="konstell">
                    <div class="konstell-center">GREGOR SAMSA</div>
                    <div class="konstell-card"><div class="kf">der Vater</div><div class="kb">Autorität · wirft den Apfel 🍎</div></div>
                    <div class="konstell-card"><div class="kf">die Mutter</div><div class="kb">Liebe ↔ Abscheu · Ohnmacht 😣</div></div>
                    <div class="konstell-card"><div class="kf">Grete</div><div class="kb">Pflege → Ablehnung · „aufgeblüht" 🎻</div></div>
                    <div class="konstell-card"><div class="kf">der Prokurist</div><div class="kb">die Arbeitswelt 💼</div></div>
                    <div class="konstell-card"><div class="kf">die Zimmerherren</div><div class="kb">bürgerliches Urteil 🎩</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Themen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🎯 Die wichtigsten Themen</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="theory-box">
                <h4>1. Entfremdung (das zentrale Thema)</h4>
                <p>Gregor ist <strong>entfremdet</strong> — von seiner Arbeit, seiner Familie, seinem Körper und sich selbst. Die Verwandlung ins Ungeziefer macht eine <strong>schon vorhandene Entmenschlichung</strong> äußerlich sichtbar.</p>
            </div>
            <div class="theory-box">
                <h4>2. Schuld &amp; Familie</h4>
                <p>Gregor opfert sich für die Familie und trägt ihre Schulden ab. Nach der Verwandlung wird er zur <strong>Last</strong>; die Familie nutzt seine Kraft, <strong>verstößt ihn dann aber</strong>. Das Verhältnis ist von <strong>Schuld, Pflicht und Undank</strong> geprägt.</p>
            </div>
            <div class="theory-box">
                <h4>3. Dehumanisierung &amp; der Mensch als „Ware"</h4>
                <p>Die <strong>Arbeitswelt</strong> (Prokurist, Firma) und die Familie sehen Gregor nur als <strong>Funktion</strong> — solange er „nützt". Sein Wert hängt von seiner <strong>Leistung</strong> ab; sobald er nicht mehr arbeitet, zählt er nicht mehr.</p>
            </div>
            <div class="theory-box">
                <h4>4. Kommunikationslosigkeit &amp; Isolation</h4>
                <p>Gregor versteht die anderen, kann sich aber <strong>nicht mehr verständlich machen</strong>; er wird hinter der Tür <strong>eingeschlossen</strong>. Das Scheitern der Kommunikation vertieft seine <strong>Einsamkeit</strong>.</p>
            </div>
            <div class="theory-box">
                <h4>5. Körper &amp; Identität</h4>
                <p>Der fremde, ekelhafte <strong>Körper</strong> wird zum Gefängnis. Die Frage „Wer bin ich noch?" stellt sich: Gregors <strong>Menschlichkeit</strong> (Gefühle, Liebe zur Musik) bleibt, wird aber von niemandem mehr gesehen.</p>
            </div>
            <div class="strategie">La BAC: cuplează fiecare temă cu O scenă + UN detaliu (Apfel, Tür, Violine). „Erklären Sie mit Textbeispielen" = exact asta cere.</div>
        </div>
    </div>

    <!-- 4: Symbole -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎭 Symbole &amp; Motive leicht erklärt</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="theory-box">
                <table class="theory-table">
                    <thead><tr><th>Symbol / Motiv</th><th>Bedeutung</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">das Ungeziefer</td><td>zentrales Symbol der <strong>Entfremdung</strong> und Ausgrenzung; der Mensch, der zum „Ekel" und Außenseiter wird. Bewusst <strong>unbestimmt</strong> („ungeheures Ungeziefer").</td></tr>
                        <tr><td class="nomen">der Apfel</td><td>der vom Vater geworfene Apfel verwundet Gregor tödlich → <strong>väterliche Gewalt &amp; Schuld</strong>; biblische Anspielung (Sündenfall).</td></tr>
                        <tr><td class="nomen">die Tür / das Zimmer</td><td><strong>Isolation</strong> und Grenze: Gregor wird eingeschlossen; sein Zimmer wird zur Abstellkammer.</td></tr>
                        <tr><td class="nomen">das Bild der „Dame im Pelz"</td><td>Gregor verteidigt es — Zeichen seiner <strong>verbliebenen Menschlichkeit</strong> und seines Begehrens.</td></tr>
                        <tr><td class="nomen">Gretes Violine</td><td>die <strong>Kunst &amp; Sehnsucht</strong>; die Musik zieht Gregor an — der letzte menschliche Funke, der ihn ins Verderben lockt.</td></tr>
                        <tr><td class="nomen">das Fenster</td><td>Gregors Blick zur <strong>verlorenen Außenwelt</strong>; mit der Zeit sieht er immer schlechter.</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="strategie">Simbolurile „rentabile" la examen: das Ungeziefer (Entfremdung) + der Apfel (vină &amp; violență paternă). Exemplifică mereu cu scena.</div>
        </div>
    </div>

    <!-- 5: Aufbau & Erzähltechnik -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🏗️ Aufbau und Erzähltechnik</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="theory-box">
                <h4>Erzählweise &amp; Mittel</h4>
                <ul>
                    <li><strong>Er-Erzähler</strong> mit <strong>personaler Perspektive</strong>: Wir sehen fast alles aus Gregors Sicht — nach seinem Tod wechselt der Blick zur Familie.</li>
                    <li><strong>Nüchterne, sachliche Sprache</strong> für ein <strong>unmögliches</strong> Geschehen: das Fantastische wird selbstverständlich erzählt — das ist „<strong>kafkaesk</strong>".</li>
                    <li><strong>Keine Erklärung:</strong> Warum sich Gregor verwandelt, wird <strong>nie</strong> gesagt — das Rätsel bleibt.</li>
                    <li><strong>Parabel-/Symbolcharakter:</strong> die Geschichte ist ein Gleichnis für Entfremdung und Schuld.</li>
                    <li><strong>Dreigliedriger Aufbau</strong> (drei Kapitel) mit klarer Steigerung bis zu Gregors Tod.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 6: Sprache & Stil -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>✒️ Sprache und Stil</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box">
                <h4>Stilmittel (mit Belegen)</h4>
                <table class="theory-table">
                    <thead><tr><th>Merkmal</th><th>Beleg / Funktion</th></tr></thead>
                    <tbody>
                        <tr><td class="nomen">nüchterner Realismus</td><td>das Unmögliche wird sachlich erzählt — schon der erste Satz nennt die Verwandlung beiläufig</td></tr>
                        <tr><td class="nomen">„kafkaesk"</td><td>bedrohlich, rätselhaft, ausweglos; Schuld ohne klare Ursache</td></tr>
                        <tr><td class="nomen">Symbol &amp; Parabel</td><td>das Ungeziefer, der Apfel — Bilder für Entfremdung &amp; Schuld</td></tr>
                        <tr><td class="nomen">personale Erzählsituation</td><td>Innensicht Gregors → Mitgefühl trotz der Tiergestalt</td></tr>
                        <tr><td class="nomen">unbestimmtes Wort</td><td>„ungeheures Ungeziefer" — nie genau definiert; das Offene verstärkt das Unheimliche</td></tr>
                        <tr><td class="nomen">Ironie / Groteske</td><td>Gregor sorgt sich um den Zug, nicht um seinen Körper — tragikomisch</td></tr>
                    </tbody>
                </table>
            </div>
            <div class="bac-wissen">„Kafkaesk" = das zentrale Stichwort: eine <strong>nüchtern erzählte, ausweglose, rätselhafte</strong> Welt, in der der Einzelne einer übermächtigen, undurchschaubaren Ordnung ausgeliefert ist.</div>
        </div>
    </div>

    <!-- 7: Interpretation -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(7)">
            <span>💡 Interpretation</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-7">
            <div class="theory-box">
                <h4>Der zentrale Gedanke</h4>
                <p><strong>Entfremdung.</strong> Die Verwandlung macht sichtbar, dass Gregor schon als Mensch nur noch <strong>„funktioniert"</strong> hat. Sobald er nicht mehr nützt, verliert er Wert, Stimme und Platz — und wird von der eigenen Familie verstoßen.</p>
            </div>
            <div class="theory-box">
                <h4>Schlüsselpunkte</h4>
                <ul>
                    <li><strong>Sozial-/Gesellschaftskritik:</strong> der Mensch als bloße <strong>Arbeitskraft</strong>; sein Wert hängt von seiner Leistung ab.</li>
                    <li><strong>Familienkonflikt:</strong> Pflicht, Schuld und Undank; die Rollen kehren sich um (die Familie blüht, als Gregor stirbt).</li>
                    <li><strong>Psychologische Deutung:</strong> der Vater-Sohn-Konflikt, Schuldgefühle, die Sehnsucht nach Anerkennung.</li>
                    <li><strong>Das offene Rätsel:</strong> keine Ursache, keine Moral — der Leser muss selbst deuten (typisch „kafkaesk").</li>
                </ul>
            </div>
            <div class="bac-wissen">Cele mai probabile subiecte: „Entfremdung", „die Rolle/Entwicklung der Familie (bes. Grete)" și „der erste Satz / die Erzähltechnik (kafkaesk)".</div>
        </div>
    </div>
`;

// ============================================
// BAC-TRAINING (Prüfungsfragen + Musterantwort) + SCHREIBVORLAGEN
// ============================================
const trainingHTML = `
    <div class="claudia-note">
        <img src="images/annette.png" alt="Claudia" class="claudia-note-avatar">
        <div class="claudia-note-content">
            <div class="speaker">Claudia erklärt</div>
            <div class="text">Citește întrebarea, <strong>gândește singur</strong> răspunsul — apoi compară cu Musterantwort. Schreibvorlagen-urile de jos îți dau structura gata pentru fiecare subiect.</div>
        </div>
    </div>

    <h4 style="color:#065f46; margin:14px 0 8px;">🎯 Häufige Prüfungsfragen mit Musterantworten</h4>

    <div class="theory-box">
        <p><strong>1. Worum geht es in „Die Verwandlung"? (Inhaltswiedergabe)</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m1')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m1">In Franz Kafkas Erzählung <em>Die Verwandlung</em> (1915) erwacht der Handelsreisende Gregor Samsa eines Morgens als „ungeheures Ungeziefer". Er wird in seinem Zimmer eingeschlossen; nur seine Schwester Grete versorgt ihn. Während die Familie wieder zu arbeiten beginnt, wird Gregor zunehmend vernachlässigt und nach einer Verletzung durch den Vater immer schwächer. Schließlich fordert die Familie, ihn loszuwerden; Gregor stirbt, und die erleichterte Familie plant einen Neuanfang.</div>
    </div>

    <div class="theory-box">
        <p><strong>2. Welcher Epoche gehört das Werk an?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m2')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m2">Es gehört zur (frühen) <strong>Moderne</strong> und steht dem <strong>Expressionismus</strong> nahe (veröffentlicht 1915). Kafka hat aber einen ganz <strong>eigenen Stil</strong>, den man „<strong>kafkaesk</strong>" nennt: eine nüchtern erzählte, rätselhafte und ausweglose Welt, in der der Einzelne einer undurchschaubaren Ordnung ausgeliefert ist.</div>
    </div>

    <div class="theory-box">
        <p><strong>3. Was bedeutet die Verwandlung ins Ungeziefer?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m3')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m3">Die Verwandlung ist ein <strong>Symbol für Entfremdung</strong>. Sie macht äußerlich sichtbar, dass Gregor schon vorher nur noch „<strong>funktioniert</strong>" hat — als Versorger und Arbeitskraft, ohne eigenes Leben. Das Ungeziefer steht für den <strong>Außenseiter</strong>, der zum „Ekel" wird und seinen Wert und seine Stimme verliert.</div>
    </div>

    <div class="theory-box">
        <p><strong>4. Charakterisieren Sie Gregor Samsa.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m4')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m4">Gregor ist ein <strong>pflichtbewusster, aufopfernder</strong> Handelsreisender, der die Schulden der Familie abträgt. Selbst nach der Verwandlung sorgt er sich mehr um <strong>Arbeit und Familie</strong> als um sich. Äußerlich wird er zum Tier, <strong>innerlich</strong> bleibt er menschlich (Gefühle, Liebe zur Musik), kann sich aber nicht mehr verständlich machen und stirbt <strong>vereinsamt</strong>.</div>
    </div>

    <div class="theory-box">
        <p><strong>5. Welche Entwicklung macht Grete durch?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m5')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m5">Grete macht die <strong>größte Entwicklung</strong> durch. Zuerst ist sie die Einzige, die sich um Gregor kümmert (Nahrung, Pflege). Mit der Zeit <strong>wendet sie sich ab</strong> und fordert am Ende, „es" loszuwerden. Sie reift vom Kind zur jungen Frau und ist am Schluss „<strong>aufgeblüht</strong>" — ihr Erblühen kontrastiert grausam mit Gregors Tod.</div>
    </div>

    <div class="theory-box">
        <p><strong>6. Welche Rolle spielt der Vater?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m6')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m6">Der Vater ist zunächst <strong>schwach und verschuldet</strong>, gewinnt nach Gregors Verwandlung aber <strong>Kraft und Autorität</strong> zurück (er nimmt eine Stelle an). Er wird zum <strong>Aggressor</strong>: Er treibt Gregor zurück und verletzt ihn mit einem <strong>Apfel</strong>, der in dessen Rücken stecken bleibt. Der <strong>Vater-Sohn-Konflikt</strong> ist zentral.</div>
    </div>

    <div class="theory-box">
        <p><strong>7. Welche Bedeutung hat der Apfel?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m7')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m7">Der vom <strong>Vater</strong> geworfene Apfel bleibt in Gregors Rücken stecken und <strong>verwundet ihn tödlich</strong>. Er steht für <strong>väterliche Gewalt und Schuld</strong> und enthält eine biblische Anspielung (Sündenfall). Die Wunde beschleunigt Gregors Verfall.</div>
    </div>

    <div class="theory-box">
        <p><strong>8. Was bedeutet der berühmte erste Satz?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m8')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m8">Der erste Satz nennt die <strong>unglaubliche Verwandlung ganz beiläufig</strong>: „Als Gregor Samsa eines Morgens … erwachte, fand er sich … zu einem ungeheuren Ungeziefer verwandelt." Das <strong>Unmögliche wird sachlich</strong> als Tatsache gesetzt — typisch „kafkaesk". Es gibt <strong>keine Erklärung</strong>; das Rätsel bleibt.</div>
    </div>

    <div class="theory-box">
        <p><strong>9. Inwiefern ist „Die Verwandlung" Gesellschaftskritik?</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m9')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m9">Die Erzählung kritisiert eine Welt, in der der Mensch nur als <strong>Arbeitskraft</strong> zählt. Gregors Wert hängt von seiner <strong>Leistung</strong> ab; sobald er nicht mehr „nützt", wird er zur <strong>Last</strong> und verstoßen. Arbeitswelt (Prokurist) und Familie reduzieren ihn auf seine <strong>Funktion</strong> — eine Kritik an Entfremdung und Dehumanisierung.</div>
    </div>

    <div class="theory-box">
        <p><strong>10. Deuten Sie das Ende der Erzählung.</strong></p>
        <button class="muster-btn" onclick="toggleMuster('m10')">Musterantwort zeigen</button>
        <div class="muster-antwort" id="m10">Nach Gregors Tod ist die Familie <strong>erleichtert</strong>; sie macht einen Ausflug und plant einen Neuanfang. Die „<strong>aufgeblühte</strong>" Grete soll bald heiraten. Der Schluss ist <strong>verstörend</strong>: Das Leben geht weiter, als hätte es Gregor nie gegeben. Das unterstreicht die <strong>Kälte</strong> und die ganze Tragik seiner Entfremdung.</div>
    </div>

    <h4 style="color:#065f46; margin:22px 0 8px;">✍️ Schreibvorlagen — Struktur für jedes Subiect</h4>

    <div class="vorlage">
        <h5>A) Charakterisierung (Subiect II) — Einleitung / Hauptteil / Schluss</h5>
        <div class="teil">Einleitung:</div>
        <p class="redemittel">„In Franz Kafkas Erzählung <em>Die Verwandlung</em> (1915), einem Hauptwerk der Moderne, spielt die Figur des/der … eine zentrale Rolle."</p>
        <div class="teil">Hauptteil (Redemittel):</div>
        <ul>
            <li class="redemittel">„Sozial / als Typus wird … dargestellt als …"</li>
            <li class="redemittel">„Charakterlich zeichnet sich … durch … aus. Ein Beleg: ‚…'."</li>
            <li class="redemittel">„Im Laufe der Handlung entwickelt sich … von … zu …"</li>
            <li class="redemittel">„In den Beziehungen zu … zeigt sich …"</li>
        </ul>
        <div class="teil">Schluss:</div>
        <p class="redemittel">„Zusammenfassend dient die Figur Kafka dazu, … zu zeigen — eine tragische Figur, weil …"</p>
    </div>

    <div class="vorlage">
        <h5>B) Interpretation (Textstelle / Thema)</h5>
        <p class="redemittel">Einleitung: Werk/Autor/Jahr/Epoche + Einordnung der Stelle + Deutungshypothese.</p>
        <p class="redemittel">Hauptteil: „Auffällig ist das Symbol des/der …" · „Die nüchterne Erzählweise (kafkaesk) zeigt …" · „Aus Gregors Innensicht wird deutlich …" · „Vor dem Hintergrund der Entfremdung bedeutet dies …"</p>
        <p class="redemittel">Schluss: „Die Analyse bestätigt, dass …"</p>
    </div>

    <div class="vorlage">
        <h5>C) Meinung / Stellungnahme (z. B. „Trägt die Familie Schuld an Gregors Tod?")</h5>
        <p class="redemittel">„Einerseits … andererseits …" · „Dafür spricht …, dagegen lässt sich einwenden …" · <strong>immer mit Textbeleg!</strong></p>
        <p class="redemittel">Schluss: „Abschließend vertrete ich die Auffassung, dass … — denn der Mensch ist mehr als seine Leistung."</p>
    </div>

    <div class="strategie">La Subiect II structura aduce 5 puncte: Einleitung (Werk/Autor/Jahr) · Hauptteil cu Textbelege · Schluss cu părere proprie. Citează scena/contextul la fiecare Zitat!</div>
`;

// ============================================
// Toggle Musterantwort
// ============================================
function toggleMuster(id) {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('show');
}

// ============================================
// INJECTARE
// ============================================
(function () {
    function injectTheory() {
        const t = document.getElementById('theory-container');
        if (t) t.innerHTML = theoryHTML;
        const tr = document.getElementById('training-container');
        if (tr) tr.innerHTML = trainingHTML;
    }
    if (document.readyState !== 'loading') { injectTheory(); }
    else { document.addEventListener('DOMContentLoaded', injectTheory); }
})();
