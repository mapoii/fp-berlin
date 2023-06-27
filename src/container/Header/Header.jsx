import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Kunci utama dalam makanan</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Dalam dunia kuliner, kuncinya adalah Rasa: 
        Rasa adalah hal terpenting dalam dunia kuliner. 
        Makanan yang enak dan lezat akan menjadi daya 
        tarik utama bagi pelanggan. Penting untuk 
        mengembangkan menu dengan rasa yang konsisten, 
        menggunakan bahan-bahan berkualitas, dan 
        mempertimbangkan preferensi dan kebiasaan makan 
        pelanggan potensial.{" "}
      </p>
      <button type="button" className="custom__button">
        Jelajahi lebih banyak
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
