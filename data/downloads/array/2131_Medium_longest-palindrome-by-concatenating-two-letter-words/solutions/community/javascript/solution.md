# JavaScript - Easy Understanding and Commented

**Author:** david_korochik
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2641675/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/2641675/)

---

Hi everyone, I'll be happy if you can upvote <3

We start by defining a reverse function where we will reverse a given word in the words array.
After that, we are going to loop over the words array and reverse each word in the array and save it to a variable.
We will perform an if else check where if the current word exists in the hash, it means we have a palindrome version of the current word. So we decrement the occurence of that word and increment our counter by 4, because we have a palindromic string with a length of 4.
Else, if our word does not exists in the hash, we need to add the reversed version of the current word to our hash.
In the end, we filter the object by its keys, and the condition is if the current key is in the hash AND the key is equal to its reversed version.
We check if there are any keys left, and if the condition is true, we are incrementing the counter by 2 because it means that we have another palindrome that was not counted.

```
/**
 * @param {string[]} words
 * @return {number}
 */

// We define a reverse function to reverse our string.
const reverse = str => str.split('').reverse().join('');

var longestPalindrome = function(words) {    
    
    // We define the object that will hold the occurrences of the words in the words array and a counter that will count the length of the palindrome stirng.
    const obj = {};
    let counter = 0;
    
    for(let word of words) {
        
        // We reverse each word in the array.
        const reversedWord = reverse(word);
     
        // We check, if the original word is in the array, that means we have a palindrome. So we decrement from the occurence of the word in the hash and increment the counter by 4 because that means we have a string with length of 4 that is a palindrome.
        if(obj[word]) {
            obj[word]--;
            counter += 4;
            
        // Else, that means we don't have the word in the hash, so we want to save the occurence of it as a reversed word.
        } else {
            obj[reversedWord] = obj[reversedWord] + 1 || 1;
        } 
    }
    
    // We check if there are any more occurences of a palindrome word. We do that by filtering the keys of the object, inside of the filter we check wether the current string has any occurences in the hash AND if the reversed string is equal to the original string from the hash.
    const hashGotMorePalindromes = Object.keys(obj).filter(str => obj[str] && reverse(str) === str);
    
    // If we have any of the values mentioned above, we increment the counter by 2.
    if(hashGotMorePalindromes.length) counter += 2;
    
    return counter;
};
```