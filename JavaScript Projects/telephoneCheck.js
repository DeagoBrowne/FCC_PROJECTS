function telephoneCheck(str) {
  let spaceRemoval = /\s/;

  str = str.split('')
    .filter(num =>
      !spaceRemoval.test(num))
    .join('');

  let codeNBrace = /^1\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$/;
  let justCode = /^1(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/
  let noCode =
    /^\((\d{3})\)[- ]?(\d{3})[- ]?(\d{4})$|^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/

  if (codeNBrace.test(str) == false
    && justCode.test(str) == false
    && noCode.test(str) == false) {
    return false;
  } else {
    return true;
  };
}

telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("1 555)555-5555")