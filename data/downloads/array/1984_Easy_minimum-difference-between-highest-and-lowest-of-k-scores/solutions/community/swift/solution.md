# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3044497/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3044497/)

---

```
class Solution {
    func minimumDifference(_ nums: [Int], _ k: Int) -> Int {
        
        let nu = nums.sorted()
        var mi = Int.max
        
        for i in 0...(nu.count - k) {
            mi = min(mi, nu[i + k - 1] - nu[i])
        }
        
        return mi
    }
}
```