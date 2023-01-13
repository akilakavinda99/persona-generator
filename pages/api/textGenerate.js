import { Configuration, OpenAIApi } from "openai";
const axios = require("axios");
console.log("keyy", process.env.OPEN_AI_API_KEY);
const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log(req.body.animal);
  const completion = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: `If cannot generate a user persona for the scenario then display "Irrelevant Data" else display a professional user persona for the scenario or the application.do not include any blank points. Below is a working example.for example a persona for a library management system
Name: Rachel
Age: 35
Gender:Female
Occupation: Librarian at a local public library
Personality: Rachel is an organized and detail-oriented person who loves books and helping others. She is patient and has excellent communication skills, which makes her well-suited for her role as a librarian. In her free time, Rachel enjoys reading, spending time with her family, and volunteering at her local animal shelter.
Goals: Rachel's main goal is to effectively manage the library's collection and provide excellent customer service to library patrons. She is also responsible for organizing events and programs at the library, such as book clubs and author talks.
Motivations: Rachel is motivated to use the library management system because it helps her to efficiently manage the library's collection and keep track of book loans and returns. She is also motivated to provide excellent customer service to library patrons, as she knows that they rely on the library for information and access to books.
Bio: Rachel is a 35-year-old librarian at a local public library. She is organized and detail-oriented, with excellent communication skills and a love of books. In her free time, she enjoys reading, spending time with her family, and volunteering at her local animal shelter.
Pains: Rachel's main pain points are managing the large volume of book loans and returns, and ensuring that the library's collection is well-organized and easy for patrons to use. She also has to juggle multiple tasks and responsibilities, including organizing events and programs at the library.
Devices: Rachel uses a desktop computer and a smartphone to access the library management system. She prefers to use the system on her desktop computer because it has a larger screen and is better suited for managing the library's collection. However, she also uses her smartphone to check the system while on the go. 

    <${req.body.animal}@>`,
      temperature: 0.6,
      max_tokens: 1000,
    })
    .then((genData) => {
      // console.log(completion.data)
      var med = genData.data.choices[0].text;
      // console.log(med)
      const values = med.split("\n").map((line) => line.trim());
      const filteredArray = values.filter((element) => element !== "");
      console.log(filteredArray);
      res.status(200).json({ result: filteredArray, code: 200 });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ result: err, code: 500 });
    });
}
