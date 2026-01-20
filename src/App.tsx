import { Footer } from './components/Shared/Footer';
import { Header } from './components/Shared/Header'

export default function App() {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%", backgroundColor: "#fff" }}>
      <Header />
      <div>CONTEUDO</div>
      <Footer />
    </div>
  );
};
