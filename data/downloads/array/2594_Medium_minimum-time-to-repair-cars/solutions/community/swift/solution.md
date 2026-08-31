# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3313014/](https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/3313014/)

---



# Code
```
class Solution {
    func repairCars(_ ranks: [Int], _ cars: Int) -> Int {
        
        var (l, r) = (1, ranks.min()!*cars*cars)
        
        while l < r{
            var (res, mid) = (0, (l+r)/2)
            
            for rank in ranks{
                res += Int(sqrt(Double(mid)/Double(rank)))
            }

            res < cars ? (l = mid + 1) : (r = mid)
        }
        
        return l
    }
}
```