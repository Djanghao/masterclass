# [scala] - Trie

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3773506/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3773506/)

---

# Code
```
object Solution {

  private final class Trie {
    private var isTerminal = false
    private val children = scala.collection.mutable.Map.empty[Char, Trie]

    def add(chars: List[Char]): Unit =
      chars match {
        case Nil => isTerminal = true
        case c :: tail => children.getOrElseUpdate(c, new Trie).add(tail)
      }

    def minInclude(chars: List[Char]): Option[Int] =
      chars match {
        case Nil => terminal
        case c :: tail => terminal.orElse(children.get(c).flatMap(_.minInclude(tail)).map(_ + 1))
      }

    private def terminal = if (isTerminal) Some(0) else None
  }

  def longestValidSubstring(word: String, forbidden: List[String]): Int = {
    val trie = new Trie
    forbidden.foreach(string => trie.add(string.toList))
    go(word.toList, trie, 0, 0)
  }

  private def go(word: List[Char], trie: Trie, valid: Int, maxValid: Int): Int =
    word match {
      case Nil => math.max(valid, maxValid)
      case _ :: tail =>
        trie.minInclude(word) match {
          case None => go(tail, trie, valid + 1, maxValid)
          case Some(include) =>
            val mins = word.tails.zipWithIndex.map { case (chars, i) => trie.minInclude(chars).map(_ + i) }
            val min = mins.take(include).toList.flatten.min
            go(tail, trie, 0, math.max(valid + min - 1, maxValid))
        }
    }
}
```