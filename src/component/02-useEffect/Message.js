import { useEffect } from "react"

export const Message = () => {
  useEffect(() => {
    console.log('Component mount')
    return () => {
      console.log('Component Unmount')
    }
  }, [])


  return (
    <div>
      <h3>You are Awesome</h3>
      
    </div>
  )
}
