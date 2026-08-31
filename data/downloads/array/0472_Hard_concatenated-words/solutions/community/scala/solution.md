# Scala cached Trie

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/4766920/](https://leetcode.com/problems/concatenated-words/solutions/4766920/)

---

# Intuition
Using a trie the problem reduces to filtering all of those words that match 2 or more words by traversing the trie and forking with a restart from the root when a complete word is encountered

# Approach
1. Build a trie
2. cache results by word, position in the word and trie node identifier
3. if the current trie node marks a word, try recursively restarting the match from root
4. also try continuing matching the current word in the trie
5. return the number of matches encountered
6. filter all words by calling the recursive match above

# Complexity
- Time complexity:
$$O(m * m)$$ where m is the total number of characters across all words

- Space complexity:
$$O(m)$$ 

# Code
```
object Solution {
  import collection.mutable
  private var nodeId = 0
  case class TrieNode(var isWord: Boolean = false, children: mutable.Map[Char, TrieNode] = mutable.Map.empty) {
    val id = nodeId
    nodeId += 1
  }
  def findAllConcatenatedWordsInADict(words: Array[String]): List[String] = {
    val root = TrieNode()
    words.foreach { word =>
      var node = root
      word.foreach { char =>
        node = node.children.getOrElseUpdate(char, TrieNode())
      } 
      node.isWord = true
    }
    val cache = mutable.Map.empty[(String, Int, Int), Int]
    def isConcatenation(word: String, i: Int, node: TrieNode = root): Int = cache.getOrElseUpdate((word, i, node.id), {
      var restarting = (if (node.id == root.id || !node.isWord) 0 else isConcatenation(word, i, root))
      val continuing = (
        if (i == word.length - 1) {
          if (node.children.get(word(i)).exists(_.isWord)) 1 else 0
        } else {
          node.children.get(word(i)).map(isConcatenation(word, i + 1, _)).getOrElse(0)
        })
      if (restarting > 0 && node.isWord) restarting += 1
      restarting.max(continuing)
    })
    words.toList.filter(isConcatenation(_, 0) > 1)
  }
}
```