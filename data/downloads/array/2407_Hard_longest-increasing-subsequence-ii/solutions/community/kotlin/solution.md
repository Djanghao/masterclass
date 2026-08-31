# [Kotlin] Segment Tree

**Author:** Roka
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2563020/](https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/2563020/)

---

```kotlin
import kotlin.math.max
import kotlin.math.min

class Solution {
    companion object {
        const val MAX_VALUE = 100010
    }

    fun lengthOfLIS(nums: IntArray, k: Int): Int {
        val tree = Tree(MAX_VALUE)
        var answer = 0

        nums.forEach { cur ->
            val prev = max(0, cur - k)
            val bestAnswer = tree.get(prev, cur - 1) + 1
            val prevAnswer = tree.get(cur, cur)
            val result = max(bestAnswer, prevAnswer)
            
            tree.set(cur, result)
            answer = max(answer, result)
        }

        return answer
    }
}

class Tree(private val size: Int) {
    private val root: Node

    init {
        this.root = build(0, size)
    }

    fun get(from: Int, to: Int): Int {
        return get(this.root, 0, this.size, from, to)
    }

    private fun get(node: Node, left: Int, right: Int, from: Int, to: Int): Int {
        if (to < from) {
            return 0
        }

        if (from <= left && right <= to) {
            return node.value
        }

        val mid = (left + right) / 2
        return max(
            get(node.left!!, left, mid, from, min(mid, to)),
            get(node.right!!, mid + 1, right, max(mid + 1, from), to)
        )
    }

    fun set(idx: Int, value: Int) {
        set(this.root, 0, this.size, idx, value)
    }

    private fun set(node: Node, left: Int, right: Int, idx: Int, value: Int) {
        if (left > idx || right < idx) {
            return
        }

        if (left == right) {
            node.value = value
        } else {
            val mid = (left + right) / 2
            set(node.left!!, left, mid, idx, value)
            set(node.right!!, mid + 1, right, idx, value)

            node.value = max(node.left!!.value, node.right!!.value)
        }
    }

    private fun build(from: Int, to: Int): Node {
        return if (from == to) {
            Node(0)
        } else if (from > to) {
            throw IllegalArgumentException("Unexpected range $from..$to")
        } else {
            val mid = (from + to) / 2
            val left = build(from, mid)
            val right = build(mid + 1, to)

            Node(left, right)
        }
    }
}

data class Node(var value: Int) {
    var left: Node? = null
    var right: Node? = null

    constructor(left: Node, right: Node) : this(max(left.value, right.value)) {
        this.left = left
        this.right = right
    }
}
```