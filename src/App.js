import React from 'react';
import Navbar from './components/Navbar'; // Assuming the Navbar component is in the same folder
function App() {
  return (
    <div> {/* Ensure the container doesn't cause overflow */}
      <Navbar />
      <div> {/* Adjust padding for navbar space */}
        <section id="about" style={styles.section}>
          <h2>About</h2>
          <p>This is the About section.</p>
        </section>
        <section id="projects" style={styles.section}>
          <h2>Projects</h2>
          <p>This is the Projects section.</p>
        </section>
        <section id="experience" style={styles.section}>
          <h2>Experience</h2>
          <p>This is the Experience section.</p>
        </section>
        <section id="contact" style={styles.section}>
          <h2>Contact</h2>
          <p>This is the Contact section.</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  section: {
    height: '100vh', // Each section takes up full viewport height
    padding: '4rem'
  }
};

export default App;
