// Definieer JavaScript-objecten voor elke vraag
const vragen = [
    {
      vraag: "Wat is de hoofdstad van Frankrijk?",
      antwoorden: ["Londen", "Parijs", "Rome"],
      juistAntwoord: 1,
    },
    {
      vraag: "Wat is de grootste planeet in ons zonnestelsel?",
      antwoorden: ["Jupiter", "Mars", "Aarde"],
      juistAntwoord: 0,
    },
    {
      vraag: "Hoeveel benen heeft een spin?",
      antwoorden: ["6", "8", "10"],
      juistAntwoord: 1,
    },
    {
    vraag: "Hoeveel zijdes heeft een dobbelsteen?",
    antwoorden: ["6", "8", "10"],
    juistAntwoord: 0,
    },
    {
      vraag: "In welke maand begint de herfst",
      antwoorden: ["September", "Augustus", "November"],
      juistAntwoord: 0,
      },
  ];
  
  let score = 0;
  let vraagIndex = 0;
  
  // Functie om de vragen weer te geven en antwoorden te controleren
  function weergeefVragen() {
    const vraagElement = document.getElementById("vraag");
    const antwoordenElement = document.getElementById("antwoorden");
    const scoreElement = document.getElementById("score");
  
    vraagElement.textContent = vragen[vraagIndex].vraag;
  
    // Verwijder bestaande antwoorden
    antwoordenElement.innerHTML = "";
  
    // Maak antwoordlijst
    vragen[vraagIndex].antwoorden.forEach((antwoord, index) => {
      const liElement = document.createElement("li");
      const inputElement = document.createElement("input");
      inputElement.type = "radio";
      inputElement.name = "antwoorden";
      inputElement.value = index;
      liElement.appendChild(inputElement);
      liElement.appendChild(document.createTextNode(antwoord));
      antwoordenElement.appendChild(liElement);
    });
  
    scoreElement.textContent = "Score: " + score + "/" + vragen.length;
  
    // Voeg een event listener toe aan de antwoordkeuzes
    const antwoordInputs = document.querySelectorAll('input[name="antwoorden"]');
    antwoordInputs.forEach((input) => {
      input.addEventListener("change", antwoordIngediend);
    });
  }
  
  // Functie om feedback te geven aan de gebruiker
  function geefFeedback(bericht) {
    const feedbackElement = document.createElement("p");
    feedbackElement.textContent = bericht;
    document.body.appendChild(feedbackElement);
  }
  
  // Functie om het ingediende antwoord te verwerken
  function antwoordIngediend() {
    const gekozenAntwoord = document.querySelector('input[name="antwoorden"]:checked').value;
  
    if (gekozenAntwoord == vragen[vraagIndex].juistAntwoord) {
      score++;
      geefFeedback("Goed!");
    } else {
      geefFeedback("Helaas, dat is niet correct.");
    }
  
    vraagIndex++;
  
    if (vraagIndex < vragen.length) {
      weergeefVragen();
    } else {
      geefFeedback("Quiz is afgelopen. Je score is: " + score + "/" + vragen.length);
    }
  }
  
  // Roep de functie aan om de eerste vraag weer te geven
  weergeefVragen();
  
  