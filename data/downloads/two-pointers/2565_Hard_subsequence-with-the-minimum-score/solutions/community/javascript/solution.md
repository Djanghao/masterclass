# Solution based on great idea from Java_Programmer_CF

**Author:** Gang-Li
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3178279/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3178279/)

---

# Intuition
Refer Java_Programmer_CF solution:
https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3174018/binary-search-sliding-window/?orderBy=most_votes

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minimumScore = function (SS, TT) {
  let s = SS.split(""),
    t = TT.split("");
  let lo = 0,
    hi = TT.length;
  while (lo <= hi) {
    let m = (lo + hi) >> 1;
    if (check(s, t, m)) hi = m - 1;
    else lo = m + 1;
  }
  return hi + 1;
};

function check(s, t, len) {
  let t_length = t.length,
    n = s.length;
  if (len >= t_length) return true; //delete whole t array
  let pos = Array(t_length).fill(s.length + 1); //Greedy left matching
  // Arrays.fill(pos, 1_000_000_0);
  let t_left_index = 0;
  for (let i = 0; i < n; i++) {
    if (t_left_index === t_length) break;
    if (t[t_left_index] === s[i]) {
      pos[t_left_index] = i;
      t_left_index++;
    }
  }
  if (t_left_index >= t_length - len) return true; //we can delete right subarray of length len
  let right_index_of_s = n - 1;
  for (let rp = t_length - 1; rp >= len; rp--) {
    while (right_index_of_s >= 0 && s[right_index_of_s] != t[rp])
      right_index_of_s--;
    if (right_index_of_s === -1) return false;
    let lp = rp - len - 1;
    if (lp === -1 || pos[lp] < right_index_of_s) return true;
    right_index_of_s--;
  }
  return false;
}

```