# Trivial 6 liner in Scala!

**Author:** pathikritbhowmick
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-search/solutions/5133996/](https://leetcode.com/problems/word-search/solutions/5133996/)

---

# Code
```
object Solution {
    def exist(board: Array[Array[Char]], word: String): Boolean = {
        def check(cells: Seq[(Int, Int)], visited: Set[(Int, Int)], i: Int): Boolean = (i == word.length) ||          
            cells.filterNot(visited)
                .filter((x, y) => board.isDefinedAt(x) && board(x).isDefinedAt(y) && board(x)(y) == word(i))
                .exists((x, y) => check(Seq((x-1, y), (x+1, y), (x, y-1), (x, y+1)), visited + ((x, y)), i+1))

        check(cells = for {i <- board.indices; j <- board(i).indices} yield (i, j), visited = Set.empty, i = 0)
    }
}
```