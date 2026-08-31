# 🔥 Easy solution. Execute in 9ms, beats 100% in CPU and Memory! 🔥

**Author:** romixery
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/5695747/](https://leetcode.com/problems/escape-the-ghosts/solutions/5695747/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The number of moves that we need to reach to the target, should be less than ghosts moves.

# Approach
The idea is that we have to calculate the number of moves, that required to reach the target, for all ghosts and also according to the starting point. The # of moves for us, should be less than # of moves for ghosts.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(2n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```swift []
class Solution {
    func escapeGhosts(_ ghosts: [[Int]], _ target: [Int]) -> Bool {
        // Calculates number of moves for us
        let targetSum = target.reduce(into: 0){$0 += abs($1)}

        // Calculates number of moves for ghosts
        let ghostsSum = ghosts.map {
            Int(abs($0[0] - target[0]) + abs($0[1] - target[1]))
        }
        
        // ** Itereate over the ghosts moves
        for ghost in ghostsSum {
            if targetSum >= ghost {
                return false
            }
        }
        
        return true
    }
}
```