# Swift Solution

**Author:** wburke
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-hidden-sequences/solutions/1719996/](https://leetcode.com/problems/count-the-hidden-sequences/solutions/1719996/)

---

```
class Solution {
    func numberOfArrays(_ differences: [Int], _ lower: Int, _ upper: Int) -> Int {
        let sizeOfPossibleRange = upper - lower
        
        var minimumVal = 0
        var maximumVal = 0
        var cumulativeSum = 0
        
        for d in differences {
            cumulativeSum += d
            if cumulativeSum > maximumVal {
                maximumVal = cumulativeSum
            } else if cumulativeSum < minimumVal {
                minimumVal = cumulativeSum
            }
        }
        
        let sizeOfRange = maximumVal - minimumVal
        
        return max(sizeOfPossibleRange - sizeOfRange + 1,0)
    }
}
```