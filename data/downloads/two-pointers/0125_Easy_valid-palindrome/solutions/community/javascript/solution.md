# Simple JavaScript soluton

**Author:** i-love-typescript
**Votes:** 75
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/554098/](https://leetcode.com/problems/valid-palindrome/solutions/554098/)

---

Runtime: 64 ms, faster than 91.75% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 36.5 MB, less than 100.00% of JavaScript online 
```
const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) return false;
  }
  return true;
}
```