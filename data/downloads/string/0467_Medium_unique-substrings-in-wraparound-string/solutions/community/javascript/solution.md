# Unique Substrings in Wraparound String || JAVASCRIPT || solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4234772/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/4234772/)

---

# Approach
Dynamic Programming

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
var findSubstringInWraproundString = function(s) {
      let dp = Array(26).fill(0);
      let origin = 'a'.charCodeAt(0);
      let count = 0;

      for(let i = 0; i < s.length; i++){
          let code = s.charCodeAt(i);
          let prevCode = s.charCodeAt(i - 1);
          let pos = code - origin;

count = code - prevCode === 1 || prevCode - code === 25 ? count + 1 : 1;
          dp[pos] = Math.max(count, dp[pos]);
      }
      return dp.reduce((total, count) => total + count);
};
```