
const Image = ({ date, image }) => {
  return (
    <div className="imageviewer__image">
      {date !== '' && image !== '' &&
        <img alt="Earth" 
        src={`https://epic.gsfc.nasa.gov/archive/natural/${date.replace(/-/g, "/")}/png/${image}.png`}/>}
    </div>
  )
}

export default Image