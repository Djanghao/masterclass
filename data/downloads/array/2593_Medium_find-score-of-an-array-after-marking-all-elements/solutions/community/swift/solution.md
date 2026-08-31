# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312601/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/3312601/)

---



# Code
```
class Solution {
    func findScore(_ nums: [Int]) -> Int {
        var sorted = nums.enumerated().sorted(by: { $0.element < $1.element })
        var (v, score) = (Set<Int>(), 0)

        for s in sorted {
            guard !v.contains(s.offset) else {continue}
            v.insert(s.offset + 1)
            v.insert(s.offset - 1)
            score += s.element
        }

        return score
    }
}

```