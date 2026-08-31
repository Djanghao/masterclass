# Javascript Memoization Solution;

**Author:** MZBCodes
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/1778533/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/1778533/)

---

Hello. So I went through a few solutions myself and ended up zeroing down on a memoization solution that for me is the most intuitive and was the easiest for me to understand.

What we have to first realize is what is wrong with the brute force solution. To quickly lay it out, the brute force solution is
1.) You loop through all the words in the ```words``` list then you determine if that word is a subsequence of ```string``` by looping through every character of word and comparing it to the original string.

If you really think about it, there's no way around this process. You have to check every single word, or else you might forget to count one, and there is no way to check if something is a valid substring without looping through each character and performing the necessary algorithm. 

However, there is one major improvement we can do on the bruteforce solution, and that is, once we know that one word is a valid or invalid subsequence, then all we have to do is remember its value, and instead of looping through the words for ```O(m) time complexity``` where m is the length of each word. We can do that operation in ```O(1) time``` by storing the value in a hashmap that maps each word to a boolean value.

Using that hashmap we are able to greatly improve our bruteforce solution by only having to check each instance of a word for subsequence validity once.

Here is the code


```
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    var result = 0;
    var map = new Map();
    for (let i = 0; i < words.length; i++){
        if (words[i].length > s.length) continue;
        if (isSubsequence(words[i], s, map)){
            result++
        }
    }
    return result
};

const isSubsequence = (word, string, map) => {//you can use any method to determine the substring but I used indexOf()
    if (map.has(word)) return map.get(word) //this one line of code helps the time complexity so much
    let index = -1;
    for (const c of word){
	
	/*what this loop does is that is uses the indexOf() function to check for a valid index of the
	character in word. if the character in word doesn't exist in string it will return -1. We can also pass
	in a second parameter that gives the function a starting point so that it won't consider indexes
	that we have already considered. No repeats*/
        index = string.indexOf(c, index+1);
        if (index == -1){
            map.set(word, false);
            return false;
        }
    }
    map.set(word, true);
    return true
}
```