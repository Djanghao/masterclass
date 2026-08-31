# Swift Balance Hash Map

**Author:** artemvor1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/3265934/](https://leetcode.com/problems/longest-well-performing-interval/solutions/3265934/)

---


```
class Solution {
    func longestWPI(_ hours: [Int]) -> Int {
       var map = [Int: Int]()
       var length = 0
       var balance = 0
       for (i, h) in hours.enumerated() {
           balance += h>8 ? 1 : -1
           if balance > 0 {length = i + 1} 
           else {
                map[balance] = map[balance] ?? i
                if let val = map[balance - 1] {
                    length = max(length, i - val)
                }
            }
        }
       return length
    }
}
```