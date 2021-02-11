const router = require("express").Router();
const { scaleFont, getImage } = require("./lib/utils");
const JIMP = require("jimp");

module.exports = () => {

  router.post("/", async (req, res, next) => {
    let { image , quote, x, y, quoteWidth } = req.body;

    image = getImage(image);

    const backImage = await JIMP.read(image);

    const fullHeight = backImage.bitmap.height;
    const fullWidth = backImage.bitmap.width;

    const xPos = Math.round((x / 100) * fullWidth);
    const yPos = Math.round((y / 100) * fullHeight);

    let { fontSize, fontColor, imageHeight } = req.body;
    fontSize = scaleFont(fontSize, imageHeight, fullHeight);

    const [ textImage, font ] = await Promise.all([
      new JIMP(fullWidth, fullHeight, 0x00000000),
      JIMP.loadFont(JIMP[`FONT_SANS_${fontSize}_BLACK`])
    ]);

    const textWidth = (quoteWidth / 100) * fullWidth;
    textImage.print(font, xPos, yPos, quote, textWidth);
    textImage.color([{apply: 'xor', params: [fontColor]}]);

    backImage.blit(textImage, 0 , 0);
    // const ext = backImage.getExtension() || "jpg";
    backImage.getBase64(JIMP.AUTO, (err, data) => {
      return res.json(data);
    })
  });

  return router;
}
