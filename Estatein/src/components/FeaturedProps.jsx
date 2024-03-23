import PropertiesSlider from "./PropertiesSlider";


export default function FeaturedProperties(){
 return <section id="properties">
    <div className="container">
    <h2>Featured Properties</h2>
    <div className="subtitle-block">
    <div className="subtitle">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</div>
    <div className="properties-link">
      <a href="#">View All Properties</a>
    </div>
    </div>
    <div id="slider-prop">
    <PropertiesSlider />
    </div>
    </div>
  </section>
}