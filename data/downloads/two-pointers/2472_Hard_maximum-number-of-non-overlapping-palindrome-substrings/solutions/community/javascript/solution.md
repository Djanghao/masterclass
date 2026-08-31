# [JavaScript] Simple and fast brute force 😀

**Author:** m12s44
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2809467/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2809467/)

---

1. If there is a palindrome string of length N where N > k + 1, the string can be always "trimmed" to a substring of length k or k + 1. E.g. for k = 3, ab**cddc**ba =>cddc; or abc**ded**cba => ded
2. As far as we need to find a maximum number of substrings in an optimal selection we can ignore all palindromes longer than k + 1, due to the fact that all longer palindromes will have their "shorter" version of length k or k + 1.
3. So, starting from the very first chat of string, check all string of length k and k + 1 if it's a palindrome. If so, skip next k/k+1 chars.


```
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    let ans = 0 
	
    const isPalindrome = (str) => {
        let start = 0
        let end = str.length - 1
        while (start < end) {
            if (str[start] !== str[end]) return false
            start++
            end--
        }
        return true
    }
    
    let len = s.length
    let i = 0
    
    while (i + k <= len) {
        let step = 1
        if (isPalindrome(s.substring(i, i + k) )) {
            ans++
            step = k
        } else if (i + k + 1 <= len) {
            if (isPalindrome(s.substring(i, i + k + 1))) {
                ans++
                step = k + 1
            } 
        }
        i += step
    }
    return ans
};