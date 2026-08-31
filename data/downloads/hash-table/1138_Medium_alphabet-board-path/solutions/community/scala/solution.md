# [Scala] Concise functional solution using foldLeft

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/alphabet-board-path/solutions/1479654/](https://leetcode.com/problems/alphabet-board-path/solutions/1479654/)

---

Two small tricks:

1. `if (x2 == 5) s"$yPath$xPath" else s"$xPath$yPath"`: when we need to go to `z`, move horizontally before moving vertically. Otherwise, always move vertically and then horizontally.

2. `val (x2, y2) = (char - 'a') /% 5`: the quotient and remainder of the divmod operation between the target character offset and the board width is the destination `(x, y)` coordinate tuple. 
In order to use `/%` the following import is needed: `import scala.math.Integral.Implicits._`. 
This is just syntactic sugar for `val (x2, y2) = ((char - 'a') / 5, (char - 'a') % 5)` if you want to avoid the import.

```
  def alphabetBoardPath(target: String): String =
    target.foldLeft("", 0, 0) { case ((path, x1, y1), char) =>
      val (x2, y2) = (char - 'a') /% 5
      val xMove    = if (x1 < x2) "D" * (x2 - x1) else "U" * (x1 - x2)
      val yMove    = if (y1 < y2) "R" * (y2 - y1) else "L" * (y1 - y2)
      val newMove  = if (x2 == 5) s"$yMove$xMove" else s"$xMove$yMove"
      (s"$path$newMove!", x2, y2)
    }._1
```