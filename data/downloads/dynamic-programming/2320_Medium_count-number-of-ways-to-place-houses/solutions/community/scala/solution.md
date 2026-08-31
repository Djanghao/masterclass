# [scala] recursive

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2205968/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2205968/)

---

```scala
private def modulo(i: Long) = i % 1000000007

def countHousePlacements(n: Int): Int = {
  def go(prev: Long, curr: Long, k: Int): Long =
    if(k == n) curr else go(curr, modulo(prev + curr), k + 1)

  val v = go(1, 2, 1)
  modulo(v * v).toInt
}
```