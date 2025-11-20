import ImageCaptioner from "./imageCaptioner";

async function generateCaption(imgSrc) {
  return ImageCaptioner.generateCaption(imgSrc);
}

async function translate(englishCaption) {
  return fetch("http://localhost:3000/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: englishCaption[0]["generated_text"] }),
  }).then((resp) => resp.json());
}

async function convertToAudio(portugueseCaption) {
  return fetch("http://localhost:5000/text_to_audio", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: portugueseCaption[0]["translation_text"] }),
  }).then((resp) => resp.json());
}

export { generateCaption, translate, convertToAudio };
