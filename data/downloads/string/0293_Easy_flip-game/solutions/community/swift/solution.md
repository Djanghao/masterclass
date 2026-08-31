# 💡Swift - Optimal Solution

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-game/solutions/4723378/](https://leetcode.com/problems/flip-game/solutions/4723378/)

---

# Solution
```swift
class Solution {
    func generatePossibleNextMoves(_ currentState: String) -> [String] {
        let s = Array(currentState)
        let n = s.count

        var answer: [String] = []
        for i in 0..<(n-1) {
            if s[i] == "+" && s[i+1] == "+" {
                let result = String(s[..<i]) + "--" + String(s[(i+2)...])
                answer.append(result)
            }
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(n^2)$$
- Space: $$O(1)$$