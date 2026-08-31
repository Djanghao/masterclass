# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4328271/](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4328271/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func getSumAbsoluteDifferences(_ nums: [Int]) -> [Int] {
        var result = Array(repeating: 0, count: nums.count)
        var prevSum = 0
        var nextSum = nums.reduce(0, +)
        for i in 0 ..< nums.count {
            result[i] = i * nums[i] - prevSum + nextSum - (nums.count - i) * nums[i]
            prevSum += nums[i]
            nextSum -= nums[i]
        }
        return result
    }
}

```