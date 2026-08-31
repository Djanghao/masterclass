# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/3747096/](https://leetcode.com/problems/stream-of-characters/solutions/3747096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n * m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n * m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
    class StreamChecker(_words: Array[String]) {
      case class TrieNode() {
        val children = scala.collection.mutable.Map[Char, TrieNode]()
        var isWord = false
      }

      case class Trie() {
        val root = TrieNode()

        def insert(word: String) = {
          var node = root
          for (char <- word) {
            if (!node.children.contains(char)) node.children(char) = new TrieNode()
            node = node.children(char)
          }
          node.isWord = true
        }
      }

      val trie = Trie()
      val queryList = scala.collection.mutable.ListBuffer[Char]()

      for (word <- _words) trie.insert(word.reverse)

      def query(letter: Char): Boolean = {
        queryList.prepend(letter)
        var node = trie.root
        var foundWord = false
        for (char <- queryList if !foundWord)
          if (node.isWord) foundWord = true
          else if (!node.children.contains(char)) return false
          else node = node.children(char)
        node.isWord || foundWord
      }
    }

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
```