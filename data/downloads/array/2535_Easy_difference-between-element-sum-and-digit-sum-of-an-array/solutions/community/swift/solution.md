# Swift 3 lines

**Author:** eQip123
**Votes:** 2
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3142393/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3142393/)

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
func differenceOfSum(_ nums: [Int]) -> Int {
    let sumArr = nums.reduce(0, +)
    let sumArr1 = nums.description.compactMap { Int(String($0))}.reduce(0, +)
    return sumArr - sumArr1
}
}
```