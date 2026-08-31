# Simple & Eazy!

**Author:** elite_code_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5532048/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/5532048/)

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
    func findIndices(_ nums: [Int], _ indexDifference: Int, _ valueDifference: Int) -> [Int] {
        for i in 0 ..< nums.count {
            for j in 0 ..< nums.count {
                if abs(i-j) >= indexDifference {
                    if abs(nums[i] - nums[j]) >= valueDifference{
                        return [i,j]
                    }
                }
            }
        }
        return [-1,-1]
    }
}
```