# Golang solution

**Author:** DmitriV
**Votes:** 2
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/3789264/](https://leetcode.com/problems/robot-return-to-origin/solutions/3789264/)

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
func judgeCircle(moves string) bool {
  return strings.Count(moves, "U") == strings.Count(moves, "D") && strings.Count(moves, "R") == strings.Count(moves, "L")    
}
```