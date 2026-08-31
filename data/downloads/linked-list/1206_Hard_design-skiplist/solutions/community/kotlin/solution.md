# Clean Kotlin Solution

**Author:** user2279G
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-skiplist/solutions/3458725/](https://leetcode.com/problems/design-skiplist/solutions/3458725/)

---

# Code
```
import kotlin.math.ln
import kotlin.random.Random

class Skiplist {

    private data class Node(val value: Int, val next: MutableList<Node> = mutableListOf()) {
        private fun <T> MutableList<T>.insertOrAdd(item: T, index: Int): T? {
            return if (this.lastIndex < index) {
                this.add(item)
                null
            } else {
                val old = this[index]
                this[index] = item
                old
            }
        }

        val levelsDescending get() = next.lastIndex downTo 0

        fun insert(other: Node, level: Int) {
            val forward = next.insertOrAdd(other, level)
            if (forward != null && forward !== other) {
                other.insert(forward, level)
            }
        }

        fun delete(level: Int) {
            val node = this.next.removeAt(level)
            if (node.next.lastIndex >= level) {
                next.insertOrAdd(node.next[level], level)
            }
        }

        fun canFastForward(value: Int, level: Int): Boolean {
            return next.lastIndex >= level && value > next[level].value
        }

        inline fun forEachLevel(consumer: (Int) -> Unit) {
            for (level in levelsDescending) {
                consumer(level)
            }
        }

        fun hasNext(value: Int, level: Int): Boolean {
            return next.lastIndex >= level && value == next[level].value
        }
    }

    private val head: Node = Node(0)
    private val randomFactor = 0.5

    private var size = 0

    fun add(num: Int) {
        val nodesToUpdate = mutableMapOf<Int, Node>()
        val newNode = Node(num)

        var node = head
        head.forEachLevel { i ->
            while (node.canFastForward(num, i)) {
                node = node.next[i]
            }
            nodesToUpdate[i] = node
        }


        val nodeLevel = randomLevel()
        for (i in 0..nodeLevel) {
            val nodeToUpdate = nodesToUpdate.getOrDefault(i, head)
            nodeToUpdate.insert(newNode, i)
        }
        size++
    }

    fun erase(num: Int): Boolean {
        val nodesToUpdate = mutableMapOf<Int, Node>()
        var node = head
        var found = false

        head.forEachLevel { level ->
            while (node.canFastForward(num, level)) {
                node = node.next[level]
            }
            if (node.hasNext(num, level)) {
                nodesToUpdate[level] = node
                found = true
                return@forEachLevel
            }
        }

        if (!found) {
            return false
        }

        nodesToUpdate.forEach { (level, nodeToUpdate) -> nodeToUpdate.delete(level) }
        size--

        return true
    }

    fun search(target: Int): Boolean {
        var node = head

        head.forEachLevel { level ->
            while (node.canFastForward(target, level)) {
                node = node.next[level]
            }
            if (node.hasNext(target, level)) {
                return true
            }
        }

        return false
    }

    private fun randomLevel(): Int {
        var level = 0
        val maxLevel = maxLevel()
        while (Math.random() > randomFactor && level < maxLevel) {
            level++
        }
        return level
    }

    private fun maxLevel(): Int {
        return (ln(size.toDouble()) / ln(1 / randomFactor)).toInt()
    }


    // TEST FUNCTION
    fun draw(): String {
        val builder = StringBuilder()
        for (i in head.next.indices.reversed()) {
            var node: Node? = head.next.getOrNull(i)
            builder.append("Lane $i: ")

            while (node != null) {
                builder.append("${node.value} -> ")
                node = node.next.getOrNull(i)
            }
            builder.delete(builder.length - 3, builder.length)
            builder.append("\
")
        }
        return builder.toString()
    }
}
```