# [Javascript] Binary Search

**Author:** anna-hcj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5822116/](https://leetcode.com/problems/maximize-score-of-numbers-in-ranges/solutions/5822116/)

---

**Solution: Binary Search**

Sort start in asc order and create the maximum difference between every adjacent pair.
Binary search for the maximum minimum difference `diff` between every two adjacent integers.
Greedily start with the minimum number (`start[0] - d`) and then try to make every difference equal to `diff` (it's optimal to only take the minimum needed to give a better chance for incoming integers).

`n = length of start`, `m = max diff + d`
Time Complexity: `O(n log(n) + n log(m))`
Space Complexity: `O(log(n))` (space for sorting)
```
function maxPossibleScore(start, d) {
  start.sort((a, b) => a - b);
  let low = 0, high = start[start.length - 1] - start[0] + d;
  while (low < high) {
    let mid = low + Math.ceil((high - low) / 2);
    if (isPossible(start, d, mid)) low = mid;
    else high = mid - 1;
  }
  return low;
};

function isPossible(start, d, diff) {
  let prev = start[0];
  for (let i = 1; i < start.length; i++) {
    if (start[i] + d - prev < diff) {
      return false;
    }
    prev = Math.max(start[i], prev + diff);
  }
  return true;
}
```