# Swift simple solution

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5292411/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/5292411/)

---

# Code
```
class Solution {
    func checkStrings(_ s1: String, _ s2: String) -> Bool {
        let s10 = s1.enumerated().filter { $0.0 % 2 == 0 }.map { $0.1 }.sorted()
        let s11 = s1.enumerated().filter { $0.0 % 2 == 1 }.map { $0.1 }.sorted()
        let s20 = s2.enumerated().filter { $0.0 % 2 == 0 }.map { $0.1 }.sorted()
        let s21 = s2.enumerated().filter { $0.0 % 2 == 1 }.map { $0.1 }.sorted()
        
        return s10 == s20 && s11 == s21        
    }
}
```