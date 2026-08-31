# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2229548/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/2229548/)

---

```

  def help(i: Int, j: Int, arr: Array[Int],mem: Array[Array[Int]]): Int = {
    if(i >= j) return 0
    if(mem(i)(j) != 0) return mem(i)(j)
    (i to j - 1).foldLeft(Integer.MAX_VALUE)((ans, k)=>{
      val t = ans min help(i, k, arr, mem) + help(k + 1, j, arr, mem) + arr(i - 1) * arr(k) * arr(j)
      mem(i)(j) = t
      t
    })
  }

  def minScoreTriangulation(values: Array[Int]): Int = {
    val mem = Array.ofDim[Int](values.length, values.length)
    help(1, values.length - 1, values, mem)
  }
```