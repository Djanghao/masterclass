# Scala Trie O(n * k) with k being the longest dictionary word

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-bold-tag-in-string/solutions/4859026/](https://leetcode.com/problems/add-bold-tag-in-string/solutions/4859026/)

---

# Intuition
A naive solution would be to iterate through the string, trying to match every word in the dictionary. Then storing somewhere all the matched characters and output the bold tags around matched regions.
The complexity can be reduced by using a Trie.

# Approach
1. build a trie
2. iterate through the string, extending the matched range by searching in the trie for each character in the current range
3. output a bold block with the last range and reiterate

# Complexity
- Time complexity:
$$O(n * k)$$
where $$n$$ is the string length and $$k$$ is the longest dictionary word

- Space complexity:
$$O(m)$$ m is the total number of characters in the dictionary

# Code
```
object Solution {
  import collection.mutable
  case class TrieNode(var isWord: Boolean = false, var children: mutable.Map[Char, TrieNode] = mutable.Map.empty)
  def addBoldTag(s: String, words: Array[String]): String = {
    val n = s.length
    val root = TrieNode()
    words.foreach { word =>
      var node = root
      word.foreach { c =>
        node = node.children.getOrElseUpdate(c, TrieNode())
      }
      node.isWord = true
    }
    def dfs(i: Int, node: TrieNode = root): Option[Int] = {
      if (node.isWord) {
        if (i == n) Some(i)
        else node.children.get(s(i))
          .flatMap(dfs(i + 1, _))
          .map(_.max(i))
          .orElse(Some(i))
      } else if (i >= n) None
      else {
        val char = s(i)
        node.children.get(char).flatMap(dfs(i + 1, _))
      }
    }
    var left = 0
    var right = 0
    val result = new mutable.StringBuilder()
    while (left < n) {
      right = dfs(left).getOrElse(left)
      if (right == left) {
        result.append(s(left))
        left += 1
      } else {
        var scan = left + 1
        while (scan <= right && right < n) {
          right = dfs(scan).map(_.max(right)).getOrElse(right)
          scan += 1
        }
        result.append(s"<b>${s.slice(left, right)}</b>")
        left = right
      }
    }
    result.toString
  }
}
```