
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    display: 'flex',
  }
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/call-of-duty-mw2-banner.jpg"}
            className="images-carrousel"
            alt="Call of Duty"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/demons-souls-banner.jpg"}
            className="images-carrousel"
            alt="Demons Souls"/>
        </div>
        <div>
         <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/forza-horizon-banner.jpg"}
            className="images-carrousel"
            alt="Forza Horizon 5"/>
        </div>
        <div>
         <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/god-of-war-ragnarok-banner.jpg"}
            className="images-carrousel"
            alt="God of War"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/halo-inifite-banner.jpg"}
            className="images-carrousel"
            alt="Halo Infinite"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/pokemon-escarlata-banner.jpg"}
            className="images-carrousel"
            alt="Pokemon Escarlata"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/ratchet-and-clank-banner.jpg"}
            className="images-carrousel"
            alt="Ratchet and Clank"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/super-mario-3d-world-banner.jpg"}
            className="images-carrousel"
            alt="Super Mario"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/zelda-botw-banner.jpg"}
            className="images-carrousel"
            alt="Zelda"/>
        </div>
        <div>
          <img src={"https://raw.githubusercontent.com/IsaiasAcuna/imagenes-app/master/images/carrousel-images/spiderman-miles-morales-banner.jpg"}
            className="images-carrousel"
            alt="Spiderman: Miles Morales"/>
        </div>
      </Slider>
      <style jsx>{`
 
                .slider-container {
                    heigth: auto;
                    margin: 3em auto;

                }

                .images-carrousel {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }

                @media only screen and (max-width: 480px) {
                 /* Estilos para celulares */

                    .panelStyle {
                        width: 100%;
                        right: 0;
                        border-radius: 0;
                    }
             `}</style>
    </div>

  );
}

export default SimpleSlider;
