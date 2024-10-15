import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src="https://i.ebayimg.com/images/g/JvUAAOSww1lijUjj/s-l1200.jpg" alt="Logo" style={styles.logo} />
      </div>
      <ul style={styles.navLinks}>
        <li><a href="#about" style={styles.navLink}>About</a></li>
        <li><a href="#projects" style={styles.navLink}>Projects</a></li>
        <li><a href="#experience" style={styles.navLink}>Experience</a></li>
        <li><a href="#contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#000',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
	boxSizing: 'border-box'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '40px', // Adjust the size of the logo as needed
    height: 'auto',
    borderRadius: '40px'
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '2rem',
    fontSize: '1.1rem'
  }
};

export default Navbar;
