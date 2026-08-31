# O(n) solution returns true if a string is a palindrome and false if a string is not a palindrome.

**Author:** ap1921
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iv/solutions/5560260/](https://leetcode.com/problems/valid-palindrome-iv/solutions/5560260/)

---



# Code
```
/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
    let i = 0;
    let j = s.length-1;
    let count = 0;

    while (i <= j) {
        if (s.charAt(i) != s.charAt(j)) {
            count++;
        }
        i++;
        j--;
    }
    if (count > 2) { return false; }
    return true;
};
```