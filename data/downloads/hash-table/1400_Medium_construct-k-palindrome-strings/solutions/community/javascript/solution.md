# [JS] O(n) solution with comments

**Author:** wintryleo
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/1419950/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/1419950/)

---

```
var canConstruct = function(s, k) {
	// if string length is less than k, we cannot form k palindromes from the string, so return false
    if(k > s.length) {
        return false;
    }
	// created a map to keep count of each letter in the string
    const map = new Map();    // O(26)
    for(let i = 0; i < s.length; ++i) {    // O(n)
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
    }
	// check how many letters have odd count
    let oddCount = 0;
    map.forEach((value, key) => {    // O(26)
        if(value % 2 !== 0) {
            ++oddCount;
        }
    })
	// if letters with odd count are greater than k, that means more than k palindromes need to be formed to
	// make palindromes from the string where all the letters are utilised, so return false
	// palindrome can be of 2 form: `aaaaa` and `aabaa`, one letter can have odd and even occurences, but 
	// there will be at least x palindromes if x letters are there with odd number of frequency
    if(oddCount > k) {
        return false;
    }
	// since the previous conditions do not hold, we can make k palindromes from the string, so return true
    return true;
};
```
Time Complexity = O(n)
Space Complexity = O(26) ~ O(1)