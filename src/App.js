import './App.css';
import iconBack from './media/back-icon.svg';


import Card from './components/card/Card';



function App() {
  return (
    <main>
      
      <div className="flip-card">
        <div className="back-icon">
          <img src={ iconBack } alt="Back Icon"/>
        </div>
        <Card side="card-front"></Card>
        <Card side="card-back"></Card>
      </div>
    </main>
  );
}

export default App;
