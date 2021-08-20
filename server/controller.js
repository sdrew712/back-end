module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send("i made a change!");
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A good friendship is often more important than a passionate romance.",
      "A fresh start will put you on your way.",
      "Advice, when most needed, is least heeded.",
      "Believe it can be done.",
      "Do you know that the busiest person has the largest amount of time?",
      "Help! I’m being held prisoner in a chinese bakery!"
    ];

    // choose random fortune
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  // displayText: (req, res) => {
  //   let text = "Waddup"

  //   let h2 = document.createElement("h2") //create h2
  //   var text = document.createTextNode(text); //create text

  //   h2.appendChild(text);  //add text to h2
  //   document.body.appendChild(h2) //add div to body

  //   res.status(200).send(h2)
  // }
}