# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3062731/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/3062731/)

---

```
class Solution {
    func largestSumAfterKNegations(_ nums: [Int], _ k: Int) -> Int {
        
        var ns = nums.sorted()
        var i = 0
        
        while i < k, i < nums.count, ns[i] < 0 {
            ns[i] = -ns[i]
            i += 1
        }
        
        guard i > k || (k - i) % 2 == 1 else { return ns.reduce(0, +) }
        
        var mi = ns[min(i, ns.count - 1)]
        if i > 0, ns[i - 1] < mi { mi = ns[i - 1] }
        
        return ns.reduce(0, +) - 2 * mi
    }
}
```