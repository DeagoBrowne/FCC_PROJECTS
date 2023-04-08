function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[A-Z]/g, letter =>
    alphabet[alphabet.indexOf(letter) + 13]);
}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")