import { useState, useEffect } from "react"

const ImageViewer = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
        setLoading(true)
        const res = await fetch('https://epic.gsfc.nasa.gov/api/natural/all')
        const dates = await res.json()
        setData(dates.map(e => e["date"]))
        setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
        {data.length === 0 ? "another" : "no one"}
    </div>
  )
}

export default ImageViewer