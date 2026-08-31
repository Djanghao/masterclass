# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5150648/](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/solutions/5150648/)

---

```scala
  def findPermutation(a: Array[Int]): Array[Int] = {
    val n = a.length
    val memo = Array.fill(1 << n, n)(-1)
    val res = Array.fill(n)(0)
    f(1, 0, a, memo, res, 0)
    res
  }

  private def dfs(s: Int, j: Int, arr: Array[Int], memo: Array[Array[Int]]): Int = {
    if (s == (1 << arr.length) - 1) return (j - arr.head).abs
    if (memo(s)(j) != -1) return memo(s)(j)
    var res = Int.MaxValue
    arr.indices.drop(1).foreach(k => if ((s >> k & 1) == 0) res = res.min(dfs(s | 1 << k, k, arr, memo) + (j - arr(k)).abs))
    memo(s)(j) = res
    res
  }

  private def f(s: Int, j: Int, a: Array[Int], memo: Array[Array[Int]], res: Array[Int], i: Int): Unit = {
    res(i) = j
    if (s == (1 << a.length) - 1) return
    val finalRes = dfs(s, j, a, memo)
    var found = false
    a.indices.drop(1).foreach(k => if (!found && (s >> k & 1) == 0 && dfs(s | 1 << k, k, a, memo) + (j - a(k)).abs == finalRes) {
      f(s | 1 << k, k, a, memo, res, i + 1)
      found = true
    })
  }
```