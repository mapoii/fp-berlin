import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Tentang kami</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Restoran kami berasal dari semangat dan keahlian 
        kuliner yang tumbuh dari berbagai pengalaman dan 
        inspirasi dalam dunia masak-memasak. Kami adalah 
        sekelompok individu yang memiliki cinta mendalam 
        terhadap makanan dan keinginan untuk berbagi 
        hidangan lezat dengan orang lain.


        </p>
        <button type="button" className="custom__button">
          Ketahui lebih banyak
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Sejarah Kami</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
        Restoran kami memulai perjalanan kuliner kami pada tahun 1999 
        dengan misi sederhana: menyajikan hidangan lezat dengan kualitas 
        terbaik kepada pelanggan kami. Pada saat itu, kami adalah sebuah 
        warung kecil yang berlokasi di sudut jalanan yang sederhana.
        </p>
        <button type="button" className="custom__button">
          Ketahui lebih banyak
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
