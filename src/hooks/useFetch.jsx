import { useState, useEffect } from "react"

const useFetch = (menuOption) => {
  const [menu, setMenu] = useState([])

  const fetchFoodData = () => {
    setMenu(menuOption)
  }

  useEffect(() => {
    fetchFoodData()
  })

  return [menu]
}

export default useFetch