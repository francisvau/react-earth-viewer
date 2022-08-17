
const Image = ({ date, image }) => {
  return (
    <>
      {date !== '' && image !== '' &&
        <img className="components__image" alt="Image could not be loaded" 
        src={`https://epic.gsfc.nasa.gov/archive/natural/${date.replace(/-/g, "/")}/png/${image}.png`}/>}
    </>
  )
}

export default Image