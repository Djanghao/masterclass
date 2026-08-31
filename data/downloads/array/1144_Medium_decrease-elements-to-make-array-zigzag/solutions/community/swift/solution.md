# swift easy solution

**Author:** Zhanadilll
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4426458/](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/solutions/4426458/)

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
    func movesToMakeZigzag(_ nums: [Int]) -> Int {
        var arr = [0, 0]

        for i in 0..<nums.count {
            let left = i > 0 ? nums[i - 1] : Int.max
            let right = i < nums.count - 1 ? nums[i + 1] : Int.max
            arr[i % 2] += max(0, nums[i] - min(left, right) + 1)
        }

        return min(arr[0], arr[1])
    }
}
```