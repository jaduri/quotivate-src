const path = require("path");

const scaleFont = (fontSize, previewHeight, fullHeight) => {
  const font = Math.round(fontSize * (fullHeight / previewHeight));
  if(font < 14){
    return 8;
  }else if(font < 26){
    return 16;
  }else if(font < 50){
    return 32;
  }else if(font < 98){
    return 64;
  }else{
    return 128;
  }
}

const getImage = (image) => {
  switch (image.slice(0, 4)){
    case "data":
      return Buffer.from(image.split(",")[1], "base64");
      break;
    case "http":
      return image
      break;
    default:
      return path.resolve(__dirname, "..", "..", `public${image}`);
      break;
  }
}

module.exports = {
  scaleFont,
  getImage
}
