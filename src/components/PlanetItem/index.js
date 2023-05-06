import './index.css'

const PlanetItems = props => {
  const {each} = props
  const {name, imageUrl, description} = each
  return (
    <div className="container">
      <div className="button">
        <img src={imageUrl} alt={`planet ${name}`} className="img" />
      </div>

      <h1 className="heading">{name}</h1>
      <p className="para">{description}</p>
    </div>
  )
}

export default PlanetItems
