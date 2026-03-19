# Smart Budget Dashboard

## Prezentare generală

**Smart Budget Dashboard** este o aplicație web realizată în **React**, construită pentru gestionarea veniturilor și cheltuielilor printr-o interfață modernă, interactivă și responsive.

Scopul proiectului a fost realizarea unei aplicații de tip **dashboard**, nu doar a unei liste simple de elemente, astfel încât proiectul să demonstreze atât partea de logică și state management, cât și capacitatea de a construi o interfață apropiată de un produs real.

Aplicația permite utilizatorului să:
- adauge tranzacții;
- editeze tranzacții;
- șteargă tranzacții;
- salveze datele după refresh;
- caute, filtreze și sorteze tranzacțiile;
- vizualizeze datele într-un chart;
- schimbe tema între Light Mode și Dark Mode;
- folosească aplicația confortabil atât pe desktop, cât și pe mobil.

---

## Linkuri proiect

- **GitHub Repository:**  
  https://github.com/Raul-Vasii/Smart-Budget-Dashboard

- **Live Demo (Vercel):**  
  https://smart-budget-dashboard-tawny.vercel.app/

---

## Scopul proiectului

Acest proiect a fost realizat pentru a pune în practică noțiuni esențiale din React și pentru a demonstra că pot construi o aplicație completă, organizată și ușor de explicat.

Prin acest proiect am urmărit:
- utilizarea componentelor funcționale;
- lucrul cu hooks;
- construirea unui flux complet de tip CRUD;
- gestionarea unei stări globale;
- persistența datelor;
- tratarea responsive design-ului;
- integrarea unor librării externe utile;
- luarea unor decizii argumentate de UI/UX.

---

## Funcționalități implementate

Aplicația include următoarele funcționalități:

- adăugarea unei tranzacții noi;
- editarea unei tranzacții existente;
- ștergerea unei tranzacții;
- confirmare custom înainte de ștergere;
- păstrarea datelor după refresh;
- căutare după titlu;
- filtrare după tip;
- filtrare după categorie;
- sortare după dată;
- sortare după sumă;
- resetarea tuturor filtrelor;
- afișarea totalului de venituri;
- afișarea totalului de cheltuieli;
- calculul balanței;
- afișarea distribuției procentuale între income și expenses într-un donut chart;
- schimbarea temei între Light Mode și Dark Mode;
- notificări de tip toast;
- formular cu validări;
- layout responsive pentru desktop, tabletă și telefon;
- buton flotant de tip **Scroll to Top** pe mobil.

---

## Tehnologii folosite

- **React**
- **JavaScript**
- **Tailwind CSS**
- **Zustand**
- **react-toastify**
- **ag-charts-react**
- **lucide-react**
- **Git & GitHub**
- **Vercel**

---

## De ce am ales aceste tehnologii

### React
Am ales React pentru că este potrivit pentru construirea unei aplicații interactive, organizate pe componente reutilizabile. Structura proiectului a fost gândită astfel încât fiecare parte a interfeței să fie separată logic și ușor de întreținut.

### Tailwind CSS
Tailwind CSS a fost ales pentru:
- viteză de dezvoltare;
- consistență vizuală;
- control foarte bun asupra responsive design-ului;
- posibilitatea de a construi rapid un UI modern fără a scrie foarte mult CSS separat.

În cazul acestui proiect, Tailwind a fost foarte util pentru:
- layout-ul principal;
- cardurile dashboard-ului;
- dark mode;
- variantele responsive pentru mobil și desktop.

### Zustand
Zustand a fost folosit pentru state management deoarece:
- este simplu și curat;
- reduce boilerplate-ul comparativ cu soluții mai grele;
- permite mutarea logicii importante în afara componentelor;
- este foarte potrivit pentru un proiect de dimensiune medie.

Store-ul gestionează:
- lista de tranzacții;
- tranzacția selectată pentru editare;
- operațiile de add, edit și delete;
- persistența automată a datelor.

### Persist din Zustand
Middleware-ul `persist` a fost folosit pentru a salva automat datele în `localStorage`.

Am ales această soluție pentru că:
- evită scrierea manuală a logicii de sincronizare;
- păstrează persistența aproape de store;
- face aplicația mai ușor de explicat și întreținut.

### react-toastify
Această librărie a fost folosită pentru a oferi feedback clar utilizatorului atunci când:
- o tranzacție este adăugată;
- o tranzacție este editată;
- o tranzacție este ștearsă;
- formularul conține erori.

Am vrut ca aplicația să comunice clar către utilizator și să nu lase acțiunile fără feedback vizual.

### ag-charts-react
AG Charts a fost folosit pentru a transforma datele din aplicație într-o vizualizare mai ușor de interpretat.

Am ales un **donut chart** deoarece:
- comunică mai bine raportul procentual dintre venituri și cheltuieli;
- se integrează mai bine într-un dashboard;
- oferă un aspect mai modern și mai echilibrat decât un bar chart simplu.

### lucide-react
`lucide-react` a fost folosit pentru iconițe simple și moderne. În acest proiect a fost utilizat în special pentru butonul flotant de tip **Scroll to Top**, pentru a obține un aspect mai curat și mai profesionist.

### Vercel
Vercel a fost ales pentru deploy deoarece:
- oferă integrare directă cu GitHub;
- suportă foarte bine proiectele React/Vite;
- face procesul de publicare foarte rapid;
- permite actualizarea automată a aplicației după fiecare push nou în repository.

---

## Structura proiectului

```bash
src/
  components/
    DashboardStats.jsx
    DeleteConfirmModal.jsx
    FilterBar.jsx
    FinancialOverviewChart.jsx
    Header.jsx
    ScrollToTopButton.jsx
    TransactionForm.jsx
    TransactionItem.jsx
    TransactionList.jsx

  hooks/
    useDarkMode.js

  store/
    useTransactionsStore.js

  utils/
    formatters.js

  App.jsx
  main.jsx
  index.css