# Swift Solution using binary search

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2952721/](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/solutions/2952721/)

---

# Code
```
class Solution {
    func maximumTastiness(_ price: [Int], _ k: Int) -> Int {
        guard !price.isEmpty, price.count >= k else {
            return 0
        }
        
        let price = price.sorted()
        var left = 0
        var right = price[price.count - 1] - price[0]
        
        while left < right {
            let m = (right + left + 1) / 2
            var count = 1
            var last = price[0]
            
            for i in 1..<price.count {
                if price[i] - last >= m {
                    count += 1
                    last = price[i]
                }
            }
            
            if count >= k {
                left = m
            } else {
                right = m - 1
            }
        }
        
        return left
    }
}

```