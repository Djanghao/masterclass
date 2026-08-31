# 💡Swift - Optimal Solution - Hash Table

**Author:** bernikovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4355185/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4355185/)

---

# Solution
```
class Solution {
    func countCharacters(_ words: [String], _ chars: String) -> Int {
        let golden: [Character: Int] = chars.reduce(into: [:]) { $0[$1, default: 0] += 1 }
        var answer = 0
        for word in words {
            var remaining = golden
            let good = word.allSatisfy {
                remaining[$0, default: 0] -= 1
                return remaining[$0, default: 0] >= 0
            }
            if good {
                answer += word.count
            }
        }
        return answer
    }
}
```
# Complexity
- Time: $$O(n+m)$$
- Space: $$O(1)$$