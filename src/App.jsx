import Calculator from './components/Calculator.jsx';

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Watts per kilogram</p>
        <h1>Power-to-weight for cyclists</h1>
        <p className="hero-sub">
          Enter your FTP and your weight to see your W/kg
        </p>
      </header>

      <main className="content">
        <Calculator />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} &rsquo;s Cycling WPKG Calculator</p>
      </footer>
    </div>
  );
}
