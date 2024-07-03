# Sorting Visualizer

## Beschreibung
Sorting Visualizer ist ein Project zum Visualisieren von verschiedenen Sortieralgorithmen. Benutzer können verschiedene Sortieralgorithmen auswählen, die größe des Arrays festlegen, die Anzeigeverzögerung anpassen und wählen, ob doppelte Werte im Array vorkommen dürfen und ob die rekursive Version des Algorithmen (falls vorhanden/möglich) verwendet werden soll.

## Features
- Unterstützte Sortieralgorithmen: Quick Sort, Merge Sort, Bubble Sort, Selection Sort, Insertion Sort, Heap Sort, Radix Sort.
- Anpassbare Array-Größen und Anzeigeverzögerung.
- Option zur Verwendung von rekkursiven Algorithmen und das Zulassen von Duplikaten im Array.
- Visualisierung der Sortierprozesses mit Hervorheben von Elementen die getauscht und/oder verglichen werden.

## Live-Demo
Eine Live-Demo des Projectes gibt es hier:
`https://gitonmylvl.github.io/sorting/`

## Installation

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd sorting
   ```
2. **Abhängikeiten installieren**
  ```bash
   npm install
   ```
3. **Entwicklungsserver starten**
  ```bash
   npm start
   ```

## Verwendung

1. Wenn sich nicht der Webbrowser automatisch öffnet navigieren sie zu 'http://localhost:3000'.
2. Wählen sie eine Algorithmus aus dem Formular.
3. Passen Sie die Array-Größe, die Anzeigeverzögerung und andere Optionen an.
4. Klicken Sie auf den 'Start' Button um die Visulisierung zu starten.
5. Klicken Sie auf den 'Skip' Button wenn sie die Visualisierung übersprinegn wollen.

## Tests
Um Test auszuführen und die Code-Abdeckung zu sehen, verwenden Sie folgenden Befehl:
```bash
npm test
```

## Verzeichnisstruktur

sorting/
├── src/
│   ├── algorithms/
│   │   ├── BaseSort.js
│   │   ├── BubbleSort.js
│   │   ├── HeapSort.js
│   │   ├── InsertionSort.js
│   │   ├── MergeSort.js
│   │   ├── QuickSort.js
│   │   ├── RadixSort.js
│   │   └── SelectionSort.js
│   ├── handlers/
│   │   ├── SortManager.js
│   │   └── arrayUtilities.js
├── │ images/
│   │   ├── less.svg
│   │   └── more.svg
│   ├── screens/
│   │   ├── FormManager.js
│   │   └── VisualizeArrayManager.js
│   ├── styles/
│   │   └──style.css
│   ├── index.html
│   └── index.js
├── tests/
│   ├── arrayUtilities.test.js
│   ├── BaseSort.test.js
│   ├── FormManager.test.js
│   ├── sortAlgorithmTests.js
│   ├── SortAlgorithmTests.test.js
│   ├── SortManager.test.js
│   └── VisualizeArrayManager.test.js

## Lizenz
Dieses Project is lizenziert durch die ISC Lizenz. Siehe LICENSE.md



