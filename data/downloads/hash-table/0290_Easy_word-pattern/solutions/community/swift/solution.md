# Solution Swift [beats 100%]

**Author:** Nihad_s
**Votes:** 4
**Link:** [https://leetcode.com/problems/word-pattern/solutions/2998624/](https://leetcode.com/problems/word-pattern/solutions/2998624/)

---

# Complexity
- Time complexity: $$O(n)$$, n \u2013 s length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func wordPattern(_ pattern: String, _ s: String) -> Bool {
        let pattern = Array(pattern)
        let s = s.split(separator: " ")
        var hashMap: [Character: String.SubSequence] = [:]

        if pattern.count != s.count { return false }

        for i in 0..<pattern.count {
            if hashMap[pattern[i]] == nil {
                hashMap[pattern[i]] = s[i]
            } else if hashMap[pattern[i]] != s[i] {
                return false
            }
        }

        return hashMap.keys.count == Set(hashMap.values).count
    }
}
```