## Plan

### 1. Video 3 unter "körperorientierte Tiefenarbeit" verschieben
Das dritte Video (`heimwehVideo3`) befindet sich aktuell nach der Transformation-Section und dem Gesichtsbild, kurz vor den Testimonials. Es wird direkt unter den Satz "HEIMWEH ist körperorientierte Tiefenarbeit für Frauen..." (Reframe-Section, Zeile ~591) verschoben.

**Änderung:**
- Entferne das Video-Block aus seiner aktuellen Position (Zeilen 743-749).
- Füge es direkt nach dem Reframe-Text-Block ein (nach Zeile 591).

### 2. Erstes Video: Fokus auf die sprechende Person
Das erste Video (`heimwehVideo`) zeigt zwei Personen: eine liegend, eine daneben sprechend. Aktuell nutzt es die CSS-Klasse `.video-right` mit `object-position: 95% center`, die den Fokus ganz nach rechts legt.

**Änderung:**
- Erstelle eine neue CSS-Klasse (z. B. `.video-speaker`) mit einer angepassten `object-position`, die das Gesicht der sprechenden Person besser in den Bildausschnitt rückt und weniger von der liegenden Person zeigt.
- Weise diese Klasse dem ersten Video zu.

### Technische Details
- Alle Änderungen betreffen ausschließlich `src/routes/index.tsx`.
- Die Video-Attribute (`muted`, `loop`, `playsInline`, `autoPlay`, `preload="auto"`) bleiben bei allen Videos erhalten.
- Keine Backend- oder Business-Logik-Änderungen notwendig.
