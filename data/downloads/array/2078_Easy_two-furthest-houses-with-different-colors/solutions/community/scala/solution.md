# scala solution.

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2025709/](https://leetcode.com/problems/two-furthest-houses-with-different-colors/solutions/2025709/)

---

```
def maxDistance(colors: Array[Int]): Int = {
    (for{
      i <- 0 until colors.length
      j <- (i + 1) until colors.length
      if(colors(j) != colors(i))
    }yield j - i).max
  }
```