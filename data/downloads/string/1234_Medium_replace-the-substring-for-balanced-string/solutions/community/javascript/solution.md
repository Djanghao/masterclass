# Javascript solution with concise explanation

**Author:** bahoang3105
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/3463844/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/3463844/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Find the shortest substring that contains all the extra characters that are given more than length / 4 times 
For example: 
- QQQWWEREWQQQ
  - length: 12 => length / 4 = 3
  - Q: 6
  - W: 3
  - E: 2
  - R: 1

=> Find the shortest substring containing 3 Q (because W, E, R appear <= 3 times)
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  const l = s.length;
  let start = 0, end = 0, res = l, need = 0;
  const count = { 'Q': 0, 'W': 0, 'E': 0, 'R': 0 };
  for (let i = 0; i < l; i++) {
    count[s[i]]++;
  }
  for (let char in count) {
    count[char] = count[char] - l/4;
    if (count[char] > 0) {
      need++;
    }
  }
  if (need === 0) return 0;
  
  while (end < l) {
    count[s[end]]--;
    if (count[s[end]] === 0) need--;
    while (need === 0) {
      res = Math.min(res, end - start + 1);
      count[s[start]]++;
      if (count[s[start++]] > 0) need++;
    }
    end++;
  }

  return res;
};
```