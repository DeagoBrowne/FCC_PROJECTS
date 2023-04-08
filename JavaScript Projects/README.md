# Description of Methods

### Ceaser's Cipher (ROT13)

I had actually completed this task before via Codewars - however this was at an earlier date, and my solution was convoluted.
I did some research in order to find a more succinct one.
I like the *'simplicity'* of this example, and the fact that it allowed me to utililse my newly gained knowledge of regular expressions.

### Palindrome Checker

This one was interesting because of the steps involved; the regex went through a number of iterations until I found the best way to handle removing the special characters.
Initially, I tried combinations of \W, \S etc - what had me stumped was not being able to account for *()\/|* - it was at this point that I realised I could remove them by explicitly testing for alphanumeric characters.

### Roman Numeral Converter

I completed a Codewars Kata which tasked me with the opposite - RN to Integers.
I initially had a look at that, and realised that I would not be able to use that function as a starting point.
I first wrote out the various steps, and then wrote the code required to achieve the desired outcome.
It was a nice opportunity to use ternaries, and I enjoyed putting this function together - once I completed the first *block*, I was was then able to reuse the code i wrote to conform to all necessary conditions.
I'd be curious to know if there was a way to write this in fewer lines.

### Telephone Number Checker

The most challenging aspect of this task was accounting for *()* - after numerous attempts at writing an adequate regex, and searched online to for a way to check for them.
I ended up finding a regex that handled phone numbers, then adapted it to fit the scenarios presented in the tests; such as with/without a region code, and with/without parentheses.

### Cash Register

This was definitely the toughest task.
I knew that i wanted to essentially create a program that would emulate someone using a cash register, but I couldn't figure out how best to go about it.
I researched examples - most of which seemed unnecessarily complicated.
I found one which resonated, and used part of it (specifically the for loop) in order to achieve the desired outcome - however, the example I found used an object to hold the unit amounts, and I found this method to be not to my liking - so i opted for an array instead, and output the required results using their respective indexes.
This seemed more cohesive overall to me, as the *cid* was a nested array itself - so comparing values was simpler.