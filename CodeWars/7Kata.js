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
