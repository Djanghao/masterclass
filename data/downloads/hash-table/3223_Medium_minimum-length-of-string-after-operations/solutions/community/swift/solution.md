# Runtime 270ms, one line solution

**Author:** ChouChien
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5521120/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5521120/)

---

![\u622A\u5716 2024-07-23 \u4E0B\u53482.47.18.png](./images/0.png)


# Code
```
class Solution {
    func minimumLength(_ s: String) -> Int {
        s.reduce(into: [Character: Int]()) { dic, char in dic[char, default: 0] += 1}.values.reduce(into: 0) { $0 += ($1 - 1)%2 + 1 }
    }
}
```