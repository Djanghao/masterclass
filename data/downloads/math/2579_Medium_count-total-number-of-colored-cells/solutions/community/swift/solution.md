# swift simple solution 100% beats

**Author:** iftixorrustamovv
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5464494/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/5464494/)

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
class Solution {
    func coloredCells(_ n: Int) -> Int {
        if n==1 {
            return 1
        } 
        var sum = 1
        for i in 2...n{
            sum = sum + (i-1) * 4 
        }
        return sum
    }
}
```