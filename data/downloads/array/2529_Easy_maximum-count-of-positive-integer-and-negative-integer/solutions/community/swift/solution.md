# ✅ SIMPLE SOLUTION

**Author:** AbduraxmonDavurov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4075618/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4075618/)

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
    func maximumCount(_ nums: [Int]) -> Int {
    let pos = nums.filter {$0 > 0}.count
    let neg = nums.filter {$0 < 0}.count
    
    return max(pos, neg)
}
}
```