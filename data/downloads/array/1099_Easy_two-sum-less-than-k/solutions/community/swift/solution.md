# Beats 100.00%of users with Swift

**Author:** dreamon
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/4205739/](https://leetcode.com/problems/two-sum-less-than-k/solutions/4205739/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func twoSumLessThanK(_ nums: [Int], _ k: Int) -> Int {
        var ans = -1
        if nums.count < 2 {
            return ans
        }
        var sorted = nums.sorted()
        var start = 0
        var end = sorted.count - 1

        while start < end {
            if sorted[start] + sorted[end] < k {
                if ans < sorted[start] + sorted[end] {
                    ans = sorted[start] + sorted[end]
                }
                start += 1
            } else {
                end -= 1
            }
        }
        return ans
    }
    
}
```