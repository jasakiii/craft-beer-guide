document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "The oldest known beer recipe dates back over 5,000 years!",
      "Craft beer has a higher level of creativity and quality compared to mass-produced beer.",
      "There are over 8,000 craft breweries in the U.S. alone.",
      "The world's oldest brewery is the Weihenstephan Brewery in Bavaria, Germany, founded in 768 AD.",
      "Moderate beer consumption can be beneficial for heart health due to its antioxidants, like flavonoids.",
      "The Egyptians brewed beer as early as 4,000 BCE, and it was often consumed as part of daily life.",
      "The four main ingredients in beer are water, barley, hops, and yeast.",
      " The foam, or head, of a beer is important because it helps release aromatic compounds, enhancing the taste.",
      "China is the largest beer consumer by volume, followed by the United States."
    ];
  
    const factButton = document.createElement("button");
    factButton.innerText = "Get a Fun Beer Fact!";
    document.body.appendChild(factButton);
  
    factButton.addEventListener("click", () => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      alert(randomFact);
    });
  });
  

