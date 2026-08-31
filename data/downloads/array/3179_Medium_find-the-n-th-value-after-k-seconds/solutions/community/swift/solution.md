# ✅ O(n∗k) DP

**Author:** eleev
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5326150/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5326150/)

---

# Solution
```swift
struct Solution {
    @_optimize(speed)
    func valueAfterKSeconds(_ n: Int, _ k: Int) -> Int {
        let mod = 1_000_000_007
        var vals = ContiguousArray(repeating: 1, count: n)
        
        for _ in 1...k {
            for j in 1..<n {
                vals[j] = (vals[j] + vals[j - 1]) % mod
            }
        }
        return vals[n - 1]
    }
}
```