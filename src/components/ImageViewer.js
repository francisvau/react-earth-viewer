import { useState, useEffect } from "react"
import DateSlider from "./DateSlider"
import GenerateButton from "./GenerateButton"
import Image from "./Image"

const ImageViewer = () => {

  const [dates, setDates] = useState([])
  const [date, setDate] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    const fetchEvents = async () => {
        const res = await fetch('https://epic.gsfc.nasa.gov/api/natural/all')
        const data = await res.json()
        setDates(data.map(e => e["date"]).reverse())
    }
    fetchEvents()
  }, [])

  const getImage = () => {
    const fetchEvents = async () => {
      const res = await fetch(`https://epic.gsfc.nasa.gov/api/natural/date/${date}`)
      const data = await res.json()
      setImage(data[0]["image"])
    }
    fetchEvents()
  }

  return (
    <div className="app__imageviewer">
        <DateSlider date={date} dates={dates} onChange={setDate}/>
        <GenerateButton onClick={getImage}/>
        <Image image={image} date={date}/>
    </div>
  )
}

export default ImageViewer