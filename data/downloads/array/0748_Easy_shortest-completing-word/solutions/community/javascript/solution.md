# JavaScript Using string.replace()

**Author:** askageek
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/293047/](https://leetcode.com/problems/shortest-completing-word/solutions/293047/)

---

This is my example using JavaScript replace(). I'm sharing it because I haven't seen any solutions that use this method and I think there might be some merrit to the solution. It ran in 60ms and used 37MB of memory. 

```
var shortestCompletingWord = function(licensePlate, words) {
    
    // Object to hold the shortest word that matches
    var match = {'found':false, 'word':''};
    
    // Char array to hold the upper case characters we want to match
    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    
    words.forEach(function (word) {
        // if we already have a match make sure that the word we are checking is shorter
        if (!match.found || word.length < match.word.length) {
            var replaceWord = word.toUpperCase();
            
            // Loop over each character in the license plate and replace one at a time
            // the key here is that replace will only replace 1 S even if there are 2
            licensePlateChars.forEach(function (lChar) {
                replaceWord = replaceWord.replace(lChar, '');
            });
            
            // We know the word works if the length of the word minus 
            // the length of chars equals the length of the new word
            if (word.length - licensePlateChars.length === replaceWord.length) {
                match.found = true;
                match.word = word
            }
        }
    });
    
    return match.word;
};
```