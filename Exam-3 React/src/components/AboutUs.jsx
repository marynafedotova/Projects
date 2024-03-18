import '../assets/scss/index.scss'
export default function AboutUs() {
  return (
    <div className='container'>
      <div className='title'><h2>About Us</h2></div>
      <div id='aboutus-block'><div className='logo-aboutus'>
        <img src="src/assets/images/logo.jpg" alt="logo" />
      </div>
     <div className="movie-matrix-container">
      <h2>Feedback is important to us</h2>
      <p>We are committed to providing you with the best movie viewing experience. That's why we, Movie Matrix, are working to make your cinematic experience satisfying and captivating.</p>
      <h3>At Movie Matrix, we strive to:</h3>
      <ul>
        <li><strong>Wide selection:</strong> We offer a wide range of films in various genres to satisfy any taste and mood.</li>
        <li><strong>Quality:</strong> Our films are available in high quality so you can enjoy every moment of viewing.</li>
        <li><strong>Convenience:</strong> We provide a convenient interface for searching and viewing movies, so you can easily find and enjoy your favorite films.</li>
        <li><strong>Communication:</strong> We are always ready to listen to your suggestions and requests. Our team works to provide you with the best service.</li>
      </ul>
      <p>Join us in the world of cinema and enjoy the best movies with Movie Matrix!</p>
    </div>
    </div>
    </div>
  );
}