import allbright_thumb from "../assets/Allbright_thumb.jpg";
import trybewallet_thumb from "../assets/Trybe_Wallet_thumb.jpg";
import desentopex_thumb from "../assets/Desentopex_thumb.jpg";
import trybe_fc_thumb from "../assets/Trybe_FC_thumb.jpg";

const cardContentList = [
  {
    imageURL: allbright_thumb,
    imageAlt: "Allbright",
    imageStyle: "gallery-image",
    cardStyle: "gallery-text-card",
    subtitle: "Allbright",
    pText: "A website I made for a multilingual school, using WordPress and Elementor, CSS, and vanilla JavaScript.",
    btnLink: "https://allbright.com.br",
    githubLink: false,
  },
  {
    imageURL: trybewallet_thumb,
    imageAlt: "Trybe Wallet",
    imageStyle: "gallery-image",
    cardStyle: "gallery-text-card",
    subtitle: "TrybeWallet",
    pText: "The front end of a wallet app built with React, Redux and TypeScript.",
    btnLink: "https://github.com/BernardoTomas/wallet_app",
    githubLink: true,
  },
  {
    imageURL: desentopex_thumb,
    imageAlt: "Desentopex",
    imageStyle: "gallery-image",
    cardStyle: "gallery-text-card",
    subtitle: "Desentopex",
    pText: "A website for a plumbing company, built with Wordpress, Elementor, CSS, and vanilla JavaScript.",
    btnLink: "https://desentopex.com.br",
    githubLink: false,
  },
  {
    imageURL: trybe_fc_thumb,
    imageAlt: "Trybe FC",
    imageStyle: "gallery-image",
    cardStyle: "gallery-text-card",
    subtitle: "Trybe FC",
    pText: "A football club website built with React and TypeScript, with a backend and DB written in Node.js.",
    btnLink: "https://github.com/BernardoTomas/Football_championship_manager",
    githubLink: true,
  },
];

export default cardContentList;