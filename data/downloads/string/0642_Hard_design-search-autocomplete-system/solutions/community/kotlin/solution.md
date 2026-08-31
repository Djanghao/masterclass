# Trie Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/5630330/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/5630330/)

---

# Code
```
class AutocompleteSystem(sentences: Array<String>, times: IntArray) {
    private val trie = Trie().also { trie ->
        for ((sentence, number) in (sentences zip times.toList())) {
            trie.insert(sentence, number)
        }
    }

    private var current = StringBuffer()

    fun input(c: Char): List<String> {
        if (c == '#') {
            trie.insert(current.toString())
            current.setLength(0)
            return emptyList()
        }
        current.append(c)
        return trie.startsWith(current.toString())
            ?.dict
            ?.toList()
            ?.sortedWith { p1, p2 -> if (p1.second == p2.second) p1.first compareTo p2.first else p2.second compareTo p1.second }
            ?.map { it.first }?.take(3)
            ?: emptyList()
    }

    class Trie {
        class TrieNode(val parent: TrieNode? = null) {
            private val children = Array<TrieNode?>(ALPHABET_SIZE) { null }

            var isEndOfWord = false

            val dict = HashMap<String, Int>()

            private fun Char.toIndex() = if (this == ' ') ALPHABET_SIZE - 1 else this - 'a'

            fun hasChild(c: Char) = children[c.toIndex()] != null

            fun addChild(c: Char) {
                children[c.toIndex()] = TrieNode(this)
            }

            fun getChild(c: Char) = children[c.toIndex()]

            companion object {
                const val ALPHABET_SIZE = 27
            }
        }

        private val root = TrieNode()

        fun insert(word: String, times: Int = 1) {
            var node: TrieNode? = root
            for (c in word) {
                if (!node!!.hasChild(c)) {
                    node.addChild(c)
                }
                val child = node.getChild(c)!!
                node = child
            }
            node!!.isEndOfWord = true
            while (node != null) {
                node.dict[word] = (node.dict[word] ?: 0) + times
                node = node.parent
            }
        }

        fun startsWith(word: String): TrieNode? {
            var node = root
            for (c in word) {
                if (!node.hasChild(c)) {
                    return null
                }
                node = node.getChild(c)!!
            }
            return node
        }
    }
}
```