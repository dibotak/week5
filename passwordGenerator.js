function changeVocals (str) {
  var upVokal = "AIUEO";
  var lowVokal = "aiueo";

  var upAfter = "BJVFP";
  var lowAfter = "bjvfp";

  var res = '';

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < upVokal.length; j++) {
      if (str[i] === upVokal[j]) {
        res += upAfter[j];
      } else if (str[i] === lowVokal[j]) {
        res += lowAfter[j];
      }
    }
    if (res.length === i) {
      res += str[i];
    }
  }

  return res;
}

function reverseWord (str) {
  var reverse = '';
  for (var i = 0; i < str.length; i++) {
    reverse += str[str.length-1-i];
  }
  return reverse;
}

function setLowerUpperCase (str) {
  var container = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      container += str[i].toLowerCase();
    } else if (str[i] === str[i].toLowerCase()) {
      container += str[i].toUpperCase();
    } else {
      container += str[i];
    }
  }

  return container;
}

function removeSpaces (str) {
  var string = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      string += str[i];
    }
  }
  return string;
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var vocalChange = changeVocals(name);
  var reverse = reverseWord(vocalChange);
  var setCase = setLowerUpperCase(reverse);
  return removeSpaces(setCase);
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'