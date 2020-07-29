import React from 'react';
import { FooterBase } from './styles';
import { FaHeart, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img style={{ height: "30px" }} src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado com <FaHeart color="#E50914" size="22px" style={{ lineHeight: "0" }} /> durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a> por <b>Macário Martins</b>
      </p>
      <p>
        <a href="https://github.com/macariomartins"><FaGithubAlt size="32px" /></a>
        <span style={{ display: 'inline-block', width: '20px' }}></span>
        <a href="https://www.linkedin.com/in/macariomartins/"><FaLinkedin size="32px" /></a>
      </p>
    </FooterBase>
  );
}

export default Footer;
