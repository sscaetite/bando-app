import React from "react"
import HeaderArea from "./components/HeaderArea"
import StickersArea from "./components/StickersArea"

const Album = () => {
  return (
    <div style={{minWidth: "400px",}}>
      <HeaderArea></HeaderArea>
      <StickersArea></StickersArea>
    </div>
  )
}

export default Album;
