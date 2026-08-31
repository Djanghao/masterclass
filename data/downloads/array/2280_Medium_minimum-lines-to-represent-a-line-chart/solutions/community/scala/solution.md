# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/3021793/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/3021793/)

---

# Intuition
Compare neighbour slopes, avoid Float/Double overflow.

# Complexity
- Time complexity: $$O(n*log(n))$$ due to sorting
- Space complexity: $$O(1)$$
# Code
```
object Solution {
  def minimumLines(stockPrices: Array[Array[Int]]): Int = {
    def checkSlope(i: Int): Boolean =
      (stockPrices(i-1)(1) - stockPrices(i-2)(1)) * (stockPrices(i)(0) - stockPrices(i-1)(0)) == 
      (stockPrices(i)(1) - stockPrices(i-1)(1)) * (stockPrices(i-1)(0) - stockPrices(i-2)(0))
    def impl(i: Int, acc: Int): Int =
      if(i>=stockPrices.size) acc 
      else if(checkSlope(i)) impl(i+1, acc)
      else impl(i+1, acc+1)

    scala.util.Sorting.quickSort(stockPrices)(Ordering[Int].on(x => x(0)))
    if(stockPrices.size<=2) (stockPrices.size-1)
    else impl(2, 1)
  }
}
```