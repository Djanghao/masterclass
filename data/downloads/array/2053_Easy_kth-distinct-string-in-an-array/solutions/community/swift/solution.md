# [Swift] 1 line, OrderedDictionary

**Author:** iamhands0me
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588310/](https://leetcode.com/problems/kth-distinct-string-in-an-array/solutions/5588310/)

---



# Code
```
import Collections

class Solution {
    func kthDistinct(_ arr: [String], _ k: Int) -> String {
        arr.reduce(into: OrderedDictionary<String, Int>()) { $0[$1, default: 0] += 1 }.filter { $0.value == 1 }.dropFirst(k - 1).first?.key ?? ""
    }
}
```