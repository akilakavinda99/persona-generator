import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const response = await openai
    .createImage({
      prompt: `Generate portrait of ${req.body.image}. `,
      n: 2,
      size: "512x512",
    })
    .then((genImage) => {
      console.log(genImage.data.data);
      res.status(200).json({ result: genImage.data.data });
    })
    .catch((err) => {
      res.status(500).json({ result: err });
    });
}
