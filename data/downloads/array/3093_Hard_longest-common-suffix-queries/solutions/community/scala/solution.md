# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-suffix-queries/solutions/4970335/](https://leetcode.com/problems/longest-common-suffix-queries/solutions/4970335/)

---

```scala
object Solution {
  def stringIndices(wordsContainer: Array[String], wordsQuery: Array[String]): Array[Int] = {
    val trie = new Trie()
    wordsContainer.zipWithIndex.foreach { case (word, index) => trie.add(word, index) }
    wordsQuery.map(trie.find)
  }

  private class Trie {
    private val chars: Array[Trie] = Array.fill(26)(null)
    private var bestLen: Int = Int.MaxValue
    private var bestIndex: Int = Int.MaxValue

    def add(word: String, index: Int): Unit = {
      var trie = this
      val len = word.length
      if (len < trie.bestLen || (len == trie.bestLen && index < trie.bestIndex)) {
        trie.bestLen = len
        trie.bestIndex = index
      }
      var i = len - 1
      while (i >= 0) {
        val charIndex = word(i) - 'a'
        if (trie.chars(charIndex) == null) trie.chars(charIndex) = new Trie()
        trie = trie.chars(charIndex)
        if (len < trie.bestLen || (len == trie.bestLen && index < trie.bestIndex)) {
          trie.bestLen = len
          trie.bestIndex = index
        }
        i -= 1
      }
    }

    def find(word: String): Int = {
      var trie = this
      val len = word.length
      var i = len - 1
      while (i >= 0) {
        val charIndex = word(i) - 'a'
        if (trie.chars(charIndex) == null) i = -1
        else trie = trie.chars(charIndex)
        i -= 1
      }
      trie.bestIndex
    }
  }
}
```