
import '../styles/app.scss';
import Header from './Header';
import Me from './Me';
import About from './About';
import Section from './Section';
function App() {
  return (
    <div className="app bg-stone-900 px-8">
      <Header/>
      <Me/>
      <About/>
      <Section/>
    </div>
  );
}

export default App;
