# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-averages/solutions/3019437/](https://leetcode.com/problems/number-of-distinct-averages/solutions/3019437/)

---

```
class Solution {
    func distinctAverages(_ nums: [Int]) -> Int {
        
        var ds = Set<Double>()
        var ns = nums.sorted()
        
        for i in 0...(ns.count / 2) {
            ds.insert(Double(ns[i] + ns[ns.count - i - 1]) / 2)
        }
        
        return ds.count
    }
}
```