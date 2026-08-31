# Beats 100%

**Author:** amt93
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/5423018/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/5423018/)

---


# Code
```
class Solution {
    func maxFreq(_ s: String, _ maxLetters: Int, _ minSize: Int, _ maxSize: Int) -> Int {
        var valids = [[Character]: Int]()
        let s = Array(s)
        outer: for l in 0...(s.count - minSize) {
            var uniques = Set<Character>()
            for r in 0..<minSize {
                guard uniques.count <= maxLetters else { continue outer }
                uniques.insert(s[l + r])
            }
            guard uniques.count <= maxLetters else { continue }
            valids[Array(s[l..<(l + minSize)]), default: 0] += 1
        }
        return valids.values.max() ?? 0
    }
}

```