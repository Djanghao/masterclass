# Swift solution

**Author:** yamironov
**Votes:** 10
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/525852/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/525852/)

---

Swift solution
```
class Solution {
    func sortByBits(_ arr: [Int]) -> [Int] {
        return arr.sorted(by: { $0.nonzeroBitCount < $1.nonzeroBitCount || $0.nonzeroBitCount == $1.nonzeroBitCount && $0 < $1 })
    }
}
```