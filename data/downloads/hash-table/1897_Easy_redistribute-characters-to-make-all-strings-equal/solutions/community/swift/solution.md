# 💡Swift - Optimal Solution - Hash Table

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4477549/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4477549/)

---

# Solution
```
class Solution {
    func makeEqual(_ words: [String]) -> Bool {
        let n = words.count
        var freq: [Character: Int] = [:]
        for word in words {
            for char in word {
                freq[char, default: 0] += 1
            }
        }

        return freq.values.allSatisfy { $0.isMultiple(of: n) }
    }
}
```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$