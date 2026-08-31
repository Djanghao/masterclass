# Typescript | One liner | Time complexity O(n)

**Author:** dlee96
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124984/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/2124984/)

---

```
/* 
* We will have only two solutions for this problem - 1 or 2.
* Since our string contains only letters a & b in case our string isn't a palindrome 
* it will be always 2 substrings palindromes that contain only a or only b.
* For example if we will take string 'aaabbb', we can delete first substring contains only a letters
* and then only 'b' letters. And no matter how long is substreng there will be always a and b letters.
*/
function removePalindromeSub(s: string): number {
    return s === s.split('').reverse().join('') ? 1 : 2
};
```