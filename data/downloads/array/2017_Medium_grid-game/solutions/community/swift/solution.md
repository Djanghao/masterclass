# prefix reversed solution

**Author:** user1740oG
**Votes:** 0
**Link:** [https://leetcode.com/problems/grid-game/solutions/3347220/](https://leetcode.com/problems/grid-game/solutions/3347220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

[0,5,4] i = 0, secondRobot = 9, res = 9
[0,0,0] 

[0,0,4] i = 1, secondRobot = 4, res = 4
[1,0,0]

[0,0,0] i = 2, secondRobot = 6, res = 4
[1,5,0]

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func gridGame(_ grid: [[Int]]) -> Int {
        let N = grid[0].count
        
        var topPrefix = grid[0]
        var botPrefix = grid[1]
        
        for i in 1..<N {
            topPrefix[i] += topPrefix[i - 1]
            botPrefix[i] += botPrefix[i - 1]
        }
        
        var result = Int.max
        
        for i in 0..<N {
            let top = topPrefix.last! - topPrefix[i]
            let bottom = i > 0 ? botPrefix[i - 1] : 0
            let secondRobot = max(top, bottom)
            result = min(result, secondRobot)
        }
        
        return result
    }
}
```