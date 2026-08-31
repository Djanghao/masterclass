# Swift Solution | Easy To Understand  | O(n)

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/3621424/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/3621424/)

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
import Foundation

class Solution {
    func maximumXOR(_ nums: [Int]) -> Int {
        var ans = 0
        let numsLength = nums.count
        var maximumNumberOfBits = 0

        for number in nums {
            ans = (ans|number)
        }
        return ans
    }
}
```