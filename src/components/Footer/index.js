import React from 'react';
import { FaHeart, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado com
        {' '}
        <FaHeart
          color="#E50914"
          size="22px"
          style={{
            position: 'relative',
            top: '6px',
          }}
        />
        {' '}
        por
        {' '}
        <b>Macário Martins</b>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
      <p>
        <a href="https://github.com/macariomartins" alt="GitHub">
          <FaGithubAlt size="32px" />
        </a>
        <span style={{ display: 'inline-block', width: '20px' }} />
        <a href="https://www.linkedin.com/in/macariomartins/" alt="LinkedIn">
          <FaLinkedin size="32px" />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
