# Kotlin. Beats 100% (126 ms). DFS + PrefixTree.

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/word-break-ii/solutions/5207157/](https://leetcode.com/problems/word-break-ii/solutions/5207157/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun wordBreak(s: String, wordDict: List<String>): List<String> {
        root.clear()
        for (w in wordDict) {
            addWord(w)
        }
        stack.clear()
        for (i in s.length - 1 downTo 0) {
            stack.push(s[i] - 'a')
        }
        result.clear()
        dfs(root)
        return result
    }

    fun addWord(word: String) {
        var node = root
        for (c in word) {
            node = node.add(c)
        }
        node.endOfWord = true
    }

    private fun dfs(node: PrefixTreeNode) {
        if (stack.isNotEmpty()) {
            val i = stack.pop()
            val child = node.children[i]
            if (child != null) {
                builder[builderLength] = child.char
                builderLength++
                if (child.endOfWord) {
                    when {
                        stack.isEmpty() -> result.add(String(builder, 0, builderLength))
                        builder.isNotEmpty() -> {
                            builder[builderLength] = ' '
                            builderLength++
                            dfs(root)
                            builderLength--
                        }
                        else -> dfs(root)
                    }
                }
                dfs(child)
                builderLength--
            }
            stack.push(i)
        }
    }

    companion object {
        var stack = Stack<Int>()
        val builder = CharArray(64)
        var builderLength = 0
        val result = ArrayList<String>()
        val root = PrefixTreeNode('#')
    }

    class PrefixTreeNode(val char: Char) {
        val children = Array<PrefixTreeNode?>(26) { null }
        var endOfWord = false

        fun add(char: Char): PrefixTreeNode {
            val old = children[char - 'a']
            return when {
                old != null -> old
                else -> PrefixTreeNode(char).also {
                    children[char - 'a'] = it
                }
            }
        }

        fun clear() {
            for (i in 0 until 26) {
                children[i] = null
            }
        }

        override fun toString(): String = "[$char]"
    }
}
```