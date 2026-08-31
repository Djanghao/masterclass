# 💡Swift - Expected Solution - Hash Table

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/3947840/](https://leetcode.com/problems/reorganize-string/solutions/3947840/)

---

# Solution
```
class Solution {
    func reorganizeString(_ s: String) -> String {
        var letterCount: [Character: Int] = s.reduce(into: [:]) {
            $0[$1, default: 0] += 1
        }

        var result = ""
        var last: Character?
        for i in 0..<s.count {
            guard let pair = letterCount
                .lazy
                .filter({ $0.value > 0 && $0.key != last })
                .max(by: { $0.value < $1.value }) else {
                    return ""
            }
            let letter = pair.key
            result.append(letter)
            last = letter
            letterCount[letter, default: 0] -= 1
        }
        return result
    }
}
```

# Complexity
- Time: $$O(n \\cdot k)$$
- Space: $$O(k)$$