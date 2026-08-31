# Fast Kotlin solution

**Author:** antohaby
**Votes:** 0
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/6127127/](https://leetcode.com/problems/stream-of-characters/solutions/6127127/)

---


# Code
```kotlin []
const val nodesSize = 'z' - 'a' + 1
inline fun Char.indexOf() = 'z' - this

class StreamChecker(words: Array<String>) {
    class Node() {        
        val children = Array<Node?>(nodesSize) { null }
        var isWord = false

        fun next(char: Char): Node? = children[char.indexOf()]        
    }

    tailrec fun learnWord(word: String, index: Int, node: Node) {
        if (index >= word.length) {
            node.isWord = true
            return
        }
        val ch = word[index].indexOf()
        var nextNode = node.children[ch]

        if (nextNode == null) {
            nextNode = Node()
            node.children[ch] = nextNode
        }

        learnWord(word, index + 1, nextNode)
    }    

    val root = Node()

    // Learn
    init {
        for (word in words.distinct()) {
            learnWord(word, 0, root)
        }
    }

    var pool = mutableListOf<Node>(root)

    fun query(letter: Char): Boolean {
        val newPool = mutableListOf<Node>(root)
        var isAWord = false
        for (node in pool) {
            val newNode = node.next(letter)
            if (newNode != null) {
                newPool.add(newNode)
                isAWord = isAWord || newNode.isWord
            }
        }
        pool = newPool

        return isAWord     
    }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
```