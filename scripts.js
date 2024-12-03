document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "The oldest known beer recipe dates back over 5,000 years!",
      "Craft beer has a higher level of creativity and quality compared to mass-produced beer.",
      "There are over 8,000 craft breweries in the U.S. alone."
    ];
  
    const factButton = document.createElement("button");
    factButton.innerText = "Get a Fun Beer Fact!";
    document.body.appendChild(factButton);
  
    factButton.addEventListener("click", () => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      alert(randomFact);
    });
  });
  

