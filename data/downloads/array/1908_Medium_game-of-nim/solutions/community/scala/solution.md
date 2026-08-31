# Scala 1-line solution

**Author:** minato_yukina
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3119129/](https://leetcode.com/problems/game-of-nim/solutions/3119129/)

---

# Complexity
- Time complexity: O(N)
- Space complexity: O(1)
# Code
```
object Solution {
    def nimGame(piles: Array[Int]): Boolean = piles.foldLeft(0)(_ ^ _) != 0
}
```