# My Swift solution(one line, reduce, set)

**Author:** lmvtsv
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2814406/](https://leetcode.com/problems/count-the-number-of-consistent-strings/solutions/2814406/)

---

```
class Solution {
    func countConsistentStrings(_ allowed: String, _ words: [String]) -> Int {
        return words.reduce(into: 0) { $0 += Set($1).isSubset(of: allowed) ? 1 : 0 }
    }
}
```