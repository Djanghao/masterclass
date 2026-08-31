# Clean js solution based on Lee's

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5282251/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5282251/)

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
```
function findWinningPlayer(skills: number[], k: number): number {
  let que: number[] = [];
  let b = skills[0], cur = 0;
  for (let i = 1; i < skills.length; i++) {
    if (b < skills[i]) {
      cur = 1;
      b = skills[i];
    } else {
      cur++;
    }
    if (cur === k) break;
  }
  return skills.findIndex(v => b === v);
};

```