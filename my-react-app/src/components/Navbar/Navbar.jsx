import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Insights<span>Code</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
        </li>
       {/* 
<li>
  <NavLink to="/curiosidades" className={({ isActive }) => (isActive ? styles.active : undefined)}>
    Curiosidades
  </NavLink>
</li>
<li>
  <NavLink to="/noticias-espirituais" className={({ isActive }) => (isActive ? styles.active : undefined)}>
    Notícias Espirituais
  </NavLink>
</li>
<li>
  <NavLink to="/artigos-espiritualidade" className={({ isActive }) => (isActive ? styles.active : undefined)}>
    Artigos de Espiritualidade
  </NavLink>
</li>
*/}
      </ul>
{/* 
<div className={styles.contact}>
  <a href="mailto:contato@insightselevados.com" className={styles.contactIcon} title="Envie um e-mail">
    <FaEnvelope />
  </a>
  <a href="https://wa.me/5511999999999" className={styles.contactIcon} title="Escreva-se no nosso WhatsApp">
    <FaWhatsapp />
  </a>
</div>
*/}
    </nav>
  );
};

export default Navbar;


