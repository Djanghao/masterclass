# Kotlin Trie DFS

**Author:** jschnall
**Votes:** 0
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/4154758/](https://leetcode.com/problems/short-encoding-of-words/solutions/4154758/)

---

```
class Solution {
    data class TrieNode(val str: String, val children: MutableMap<Char, TrieNode> = mutableMapOf())

    fun minimumLengthEncoding(words: Array<String>): Int {
        var count = 0
        val root = buildTrie(words)
        val stack = Stack<TrieNode>()
        stack.push(root)

        while (!stack.isEmpty()) {
            val node = stack.pop()

            if (node.children.isEmpty()) {
                count += node.str.length + 1
            } else {
                node.children.values.forEach { child ->
                    stack.push(child)
                }
            }
        }

        return count
    }

    fun buildTrie(words: Array<String>): TrieNode {
        val root = TrieNode("")

        words.forEach { word ->
            insert(word, root)
        }

        return root
    }

    // Inserts a word into the trie, back to front
    fun insert(word: String, root: TrieNode)  {
        var ptr = root

        for (i in word.length - 1 downTo 0) {
            val c = word[i]
            ptr = ptr.children.getOrPut(c) { TrieNode("$c${ptr.str}") }
        }
    }
}
```