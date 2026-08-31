# Javascript - BFS

**Author:** faustaleonardo
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/4173183/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/4173183/)

---

# Code
```
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function (s, k) {
  let ans = '';
  const queue = [''];
  while (queue.length) {
    const len = queue.length;
    for (let idx = 0; idx < len; idx++) {
      const curr = queue.shift();
      for (let i = 0; i < 26; i++) {
        const next = curr + String.fromCharCode(i + 97);
        if (isSubsequence(next, s, k)) {
          ans = next;
          queue.push(next);
        }
      }
    }
  }

  return ans;
};

function isSubsequence(substring, s, k) {
  let j = 0;
  let repeated = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === substring[j]) j++;
    if (j === substring.length) {
      repeated++;
      j = 0;
    }

    if (repeated === k) return true;
  }

  return false;
}

```