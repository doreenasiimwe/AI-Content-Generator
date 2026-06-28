function displayResult(response) {
  let resultElement = document.querySelector("#result");
  resultElement.innerHTML = "";

  new Typewriter("#result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generateContent(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");
  let resultElement = document.querySelector("#result");

  let apiKey = "05ctocdff9cb8d3470d18abedf4d4794";

  let context =
    "You are a creative AI assistant. You generate poems, dad jokes, baby names, recipes, quotes, and short creative content depending on the user's request. Always follow instructions exactly and format clearly. But as well be very precise and concise. Do not add any extra information or commentary. Do not repeat the request. Do not add any extra text. Do not add any disclaimers. Do not add any explanations. Do not add any introductions. Do not add any conclusions. Do not add any greetings. Do not add any sign-offs. Just provide the requested content in a clear and concise manner.";

  let prompt = `User request: ${userInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  resultElement.classList.remove("hidden");
  resultElement.innerHTML = `<div class="generating">⏳ Generating: ${userInput.value}</div>`;

  axios.get(apiURL).then(displayResult);

  userInput.value = "";
}

let form = document.querySelector("#generator-form");
form.addEventListener("submit", generateContent);
