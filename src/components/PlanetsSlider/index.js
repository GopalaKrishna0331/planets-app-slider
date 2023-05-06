import Slider from 'react-slick'

import PlanetItems from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="planet-container" data-testid="planets">
      <h1 className="planet-heading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItems each={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
