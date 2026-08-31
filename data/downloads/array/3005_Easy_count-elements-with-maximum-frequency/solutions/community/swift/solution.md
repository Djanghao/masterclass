# ✅ Swift. Accepted solution with HashMap

**Author:** protodimbo
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840618/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/4840618/)

---

# Code
```
class Solution {
    func maxFrequencyElements(_ nums: [Int]) -> Int {
        var hash = nums.reduce(into: [Int: Int]()) { $0[$1, default: 0] += 1 }
        let max = hash.values.max()
        return hash.filter { $0.value == max }.values.reduce(0, +)
    }
}
```