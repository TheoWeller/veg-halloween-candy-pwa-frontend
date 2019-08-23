
const pageContainer = {
  width: "100%"
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

const buyNowBtn = {
  border: "2px solid blue"
}

// "grid-gap": "4em"

const postContainerItem = {
  border: "5px solid orange",
  display: "grid",
  "justify-items": "center",
  "align-items": "center",
  width: "90%",
  height: "300px",
  padding: "0",
  "border-radius": "5px",
  "box-shadow": "18px 20px 22px -11px rgba(0,16,0,0.35)"
}

export default { postContainer, pageContainer, postContainerItem, postContentContainer, buyNowBtn, postImages};
