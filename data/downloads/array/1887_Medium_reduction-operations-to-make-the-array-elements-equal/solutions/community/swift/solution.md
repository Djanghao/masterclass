# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4309280/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4309280/)

---

# Complexity
- Time complexity: $$O(sort)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(sort)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func reductionOperations(_ nums: [Int]) -> Int {
        var (ans, nums) = (0, nums)
        nums.sort()
        for i in stride(from: nums.count - 1, to: 0, by: -1) {
            if nums[i] != nums[i - 1] {
                ans += nums.count - i
            }
        }
        return ans
    }
}
```