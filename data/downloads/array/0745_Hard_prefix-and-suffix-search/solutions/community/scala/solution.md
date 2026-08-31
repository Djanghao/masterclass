# Two tries

**Author:** muqeetamalik
**Votes:** 0
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/5223317/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/5223317/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class WordFilter(_words: Array[String]) {
  val prefixTrie = new Trie()
  val suffixTrie = new Trie()

  _words.zipWithIndex.groupMapReduce(_._1)(_._2)((a, b) => math.max(a, b)).foreach { case (w, i) =>
    prefixTrie.insertWithIndex(w, i)
    suffixTrie.insertWithIndex(w.reverse, i)
  }

  def f(pref: String, suff: String): Int = (for {
    prefixTrie <- prefixTrie.startsWith(pref)
    suffixTrie <- suffixTrie.startsWith(suff.reverse)
    max <- prefixTrie.indicies.intersect(suffixTrie.indicies).maxOption
  } yield max).getOrElse(-1)
}

import scala.collection.mutable.Map
import scala.collection.mutable.SortedSet

class Trie() {

  val children = Map.empty[Char, Trie]
  val indicies = SortedSet[Int]()

  def insertWithIndex(word: String, index: Int): Unit = word.foldLeft(this) {
    case (trie, char) =>
      val nextTrie = trie.children.getOrElseUpdate(char, new Trie())
      nextTrie.indicies.add(index)
      nextTrie
  }

  def startsWith(prefix: String): Option[Trie] = prefix.foldLeft(Option(this)) {
    case (trie, char) =>
      trie.flatMap(t => t.children.get(char))
  }
}

```