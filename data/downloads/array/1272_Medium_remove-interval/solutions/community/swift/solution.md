# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-interval/solutions/4760007/](https://leetcode.com/problems/remove-interval/solutions/4760007/)

---

# Solution
```swift
class Solution {
    func removeInterval(_ intervals: [[Int]], _ toBeRemoved: [Int]) -> [[Int]] {
        var answer: [[Int]] = []
        for interval in intervals {
            if interval[1] < toBeRemoved[0] || interval[0] > toBeRemoved[1] {
                answer.append(interval)
                continue
            }
            if interval[0] < toBeRemoved[0] {
                answer.append([interval[0], toBeRemoved[0]])
            }
            if toBeRemoved[1] < interval[1] {
                answer.append([toBeRemoved[1], interval[1]])
            }
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(n)$$