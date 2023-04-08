function palindrome(str) {
  // remove all non-AlphaNumeric characters
  let regex = /[A-Za-z0-9]/;
  str = str.toLowerCase().split('').filter(char =>
    regex.test(char));
  // create two test strings (one reversed) & compare
  let testStr1 = [...str].join('');
  let testStr2 = [...str].reverse().join('');
  console.log(testStr1 == testStr2)
  return testStr1 == testStr2;
}

palindrome("eye");
palindrome("_eye");
palindrome("race car")
palindrome("not a palindrome")
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");