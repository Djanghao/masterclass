# Easy Scala Code

**Author:** suwarnashukla6
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5833324/](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/solutions/5833324/)

---



# Code
```scala []
class TrieNode {
  // Each node has 26 children for 'a' to 'z' and a count to store the prefix count.
  val child: Array[TrieNode] = Array.fill(26)(null) // An array of TrieNode to store the children
  var prefixCount: Int = 0
}

class Trie {
  val root: TrieNode = new TrieNode()

  // Insert a word into the Trie
  def insert(word: String): Unit = {
    var node = root
    for (ch <- word) {
      val ind = ch - 'a'
      if (node.child(ind) == null) {
        node.child(ind) = new TrieNode() // Corrected to assign TrieNode instead of String
      }
      node = node.child(ind)
      // Increment prefixCount at each node as we go deeper into the Trie
      node.prefixCount += 1
    }
  }

  // Function to get the sum of prefix scores for a word
  def getPrefixScore(word: String): Int = {
    var node = root
    var score = 0
    for (ch <- word) {
      val ind = ch - 'a'
      node = node.child(ind)
      // Add the prefixCount at each node to the total score
      score += node.prefixCount
    }
    score
  }
}

object Solution {
  def sumPrefixScores(words: Array[String]): Array[Int] = {
    val trie = new Trie()

    // First, insert all the words into the Trie
    for (word <- words) {
      trie.insert(word)
    }

    // Now, calculate the sum of prefix scores for each word
    val result = new Array[Int](words.length)
    for (i <- words.indices) {
      result(i) = trie.getPrefixScore(words(i))
    }

    result
  }
}

```