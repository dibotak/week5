function sorting(arrNumber) {
  var len = arrNumber.length;
  var idx;

  for (var i = 0; i < len; i++) {
    idx = i;
    for (var j = i; j < len; j++) {
      if (arrNumber[j] > arrNumber[idx]) {
        idx = j;
      }
    }
    var temp = arrNumber[i];
    arrNumber[i] = arrNumber[idx];
    arrNumber[idx] = temp;
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var num = arrNumber[0];
  var count = 0;
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === num) {
      count++;
    }
  }
  if (count) {
    return `angka paling besar adalah ${num} dan jumlah kemunculan sebanyak ${count} kali`;
  } else {
    return '';
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''