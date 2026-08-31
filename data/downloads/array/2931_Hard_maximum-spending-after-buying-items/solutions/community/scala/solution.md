# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4738640/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/4738640/)

---

```
object Solution {
    def maxSpending(values: Array[Array[Int]]): Long =
        values.toList.flatten.sorted.zipWithIndex
        .map{case (a,i) => a * (i + 1L)}.sum
}


```