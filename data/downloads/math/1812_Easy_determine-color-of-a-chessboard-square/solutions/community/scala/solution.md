# ✅ Scala: col % 2 != row % 2 (beats 100%/100%)

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3459626/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/3459626/)

---

# Complexity
- Time complexity: $$O(1)$$
- Space complexity: $$O(1)$$

# Code
```scala
object Solution {

  def squareIsWhite(coordinates: String): Boolean = {
    val (c, r) = (coordinates.head, coordinates.last)
    c % 2 != r % 2
  }

}
```