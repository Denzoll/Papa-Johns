import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="92" cy="91" r="90" /> 
    <rect x="3" y="196" rx="7" ry="7" width="203" height="18" /> 
    <rect x="2" y="228" rx="7" ry="7" width="205" height="73" /> 
    <rect x="130" y="276" rx="0" ry="0" width="13" height="5" /> 
    <rect x="8" y="316" rx="11" ry="11" width="54" height="21" /> 
    <rect x="103" y="315" rx="9" ry="9" width="105" height="31" />
  </ContentLoader>
)

export default Skeleton

