function convertToRoman(num) {
  let roman = [];

  // convert number into array of 'numbers'.
  num = String(num).split('');

  /*
  Loop backwards over array to track units, tens, hundreds etc.
  Check check[index] to determine numeral range.
  Check number to push correct R.N. to numeral array.
  Unshift numeral array to roman array.
  Flatten and convert to string, then return.
  Function can be extended, but project only required numerals upto
  3999 - most likely due to use of accented characters from 4000.
  */

  for (let i = num.length - 1; i >= 0; i--) {
    let tracker = num[i]
    let numeral = [];
    if (i == num.length - 1 && num[i] != 0) {
      tracker == 1 ? numeral.push('I')
        : tracker == 2 ? numeral.push('II')
          : tracker == 3 ? numeral.push('III')
            : tracker == 4 ? numeral.push('IV')
              : tracker == 5 ? numeral.push('V')
                : tracker == 6 ? numeral.push('VI')
                  : tracker == 7 ? numeral.push('VII')
                    : tracker == 8 ? numeral.push('VIII')
                      : numeral.push('IX');
    }
    if (i == num.length - 2 && num[i] != 0) {
      tracker == 1 ? numeral.push('X')
        : tracker == 2 ? numeral.push('XX')
          : tracker == 3 ? numeral.push('XXX')
            : tracker == 4 ? numeral.push('XL')
              : tracker == 5 ? numeral.push('L')
                : tracker == 6 ? numeral.push('LX')
                  : tracker == 7 ? numeral.push('LXX')
                    : tracker == 8 ? numeral.push('LXXX')
                      : numeral.push('XC');
    }
    if (i == num.length - 3 && num[i] != 0) {
      tracker == 1 ? numeral.push('C')
        : tracker == 2 ? numeral.push('CC')
          : tracker == 3 ? numeral.push('CCC')
            : tracker == 4 ? numeral.push('CD')
              : tracker == 5 ? numeral.push('D')
                : tracker == 6 ? numeral.push('DC')
                  : tracker == 7 ? numeral.push('DCC')
                    : tracker == 8 ? numeral.push('DCCC')
                      : numeral.push('CM');
    }
    if (i == num.length - 4) {
      tracker == 1 ? numeral.push('M')
        : tracker == 2 ? numeral.push('MM')
          : numeral.push('MMM');
    }
    roman.unshift(numeral)
  }
  console.log(roman.flat().join(''));
  return roman.flat().join('')
}

convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(36);
convertToRoman(798);
convertToRoman(3999);
convertToRoman(501);
convertToRoman(1000);