const router = require("express").Router();
const path = require("path");
const JIMP = require("jimp");

module.exports = () => {

  router.post("/", async (req, res, next) => {
    let { image , quote, x, y, quoteWidth } = req.body;

    const backImage = await JIMP.read(image);

    const fullHeight = backImage.bitmap.height;
    const fullWidth = backImage.bitmap.width;

    const textWidth = (quoteWidth / 100) * fullWidth;

    const xPos = Math.round((x / 100) * fullWidth);
    const yPos = Math.round((y / 100) * fullHeight);

    const [ textImage, font ] = await Promise.all([
      new JIMP(fullWidth, fullHeight, 0x00000000),
      JIMP.loadFont(JIMP.FONT_SANS_32_BLACK)
    ]);

    textImage.print(font, xPos, yPos, quote, textWidth);
    const { fontColor } = req.body;
    textImage.color([{apply: 'xor', params: [fontColor]}]);

    backImage.blit(textImage, 0 , 0);

    backImage.write(path.resolve(__dirname, "..", `public/images/result.${backImage.getExtension()}`));

    return res.json("Composite generated");
  });

  return router;
}
