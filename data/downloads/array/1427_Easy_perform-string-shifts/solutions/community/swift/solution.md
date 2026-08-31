# 0ms Fastest solution

**Author:** M_DeLaCruz92
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/5051867/](https://leetcode.com/problems/perform-string-shifts/solutions/5051867/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N + L)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(L)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution { 
    func stringShift(_ s: String, _ shift: [[Int]]) -> String { 
        let n = s.count
        var leftShifts = 0
        
        for move in shift { 
            let (direction, amount) = (move[0], move[1])
            leftShifts += direction == 0 ? amount : -amount
        }

        leftShifts = (leftShifts % n + n) % n
        return String(s.suffix(n - leftShifts) + s.prefix(leftShifts))
    }
}
```