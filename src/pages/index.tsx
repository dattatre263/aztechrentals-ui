import React from 'react';
// Import the images
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        {/* Center align "AZTech Rentals" */}
        <h2 style={{ textAlign: 'center', width: '100%' }}>AZTech Rentals</h2>
      </nav>

      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <h1>Welcome to AZTech Rentals</h1>
        <p>Rent the latest in high-end technology today.</p>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <img src={image1} alt="Advanced VR Headset" style={{ width: '45%', maxWidth: '300px', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
          <img src={image2} alt="High-End Tech Gadgets" style={{ width: '45%', maxWidth: '300px', margin: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
      </div>

      <section style={{ padding: '2rem', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
        <h2>Apple Vision Pro 1TB for Rent</h2>
        <p><strong>Daily Price: $200, Weekend Price $350 and  Weekly Price: $750</strong></p>
        <p>We have the Apple Vision Pro 1TB available for rent at AZTech Rentals.</p>
        <p>Apple Vision Pro seamlessly blends digital content with your physical space. You navigate simply by using your eyes, hand, and voice, so you can do things you love, in ways never before possible.</p>
        <p>This Apple Vision Pro 1TB rental can be picked up locally in the Phoenix area. Shipping outside Phoenix is not available.</p>
        <p>For availability and quotes on technology products for rent, please e-mail: aztechrentals@gmail.com or call (480) 382-3209</p>
      </section>

      <footer style={{ padding: '1rem', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
        <p>&copy; 2024 AZTech Rentals</p>
      </footer>
    </div>
  );
}

export default App;
