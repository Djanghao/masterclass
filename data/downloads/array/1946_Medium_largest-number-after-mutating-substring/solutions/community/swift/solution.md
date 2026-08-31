# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1360934/](https://leetcode.com/problems/largest-number-after-mutating-substring/solutions/1360934/)

---

1. Skip consecutive digits at the beginning that are **not increased** by the `change`
2. Then change the consecutive numbers that are **not decreased** by the `change`
```
class Solution {
    func maximumNumber(_ num: String, _ change: [Int]) -> String {
        let n = num.count
        var num = num.map({ Int($0.asciiValue ?? 48) - 48 }), i = 0
        while i < n && change[num[i]] <= num[i] {
            i += 1
        }
        while i < n && change[num[i]] >= num[i] {
            num[i] = change[num[i]]
            i += 1
        }
        return num.map({ "\\($0)" }).joined(separator: "")
    }
}
```