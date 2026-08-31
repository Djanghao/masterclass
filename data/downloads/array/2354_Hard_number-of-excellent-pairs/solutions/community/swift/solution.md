# swift accepted solution

**Author:** Sayandev_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-excellent-pairs/solutions/3325810/](https://leetcode.com/problems/number-of-excellent-pairs/solutions/3325810/)

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
    func countExcellentPairs(_ nums: [Int], _ k: Int) -> Int {
          let nums = Set(nums).map{ $0.nonzeroBitCount }.sorted()
        var counter = nums.reduce(0) { $0 + ($1*2 >= k ? 1 : 0) } 
        var left = 0, right = nums.count - 1
        while left < right {
            if nums[left] + nums[right] >= k {
                counter += (right - left) * 2
                right -= 1
            } else {
                left += 1
            }
        }
        return counter
    }
}
```