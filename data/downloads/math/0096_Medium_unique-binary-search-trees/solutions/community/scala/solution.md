# Scala: 3 lines recursion with memoization

**Author:** SerhiyShaman
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees/solutions/4878909/](https://leetcode.com/problems/unique-binary-search-trees/solutions/4878909/)

---

# Code
```
object Solution {
  def numTrees(n: Int)(implicit mem: Array[Int] = new Array(20)): Int =
    if (n <= 2) n
    else {
      if (mem(n) == 0) mem(n) = (2 to n - 1).foldLeft(2 * numTrees(n - 1))((sum, i) => sum + numTrees(i - 1) * numTrees(n - i))
      mem(n)
    }  
}
```