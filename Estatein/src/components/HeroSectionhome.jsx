
export default function HeroSectionHome() {
  return (
      <section className="first-screen">
        <div className="container">
        <div className="left-block">
          <h1>Discover Your Dream Property with Estatein</h1>
          <p className="sub-title">Your journey to finding the perfect property begins here. Explore our listings to find
            the home that matches your dreams.</p>
          <div className="btn_first_screen">
            <a href="#" className="btn-learnmore">Learn More</a>
            <a href="#" className="btn-browse-properties">Browse Properties</a>
          </div>
          <ul>
            <li className="num-bl">
              <div className="num">200+</div>
              <div className="num-title">Happy Customers</div>
            </li>
            <li>
              <div className="num">10k+</div>
              <div className="num-title">Properties For Clients</div>
            </li>
            <li>
              <div className="num">16+</div>
              <div className="num-title">Years of Experience</div>
            </li>
          </ul>
        </div>
        <div className="right-block">
          <img src="public/images/first-screen1.png" alt="first-screen" />
        </div>
        <div className="first-link">
          <ul>
            <li><a href="#"><img src="public/images/Icon-home.png" alt="icon home" /> Find Your Dream Home</a></li>
            <li><a href="#"><img src="public/images/icon-photo.png" alt="icon photo" /> Unlock Property Value</a></li>
            <li><a href="#"><img src="public/images/icon-bildingpng.png" alt="icon bilding" /> Effortless Property Management</a></li>
            <li><a href="#"><img src="public/images/icon-sun.png" alt="icon sun" /> Smart Investments, Informed Decisions</a></li>
          </ul>
        </div>
        </div>
      </section>
  );
}
