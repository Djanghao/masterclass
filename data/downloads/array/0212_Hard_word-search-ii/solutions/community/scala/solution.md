# Scala solution with Trie in 36 lines

**Author:** romanovsky
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-search-ii/solutions/2119615/](https://leetcode.com/problems/word-search-ii/solutions/2119615/)

---

```
object Solution {
  class Trie() {
    val children = collection.mutable.Map.empty[Char, Trie]
    var isTerminal = false
    def insert(word: String) = word.foldLeft(this) { case (t, c) => t.children.getOrElseUpdate(c, new Trie()) }.isTerminal = true
    def child(prefix: Char): Option[Trie] = if (children.contains(prefix)) Some(children(prefix)) else None
  }

  def findWords(board: Array[Array[Char]], words: Array[String]): List[String] = {
    val trie = new Trie()
    words.map(trie.insert(_))
    def go(i: Int, j: Int, candidate: Trie, candidatePrefix: String): Seq[String] = {
      if (i >= 0 && i < board.length && j >= 0 && j < board(0).length && board(i)(j) != '#') {
        val char = board(i)(j)
        board(i)(j) = '#'
        val newPrefix = candidatePrefix :+ char
        val found = candidate.child(char).fold(Seq.empty[String]) { next =>
          (if ( next.isTerminal ) Seq(newPrefix) else Seq.empty) ++
          go(i+1, j, next, newPrefix) ++
          go(i-1, j, next, newPrefix) ++
          go(i, j+1, next, newPrefix) ++
          go(i, j-1, next, newPrefix) }
        board(i)(j) = char
        found
      } else {
        Seq.empty[String]
      }
    }

    val result = scala.collection.mutable.Map(words.map(_->false): _*)
    for ( i <- 0 to board.length - 1; j <- 0 to board(0).length-1 ) {
      go(i, j, trie, "").map(word => result(word) = true)
    }
    result.filter( _._2 == true).keys.toList
  }
}
```