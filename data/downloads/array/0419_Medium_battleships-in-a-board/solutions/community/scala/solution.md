# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/battleships-in-a-board/solutions/5023599/](https://leetcode.com/problems/battleships-in-a-board/solutions/5023599/)

---

```
object Solution {
  def countBattleships(board: Array[Array[Char]]): Int =
    board.indices.map{i => board.head.indices.count{j =>
      board(i)(j) == 'X' &&
      (i==0 || board(i-1)(j) != 'X') &&
      (j==0 || board(i)(j-1) != 'X')
    }}.sum
}
```