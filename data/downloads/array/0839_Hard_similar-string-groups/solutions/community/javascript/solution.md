# BFS solution with explanation

**Author:** bahoang3105
**Votes:** 9
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/3462166/](https://leetcode.com/problems/similar-string-groups/solutions/3462166/)

---

# Intuition
Use BFS to find all strings in a group; use the `used` array to store the string already in a group or not

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2 * k)$$

- Space complexity: $$O(n)$$

- n: strs.length, k: strs[0].length
# Code
```
/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
  const l = strs.length, strl = strs[0].length;
  const used = Array(l).fill(false);
  const queue = [];
  let res = 0, cur, diff;

  for (let i = 0; i < l; i++) {
    if (!used[i]) {
      res++;
      queue.push(strs[i]);
    }

    while (queue.length > 0) {
      cur = queue.pop();
      for (let j = 0; j < l; j++) {
        if (!used[j]) {

          // check cur and strl is similar or not
          // if diff > 2: they are not similar, otherwise: add strs[j] into queue
          diff = 0;
          for (let k = 0; k < strl; k++) {
            if(cur[k] !== strs[j][k] && ++diff > 2) break;
          }
          if (diff <= 2) {
            used[j] = true;
            queue.push(strs[j]);
          }
        }
      }
    }
  }

  return res;
};

```