# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/2972590/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/2972590/)

---

```
class Solution {
    func findTheDistanceValue(_ arr1: [Int], _ arr2: [Int], _ d: Int) -> Int {
        
        let a = arr2.sorted()
        
        func f(_ n: Int) -> Bool {
            guard abs(n - a[0]) > d, abs(n - a[a.count - 1]) > d else { return false }
            
            var l = 0
            var r = a.count - 1
            
            while l <= r {
                let m = (l + r) / 2
                if abs(n - a[m]) <= d { return false }
                if a[m] < n { l = m + 1 }
                else { r = m - 1 }
            }
            
            return true
        }
        
        return arr1.filter(f).count
    }
}
```