# 3025. Find the Number of Ways to Place People I

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4759722/](https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i/solutions/4759722/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
ps = points
ax, ay = alice's x,y position
bx, by = bob's x,y position

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```
var numberOfPairs = function (ps) {
  ps.sort(([x1, y1], [x2, y2]) => x1 - x2 || y2 - y1);
  let count = 0;
  for (let i = 0; i < ps.length; i++) {
    const [ax, ay] = ps[i];
    let highestYBetweenAandB = -Infinity;
    for (let j = i + 1; j < ps.length; j++) {
      const [bx, by] = ps[j];
      if (ay >= by) {
        if (highestYBetweenAandB < by) {
          count += 1;
          highestYBetweenAandB = by;
        }
      }
    }
  }
  return count;
};

```