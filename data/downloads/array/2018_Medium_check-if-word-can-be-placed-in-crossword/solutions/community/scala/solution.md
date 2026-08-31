# [Scala] Functional solution heavily relying on exists

**Author:** cosminci
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1487904/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/1487904/)

---

Scala adaptation of [this really awesome Python solution](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/discuss/1486285/Python-3-working-with-strings).

```
  def placeWordInCrossword(board: Array[Array[Char]], word: String): Boolean = {
    val (m, n) = (board.length, board.head.length)
    val transposedBoard = (0 until n).map(c => board.map(_(c))).toArray

    Seq(board, transposedBoard).exists { b =>
      Seq(word, word.reverse).exists { w =>
        b.exists { row =>
          row.mkString.split('#').exists { slot =>
            slot.length == w.length && 
              slot.indices.forall(i => slot(i) == ' ' || slot(i) == w(i))
          }
        }
      }
    }
  }
```