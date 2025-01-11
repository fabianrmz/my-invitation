import './App.css';

import Card from './components/card/Card';



function App() {
  return (
    <main>
        <div className="flip-card">
          <Card side="card-front"></Card>
          <Card side="card-back"></Card>
      </div>
    </main>
  );
}

export default App;
