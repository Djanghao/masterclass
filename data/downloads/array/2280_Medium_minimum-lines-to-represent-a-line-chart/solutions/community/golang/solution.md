# Sort and skip points with the same slope

**Author:** ac83
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2061864/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2061864/)

---

1) Sort all the points based on the x coordinate.
2) Iterate through all the points and skip the ones which are on the same line as the previous point. For three points (x1, y1), (x2, y2) and (x3, y3) to be on the same line we know the slope should be same, i.e. `(y2 - y1) / (x2 - x1) == (y3 - y2) / (x3 - x2)`. We can rewrite this as `(y2 - y1) * (x3 - x2) == (y3 - y2) * (x2 - x1)` to avoid comparing float values.

```
func minimumLines(stockPrices [][]int) int {
    sort.Slice(stockPrices, func(i, j int) bool {
        return stockPrices[i][0] < stockPrices[j][0]
    })
    
    px, py := stockPrices[0][0], stockPrices[0][1]
    count, i := 0, 1
    for i < len(stockPrices) {
        x, y := stockPrices[i][0], stockPrices[i][1]
        i++
        // skip all points with same slope
        for ; i < len(stockPrices); i++ {
            ax, ay := stockPrices[i][0], stockPrices[i][1]
            if (ay - y) * (x - px) != (y - py) * (ax - x) {
                break
            }
        }
        px, py = stockPrices[i - 1][0], stockPrices[i - 1][1]
        count++
    }
    return count
}
```