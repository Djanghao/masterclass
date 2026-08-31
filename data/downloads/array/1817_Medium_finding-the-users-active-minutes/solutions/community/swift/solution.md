# [Swift] Swift O(n) solution

**Author:** NicolasCombe5555
**Votes:** 2
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141393/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1141393/)

---

```swift
final class Solution {
    // O(n) time | O((max(n, k)) space | where n = logs.count
    func findingUsersActiveMinutes(_ logs: [[Int]], _ k: Int) -> [Int] {
        var dict: [Int: Set<Int>] = [:]
        var answer = Array(repeating: 0, count: k)
        
        for log in logs {
            dict[log[0], default: []].insert(log[1]) // User with id log[0] has activity at minute log[1]
        }
        
        for item in dict {
            let value = item.value.count // UAM of a user
            if value <= k {  // validation for out of bounds
				answer[value-1] += 1 // array is 1-indexed
			} 
        }
        
        return answer
    }
}
```