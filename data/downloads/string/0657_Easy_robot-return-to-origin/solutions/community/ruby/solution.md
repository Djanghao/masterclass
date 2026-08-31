# Ruby: Simplest and fastest solution. 100% faster than other ruby submissions.

**Author:** RajRoR
**Votes:** 1
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/4401217/](https://leetcode.com/problems/robot-return-to-origin/solutions/4401217/)

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
# @param {String} moves
# @return {Boolean}
def judge_circle(moves)
  moves.count('U') == moves.count('D') && moves.count('L') == moves.count('R')
end
```