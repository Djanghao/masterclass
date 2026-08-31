# JavaScript Two Pointer Solution with Comments

**Author:** kloctm
**Votes:** 23
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/1591900/](https://leetcode.com/problems/valid-word-abbreviation/solutions/1591900/)

---

```
var validWordAbbreviation = function(word, abbr) {
    // setup two pointers and current number
    let i = 0, j = 0, number = 0;
    // loop while the pointers are within the string bounds
    while(i < abbr.length && j < word.length) {
        // if the abbr char is a number
        if(!isNaN(abbr[i])) {
            // add the number to the previous number times 10
			// for example "12" will be 1 first then 10 + 2
            number = number * 10 + Number(abbr[i]);
            // if the new number is zero return false for leading zeros
            if(number === 0) return false;
            // increment the abbv pointer
            i++;
        }
        // if the number is greater than zero
        else if(number > 0) {
            // move the word pointer by number spaces
            j+=number;
            // reset the number
            number = 0;
        } 
        // if the characters match
        else if(abbr[i] == word[j]) {
            // increment both pointers
            i++; j++;
        } 
        // otherwise the characters don't match so return false
        else return false;
    }
    // the abbv is valid if the abbv pointer made it all the way through the string
    // and the word pointer plus any remaining number made it through the string
    return i === abbr.length && j + number === word.length;
};
```