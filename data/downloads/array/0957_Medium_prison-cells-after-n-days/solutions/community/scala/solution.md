# Scala for Approach 2: Simulation with Bitmap

**Author:** shipengcheng1230
**Votes:** 0
**Link:** [https://leetcode.com/problems/prison-cells-after-n-days/solutions/776411/](https://leetcode.com/problems/prison-cells-after-n-days/solutions/776411/)

---

```scala
object Solution {
  import scala.collection.mutable
  import scala.annotation.tailrec
  
  def nextDay(bit: Int): Int = {
    (~ (bit << 1) ^ (bit >> 1)) & 0x7e // 0x7e == 126 == [01111110]
  }
  
  def prisonAfterNDays(cells: Array[Int], N: Int): Array[Int] = {
    val seen = mutable.Map.empty[Int, Int]

    @tailrec
    def simulate(curr: Int, n: Int, leap: Boolean): Int = {
      if (n == N) return curr
      if (leap) simulate(nextDay(curr), n + 1, true)
      else {
        if (seen.contains(curr)) simulate(curr, N - (N - seen(curr)) % (n - seen(curr)), true)
        else {
          seen.update(curr, n)
          simulate(nextDay(curr), n + 1, false)
        }
      }
    }
    
    val state = cells.foldLeft(0x0)((acc, x) => (acc << 1) | x)
    val ret = simulate(state, 0, false)
    ("0000000" + ret.toBinaryString).toArray.map(_.toInt - 48).takeRight(8)
  }
}
```