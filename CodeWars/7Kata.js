//Question Convert an array of strings to array of numbers

//Description:

// Oh no!
//
// Some really funny web dev gave you an array of numbers from his API response as an array of strings!
//
// You need to cast the whole array to the correct type.
//
// Create the function
//
// that takes as a parameter an array of numbers represented as strings and outputs an array of numbers.
//
// ie:["1", "2", "3"] to [1, 2, 3]
//
// Note that you can receive floats as well.

//My Solution
function toNumberArray(stringarray){
  for(var i = 0; i < stringarray.length; i++){
    stringarray[i] = Number(stringarray[i]);
    }
    return  stringarray;
}

//Shortest Solution
function toNumberArray(stringarray)
{
  return stringarray.map(parseFloat);
}


// Description

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

// My Solution
function accum(s) {
  s = s.split('');
  var newS = '';
  for (var i = 0; i < s.length; i++){
    if (i===0){
      newS = newS + s[i].toUpperCase() + Array(i+1).join(s[i].toLowerCase())
    }
    else {
      newS = newS + '-' + s[i].toUpperCase() + Array(i+1).join(s[i].toLowerCase());
    }
  }
  return newS;
}

//shortest Solution
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
};

// Your task is to write function toLeetSpeak that converts a regular english sentence to Leetspeak.
//
// More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
//
// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.


function toLeetSpeak(str) {
var alph = {
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}
str = str.split('');
for (var i = 0; i < str.length; i++){
for (var prop in alph){
if (str[i] === prop){
str[i] = alph[prop];
}
}
}
  return str.join('');
}
