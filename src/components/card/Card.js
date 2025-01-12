import './Card.css';

function Card( props ) {
  const sideClass = `card ${ props.side }`;
  console.log(props.side)

  const frontSide = (
    <div> 
      <div className="title">
        <p className="initials">A &F</p>
      </div>
      <div className="card-content">
        <p>CELEBRA CON NOSOTROS ESTE DIA ESPECIAL</p>
        <p className="bold">AMARIANY & FABIÁN</p>
        <p>Jueves 13 de Febrero 16:00hrs</p>
        <p>📍 Av. Sta Margarita 4950</p>
      </div>
    </div> );

    const backSide = (
      <div>
        <p className="bold buongiorno-font">Ubicación</p>
        <p>📍 Av. Sta Margarita 4950 Int Agua Zarca 81, 45138 Zapopan, Jal.</p>
        <iframe title="google map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1865.720959806993!2d-103.442567!3d20.732875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af484d2ffca5%3A0xd4782158593aca5e!2sValle%20Esmeralda!5e0!3m2!1ses-419!2smx!4v1736573594106!5m2!1ses-419!2smx" 
          style={{ border: 0 }} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    );
    return (
      <div className={ sideClass }>
        { props.side === 'card-front' ? ( frontSide ) : ( backSide ) }
      </div>
    );
  }
  
  export default Card;