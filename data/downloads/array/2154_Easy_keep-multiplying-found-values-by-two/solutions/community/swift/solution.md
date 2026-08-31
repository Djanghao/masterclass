# 💡Swift - Optimal Solution - Hash Set

**Author:** bernikovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4670218/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/4670218/)

---

# Solution
```swift
class Solution {
    func findFinalValue(_ nums: [Int], _ original: Int) -> Int {
        let nums = Set(nums)
        var answer = original
        while nums.contains(answer) {
            answer *= 2
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$