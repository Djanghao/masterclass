# Scala FP: hardcode checks

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5616621/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5616621/)

---

# Code
```
object Solution {
  val magicSet = Set.range(1, 10)

  def numMagicSquaresInside(grid: Array[Array[Int]]): Int = {
    def isMagic(r: Int, c: Int): Boolean =
      grid(r + 1)(c + 1) == 5 && 
        grid(r + 0)(c + 0) + grid(r + 2)(c + 2) == 10 && grid(r + 2)(c + 0) + grid(r + 0)(c + 2) == 10 && 
        grid(r + 0)(c + 1) + grid(r + 2)(c + 1) == 10 && grid(r + 1)(c + 0) + grid(r + 1)(c + 2) == 10 &&
        grid(r + 0)(c + 0) + grid(r + 0)(c + 1) + grid(r + 0)(c + 2) == 15 &&
        grid(r + 2)(c + 0) + grid(r + 2)(c + 1) + grid(r + 2)(c + 2) == 15 &&
        grid(r + 0)(c + 0) + grid(r + 1)(c + 0) + grid(r + 2)(c + 0) == 15 &&
        grid(r + 0)(c + 2) + grid(r + 1)(c + 2) + grid(r + 2)(c + 2) == 15 &&
        Set(grid(r + 0)(c + 0), grid(r + 0)(c + 1), grid(r + 0)(c + 2),
          grid(r + 1)(c + 0), grid(r + 1)(c + 1), grid(r + 1)(c + 2),
          grid(r + 2)(c + 0), grid(r + 2)(c + 1), grid(r + 2)(c + 2)) == magicSet

    (0 until grid.length - 2).foldLeft(0)((total, i) => total + (0 until grid.head.length - 2).count(isMagic(i, _)))
  }
}
```