import './Card.css';

function Card() {
    return (
      <div className="card-border">
        <p className="initials">A &F</p>
        <div className="card-content">
          <p>CELEBRA CON NOSOTROS ESTE DIA ESPECIAL</p>
          <p className="bold">AMARIANY & FABIÁN</p>
          <p>Jueves 13 de Febrero 13:00hrs</p>
          <a href="geo:20.732775,-103.442099" target="_blank" rel="noreferrer">
            <p>Av. Sta Margarita 4950... </p>
          </a>
        </div>
        
      </div>
    );
  }
  
  export default Card;