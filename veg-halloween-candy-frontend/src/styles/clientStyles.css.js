
const pageContainer = {
  "width":"100%",
  "font-size":"10pt",
  "background-color":"black"
}

const headerTextAlign = {
  "text-align":"center",
  "width":"95%"
}

const headerContainer = {
  "display": "flex",
  "flex-wrap": "wrap",
  "justify-content": "center",
  "color":"white"
}

const postContainer = {
  "width": "100%",
  "opacity": "1",
  "display": "flex",
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
  "width":"100%",
  "display": "flex",
  "flex-wrap": "wrap",
  "justify-content": "center",
  "align-items": "center",
  "color":"white"
}

const postTitle = {
  "margin":"0",
  "justify-self":"left"
}

const contentBody = {
  "height":"max-content"
}

const buyNowBtn = {
  "border":"2px solid orange",
  "min-height":"5em",
  "width":"30%",
  "justify-self":"center",
  "border-radius": "5px"
}

const postContainerItem = {
  "display":"grid",
  "justify-items":"center",
  "align-items":"center",
  "width":"90vw",
  "margin-bottom":"10%",
  "height":"max-content",
  "padding":"0",
  "border-radius": "5px"
}

const postContentRow2 = {
  "width":"45%",
  "margin-left":"5%",
  "display":"grid",
  "align-items":"center",
  "grid-auto-rows":"minmax(min-content, max-content)"
}

const postContentRow2Mobile = {
  "width":"100%",
  "margin-left":"5%",
  "display":"grid",
  "align-items":"center",
  "grid-auto-rows":"minmax(min-content, max-content)"
}

export default { postContainer, pageContainer, postContainerItem, postContentContainer, buyNowBtn, postImages, contentBody, postContentRow2, postContentRow2Mobile, headerTextAlign, headerContainer, postTitle};
