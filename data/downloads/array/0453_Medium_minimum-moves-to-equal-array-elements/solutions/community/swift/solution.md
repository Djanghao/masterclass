# Beats 100% || Easy to understand

**Author:** swarmeme
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4929762/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/4929762/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minMoves(_ nums: [Int]) -> Int {
        var count = 0
        var min = nums.min()
        
        for i in 0..<nums.count{
            count += nums[i] - min!
        }
        return count
    }
}
```