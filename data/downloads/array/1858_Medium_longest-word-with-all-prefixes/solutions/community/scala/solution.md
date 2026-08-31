# Scala Trie solution

**Author:** adorable_http
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2905818/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/2905818/)

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
object Solution {
  def longestWord(words: Array[String]): String = {
    class TrieNode {
      val children = new Array[TrieNode](26)
      var word = ""
    }

    val trie = new TrieNode

    def constructTrie(words: Array[String]): Unit = {
      for (word <- words) {
        var node = trie
        for (c <- word) {
          if (node.children(c - 'a') == null) node.children(c - 'a') = new TrieNode
          node = node.children(c - 'a')
        }
        node.word = word
      }
    }

    constructTrie(words)

    def findWord(word: String): String = {
      var node = trie
      for (c <- word) {
        if (node.children(c - 'a') != null && node.children(c - 'a').word.nonEmpty) node = node.children(c - 'a')
      }
      node.word
    }

    words.foldLeft("")((acc, word) => {
      val w = findWord(word)
      if (w.nonEmpty && w.length == acc.length) {
        List(w, acc).min
      } else if(w.nonEmpty && w.length > acc.length) w else acc
    })
  }
}
```