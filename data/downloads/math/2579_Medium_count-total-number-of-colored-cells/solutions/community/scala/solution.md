# [scala] - tail recursive

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256234/](https://leetcode.com/problems/count-total-number-of-colored-cells/solutions/3256234/)

---

# Code
```
object Solution {
    
  def coloredCells(n: Int): Long =
    go(0, n, 1)

  def go(partial: Int, steps: Int, acc: Long): Long =
    if (steps <= 1) acc
    else go(partial + 4, steps - 1, acc + partial + 4)
}
```