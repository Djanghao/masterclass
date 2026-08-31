# Swift: Sliding window solution ✅

**Author:** AkyshAkan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/4938230/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/4938230/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countSubarrays(_ nums: [Int], _ k: Int) -> Int {
        if k <= 1 {
            return 0
        }
        var sum = 0
        var result = 0
        var (left, right) = (0, 0)

        while right < nums.count {
            sum += nums[right]
            while sum * (right - left + 1) >= k {
                sum -= nums[left]
                left += 1
            }

            result += right - left + 1
            right += 1
        }

        return result
    }
}
```