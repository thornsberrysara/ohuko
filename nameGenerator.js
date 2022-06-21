function vowelChar(length) {
  var result = '';
  var vowel = 'aeiou'
  var vowelLength = vowel.length;
  for (var i = 0; i < length; i++) {
    result += vowel.charAt(Math.floor(Math.random() *
      vowelLength));
  }
  return result;
}

function consonantChar(length) {
  var result = '';
  var consonant = 'bcdfghjklmnprstvwxyz';
  var consonantLength = consonant.length;
  for (var i = 0; i < length; i++) {
    result += consonant.charAt(Math.floor(Math.random() *
      consonantLength));
  }
  return result;
}

var generateName4 = consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1)
var generateName5 = vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1)
var generateName6 = vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1)
var generateName7 = consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1)

function generateName(name) {
  switch (name) {
    case "four":
      function displayFourCharacterName() {
        const newH1 = document.createElement("h1")
        const newContent = document.createTextNode(generateName4);
        newH1.appendChild(newContent);
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newH1, currentDiv);
      }

      displayFourCharacterName()
      break

    case "five":
      function displayFiveCharacterName() {
        const newH1 = document.createElement("h1")
        const newContent = document.createTextNode(generateName5);
        newH1.appendChild(newContent);
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newH1, currentDiv);
      }

      displayFiveCharacterName()
      break

    case "six":
      function displaySixCharacterName() {
        const newH1 = document.createElement("h1")
        const newContent = document.createTextNode(generateName6);
        newH1.appendChild(newContent);
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newH1, currentDiv);
      }

      displaySixCharacterName()
      break

    case "seven":
      function displaySevenCharacterName() {
        const newH1 = document.createElement("h1")
        const newContent = document.createTextNode(generateName7);
        newH1.appendChild(newContent);
        const currentDiv = document.getElementById("div1");
        document.body.insertBefore(newH1, currentDiv);
      }

      displaySevenCharacterName()
      break
  }
}