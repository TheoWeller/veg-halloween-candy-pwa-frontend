
const pageContainer = {
  width: "100%"
}

const headerTextAlign = {
  "text-align":"center",
  "width":"80%"
}

const centerContent = {
  "display": "flex",
  "flex-wrap": "wrap",
  "justify-content": "center"
}

const postContainer = {
  width: "100%",
  border: "5px solid red",
  opacity: 1,
  display: "flex",
  "flex-wrap": "wrap",
  "justify-content": "center"
}

const postImages = {
  "width":"250px",
  "height":"250px",
  "background-size": "contain",
  "background-repeat": "no-repeat",
  "background-position": "center center"
}

const postContentContainer = {
  "width":"90%",
  "border": "2px solid pink",
  "display": "flex",
  "justify-content": "center",
  "flex-wrap": "wrap"
}

const contentBody = {
  "height": "max-content"
}

const buyNowBtn = {
  border: "2px solid blue",
  "max-height": "2rem"
}

// "grid-gap": "4em"

const postContainerItem = {
  border: "5px solid orange",
  display: "grid",
  "justify-items": "center",
  "align-items": "center",
  width: "90%",
  height: "max-content",
  padding: "0",
  "border-radius": "5px"
  // "box-shadow": "18px 20px 22px -11px rgba(0,16,0,0.35)"
}

const postContentRow2 = {
  "width":"40%",
  "margin-left":"5%",
  "display":"grid",
  "align-items":"center",
  "grid-auto-rows":"minmax(min-content, max-content)"
}

const postContentRow2Mobile = {
  "display": "grid",
  "grid-template-columns": "repeat(1, 1fr)",
  "text-align": "left"
}

export default { postContainer, pageContainer, postContainerItem, postContentContainer, buyNowBtn, postImages, contentBody, postContentRow2, postContentRow2Mobile, headerTextAlign, centerContent};
