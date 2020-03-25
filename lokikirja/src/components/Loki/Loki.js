import React from 'react';
import './Loki.css';

function Loki(props) {
    return (
      <div className="loki">
        <div className="loki__rivi">
          <div className="loki__paivamaara">23.4.2020</div>
          <div className="loki__mpk">25 mpk</div>
        </div>
          <div className="loki__toinenrivi">
          <div className="loki__text">Konetunnit:</div>
        <div className="loki__koneh">2</div>
        </div>
        <div className="loki__toinenrivi">
          <div className="loki__text">Reitti: </div>
          <div className="loki__reitti">Pansio - Maisaari</div>
        </div>
        <div className="loki__toinenrivi">
          <div className="loki__text">Sää: </div>
          <div className="loki__saa">NW 5m/s, aurinkoista</div>
        </div>
          <br/>
          <div className="loki__text">Lisätiedot:</div>
          <div className="loki__lisatiedot">Tankattu 20 litraa dieseliä aamulla.</div>
      </div>
    );
  }

  export default Loki;