# Smart Budget Dashboard

## Prezentare generală

**Smart Budget Dashboard** este o aplicație web realizată în **React**, construită pentru gestionarea veniturilor și cheltuielilor printr-o interfață modernă, interactivă și responsive.

Proiectul a fost gândit ca o aplicație de tip **dashboard**, nu doar ca o listă simplă de elemente, astfel încât să combine:
- funcționalitate completă;
- o structură clară a codului;
- un design modern;
- o experiență bună atât pe desktop, cât și pe mobil.

Aplicația permite utilizatorului să adauge, editeze, șteargă, filtreze, sorteze și vizualizeze tranzacții financiare, păstrând în același timp datele salvate după refresh și oferind o experiență coerentă în Light Mode și Dark Mode.

---

## Scopul proiectului

Scopul principal al proiectului a fost aplicarea practică a conceptelor studiate în React într-o aplicație care să depășească nivelul unui exercițiu simplu și să se apropie de structura unui produs real.

Prin acest proiect am urmărit:
- utilizarea componentelor funcționale;
- lucrul cu hooks;
- gestionarea eficientă a stării;
- construirea unei interfețe moderne și responsive;
- lucrul cu liste și date derivate;
- integrarea unor librării externe utile;
- argumentarea deciziilor tehnice și de UI/UX.

---

## Funcționalități implementate

Aplicația include următoarele funcționalități:

- adăugarea unei tranzacții noi;
- editarea unei tranzacții existente;
- ștergerea unei tranzacții;
- salvarea automată a datelor după refresh;
- căutare după titlu;
- filtrare după tipul tranzacției;
- sortare după dată și sumă;
- resetarea filtrelor;
- afișarea totalului de venituri;
- afișarea totalului de cheltuieli;
- calculul balanței;
- afișarea unui overview vizual printr-un donut chart;
- schimbarea temei între Light Mode și Dark Mode;
- feedback vizual prin notificări;
- afișare adaptată pentru desktop, tabletă și telefon;
- buton flotant de tip **Scroll to Top** pentru mobil.

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

---

## De ce am ales aceste tehnologii

### React
Am ales React pentru că este potrivit pentru construirea unei aplicații bazate pe componente reutilizabile și pentru organizarea clară a interfeței în bucăți mai mici și mai ușor de întreținut.

### Tailwind CSS
Tailwind CSS a fost ales pentru:
- viteză de dezvoltare;
- consistență vizuală;
- control foarte bun asupra responsive design-ului;
- posibilitatea de a construi rapid un UI modern fără mult CSS separat.

### Zustand
Zustand a fost ales pentru state management deoarece:
- este simplu și ușor de înțeles;
- reduce boilerplate-ul;
- permite mutarea logicii importante în afara componentelor;
- este foarte potrivit pentru un proiect de dimensiune medie.

### Persist din Zustand
Middleware-ul `persist` a fost folosit pentru a salva automat datele în `localStorage`, astfel încât tranzacțiile să rămână disponibile după refresh fără logică manuală suplimentară.

### react-toastify
Această librărie a fost folosită pentru afișarea rapidă și elegantă a mesajelor de succes și eroare, îmbunătățind experiența utilizatorului.

### ag-charts-react
AG Charts a fost folosit pentru a transforma datele din aplicație într-o reprezentare vizuală mai ușor de înțeles și mai potrivită pentru un dashboard financiar.

### lucide-react
Am folosit `lucide-react` pentru iconițe simple, moderne și ușor de integrat în componente. A fost utilizat în special pentru butonul de tip **Scroll to Top**, pentru a obține un aspect mai curat și mai profesionist decât o săgeată text simplă.

---

## Structura proiectului

```bash
src/
  components/
    DashboardStats.jsx
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

  App.jsx
  main.jsx
  index.css