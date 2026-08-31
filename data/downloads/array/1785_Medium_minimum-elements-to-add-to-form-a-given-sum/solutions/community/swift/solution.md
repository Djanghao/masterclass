# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5054654/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5054654/)

---

First calculating the sum of the array. Then calculate the absolute difference between the goal and the sum. This difference is the amount that needs to be added to the array to reach the goal. Since each added element can have an absolute value of up to limit, the minimum number of elements needed is the difference divided by limit. The expression (diff + limit - 1) / limit is equivalent to ceil(diff / limit), but it avoids the need for floating-point division.

# Code
```
class Solution {
    func minElements(_ nums: [Int], _ limit: Int, _ goal: Int) -> Int {
        let sum = nums.reduce(0, +)
        let diff = abs(goal - sum)
        return (diff + limit - 1) / limit
    }
}

```