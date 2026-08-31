# [JavaScript] 2904. Shortest and Lexicographically Smallest Beautiful String

**Author:** pgmreddy
**Votes:** 4
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169863/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/4169863/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

---

```
var shortestBeautifulSubstring = function (s, k) {
  s = s.replaceAll(/^[0]*/g, ""); // remove 0s at begin

  let n = s.length;
  let pre = new Array(n);
  for (let i = 0, sum = 0; i < n; i++) {
    pre[i] = sum += +s[i]; // prefix sum   of ones
  }

  let smallestSubStr = "";
  for (let i = -1, j = 0; j < n; j++) {
    let numOfOnes = pre[j] - (pre[i] || 0); // sum difference of ones
    if (numOfOnes === k) {
      for (; i < j; i++) {
        let numOfOnes = pre[j] - (pre[i] || 0);
        if (numOfOnes < k) break;
        let subStr = s.slice(i + 1, j + 1);
        if (
          !smallestSubStr || // 1st substring, take it
          subStr.length < smallestSubStr.length || // take new smaller substring
          (subStr.length === smallestSubStr.length && subStr < smallestSubStr) // take new lexicographically smaller substring
        ) {
          smallestSubStr = subStr;
        }
      }
    }
  }
  return smallestSubStr;
};
```

---

**Weekly Contest 367**
- Q1 - https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4169852/javascript-2903-find-indices-with-index-and-value-difference-i/
- Q2 - See above
- Q3 - https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/4169858/javascript-2905-find-indices-with-index-and-value-difference-ii/

---
