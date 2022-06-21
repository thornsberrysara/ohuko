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
  var consonant = 'bcdfghjklmnpqrstvwxyz';
  var consonantLength = consonant.length;
  for (var i = 0; i < length; i++) {
    result += consonant.charAt(Math.floor(Math.random() *
    consonantLength));
  }
  return result;
}

var generateName = vowelChar(1) + consonantChar(1) + vowelChar(1) + consonantChar(1) + vowelChar(1)

document.getElementById("name").innerHTML = generateName;
