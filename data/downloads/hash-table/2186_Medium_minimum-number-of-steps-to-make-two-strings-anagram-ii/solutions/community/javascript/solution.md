# [Javascript] Frequency map

**Author:** anna-hcj
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1802531/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/1802531/)

---

**Solution: Two Frequency Arrays**

Use two arrays of size 26 to store the frequency of each character in s and t.
Return the sum of the absolute differences between each sFreq[i] and tFreq[i].

n = s.length, m = t.length
Time Complexity: O(n + m)
Space Complexity: O(1)

```
var minSteps = function(s, t) {
  let sFreq = Array(26).fill(0), tFreq = Array(26).fill(0);
  for (let char of s) sFreq[char.charCodeAt() - 97]++;
  for (let char of t) tFreq[char.charCodeAt() - 97]++;
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    ans += Math.abs(sFreq[i] - tFreq[i]);
  }
  return ans;
};
```