# Scala - trie, backtracking, purposeful traversal

**Author:** zelentsov
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-squares/solutions/5830135/](https://leetcode.com/problems/word-squares/solutions/5830135/)

---



# Code
```scala []

import scala.collection.mutable

object Solution {
  class Node() {
    val children = mutable.HashMap.empty[Char, Node]
  }

  def wordSquares(words: Array[String]): List[List[String]] = {
    val trie = Node()
    words.foreach: w =>
      var n = trie
      w.foreach: c =>
        n = n.children.getOrElseUpdate(c, Node())

    val m = words.head.length
    val res = mutable.ListBuffer.empty[List[String]]
    val square = Array.fill(m)(new StringBuilder())
    val tails = Array.fill(m)(trie)

    def backtrack(i: Int): Unit = {
      if i == m then
        res.append(square.map(_.toString).toList)
      else
        val j = square(i).length
        val (n, nn) = (tails(i), tails(j))
        for
          (c, child) <- n.children
          if nn.children.contains(c)
        do {
          tails(i) = child
          square(i).append(c)
          if i != j then
            tails(j) = nn.children(c)
            square(j).append(c)
          if j < m - 1 then backtrack(i)
          else backtrack(i + 1)
          if i != j then
            square(j).deleteCharAt(i)
            tails(j) = nn
          square(i).deleteCharAt(j)
          tails(i) = n
        }
    }

    backtrack(0)
    res.toList
  }
}
```