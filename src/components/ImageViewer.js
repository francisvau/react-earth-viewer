import { useState, useEffect } from "react"
import DateSlider from "./DateSlider"
import GenerateButton from "./GenerateButton"

const ImageViewer = () => {

  const [dates, setDates] = useState([])
  const [image, setImage] = useState()

  useEffect(() => {
    const fetchEvents = async () => {
        const res = await fetch('https://epic.gsfc.nasa.gov/api/natural/all')
        const data = await res.json()
        setDates(data.map(e => e["date"]).reverse())
    }
    fetchEvents()
  }, [])

  const getImage = () => {

  }

  return (
    <div className="app__imageviewer">
        <DateSlider dates={dates}/>
        <GenerateButton onClick={getImage}/>
    </div>
  )
}

export default ImageViewer