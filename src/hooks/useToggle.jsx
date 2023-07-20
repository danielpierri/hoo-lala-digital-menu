import { useState } from "react"

const useToggle = () => {
  const [showMenu, setShowMenu] = useState(false)

  function toggleMenu() {
    setShowMenu(prevShowMenu => !prevShowMenu)
  }

  return [showMenu, toggleMenu]
}

export default useToggle