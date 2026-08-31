# [Swift] Simple Solution with Array map

**Author:** kmshiori
**Votes:** 5
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/1069231/](https://leetcode.com/problems/letter-case-permutation/solutions/1069231/)

---

```
class Solution {
    func letterCasePermutation(_ S: String) -> [String] {
        var result: [String] = [""]
        
        for c in S {
            if c.isLetter {
                result = result.flatMap { ["\\($0)\\(c.lowercased())", "\\($0)\\(c.uppercased())"] }
            } else {
                result = result.map { "\\($0)\\(c)" }
            }
        }
        
        return result
    }
}
```