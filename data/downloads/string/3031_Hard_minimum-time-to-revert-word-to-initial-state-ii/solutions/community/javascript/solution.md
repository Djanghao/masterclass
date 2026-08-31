# [Javascript] Z Algorithm

**Author:** anna-hcj
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4673950/](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii/solutions/4673950/)

---

**Solution: Z Algorithm**

At each operation, when we add any `k` characters to the end of word, this means later on we can "change" these characters to be anything.
When adding `k` characters to the end, imagine word becoming something like `"abc***"`. The part `"***"` can be anything.

Keep track of the start index of the covered area (`"***"` area).
If the non-covered area matches the prefix, word can be equal to the initial state.

Use Z algorithm to find the longest string starting from each index that matches the prefix.
`z[i] = length of string starting from index i, matching the prefix`

Time Complexity: `O(n)`
Space Complexity: `O(n)`
```
var minimumTimeToInitialState = function(word, k) {
  let n = word.length, z = zArray(word);
  let startIndex = 0, coveredIndex = n, time = 0;
  while (startIndex < n) {
    coveredIndex -= k;
    startIndex += k;
    time++;
    let zIndex = z[startIndex] || 0;
    if (zIndex >= coveredIndex) return time;
  }
  return n;
};

function zArray(s) {
  let n = s.length, z = Array(n).fill(0);
  for (let i = 1, left = 0, right = 0; i < n; i++) {
    if (i > right) { // i is outside of window, match characters
      left = right = i;
      while (right < n && s[right] === s[right - left]) {
        right++;
      }
      z[i] = right - left;
      right--;
    } else { // i is inside window
      if (z[i - left] + i <= right) { // can re-use prefix value since i is completely within the window
        z[i] = z[i - left];
      } else { // need to match characters since z[i - left] exceeds the right bound
        left = i;
        while (right < n && s[right] === s[right - left]) {
          right++;
        }
        z[i] = right - left;
        right--;
      }
    }
  }
  return z;
}
```