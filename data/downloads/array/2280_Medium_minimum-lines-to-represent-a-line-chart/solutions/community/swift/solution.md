# Swift solution with slope

**Author:** ms00769171
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062196/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062196/)

---

Use **CLongDouble** instead of **Double**
There's a hidden case: [[1,1],[500000000,499999999],[1000000000,999999998]]
Use Double will get same slope **0.999999998**
:(

```
class Solution {
    func minimumLines(_ stockPrices: [[Int]]) -> Int {
        if stockPrices.count <= 1{
            return 0
        }
        let stockPrices = stockPrices.sorted { $0[0] < $1[0] }
        var result = 1
        var lastPoint = stockPrices[1]
        var slope = CLongDouble(lastPoint[1] - stockPrices[0][1]) / CLongDouble(lastPoint[0] - stockPrices[0][0])
        
        for i in stockPrices[2...]{
            let s = CLongDouble(i[1] - lastPoint[1]) / CLongDouble(i[0] - lastPoint[0])
            if s != slope{
                result += 1
                slope = s
            }
            lastPoint = i
        }
        return result
    }
}
```