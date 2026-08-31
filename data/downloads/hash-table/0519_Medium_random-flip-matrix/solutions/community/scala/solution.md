# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-flip-matrix/solutions/5979310/](https://leetcode.com/problems/random-flip-matrix/solutions/5979310/)

---

[Fisher\u2013Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
```scala []
class Solution(_m: Int, _n: Int) {
  val aMap = collection.mutable.Map.empty[Int,Int]
  val mn = _m*_n; var sz = mn
  def flip(): Array[Int] = {
    val nxtRndD = util.Random.nextDouble().abs
    val nxtRnd = ((util.Random.nextDouble().abs) * (sz)).toInt
    sz -= 1
    val nxt = aMap.getOrElse(nxtRnd,nxtRnd)
    aMap(nxtRnd) = aMap.getOrElse(sz,sz)
    aMap -= sz
    Array(nxt / _n, nxt % _n)
  }
  def reset(): Unit = {aMap.clear(); sz = mn}
}

/**
 * Your Solution object will be instantiated and called as such:
 * val obj = new Solution(m, n)
 * val param_1 = obj.flip()
 * obj.reset()
 */
```