# 💡Swift - Optimal Solution - Array

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-town-judge/solutions/4764878/](https://leetcode.com/problems/find-the-town-judge/solutions/4764878/)

---

# Solution
```swift
class Solution {
    func findJudge(_ n: Int, _ trust: [[Int]]) -> Int {
        guard n > 1 else { return 1 }
        var score = Array(repeating: 0, count: n + 1)
        for pair in trust {
            score[pair[0]] -= 1
            score[pair[1]] += 1
        }
        return score.firstIndex { $0 == n - 1 } ?? -1
    }
}
```
# Complexity
- Time: $$O(m)$$ where $$m$$ is the length of trust array
- Space: $$O(n)$$