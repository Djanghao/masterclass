# Time: O (m x n)

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/5033777/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/5033777/)

---

# Intuition
- Requires every cell address to be constructed from the given co-ordinates.
- Break down the co-ordinates and loop to construct every cell address.

# Approach
Nested loop; one for column and another for rows.

# Complexity
- Time complexity: $$O(r x c)$$

- Space complexity:$$O(r x c)$$ as the list constructed is the product of row and column
- 
# Code
```
object Solution {
    def cellsInRange(s: String): List[String] = 
      assert(s.length == 5)
      val cs = s(0)
      val ce = s(3)
      val rs = s(1)
      val re = s(4)
      (for
        c <- cs to ce
        r <- rs to re
      yield s"$c$r").toList
}
```