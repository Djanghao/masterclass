# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/seat-reservation-manager/solutions/4255442/](https://leetcode.com/problems/seat-reservation-manager/solutions/4255442/)

---

# Complexity
- Time complexity:
  - `init`: $$O(n)$$
  - `reserve`: $$O(log(n))$$
  - `unreserve`: $$O(log(n))$$
- Space complexity: $$O(n)$$

# Code
```
class SeatManager(n: Int) {

    private val seats = Array(n) { Node(1, it) }
    private val root: Node = createTree(seats)

    private data class Node(
        var available: Int,
        val number: Int? = null,
        val left: Node? = null,
        val right: Node? = null,
        var parent: Node? = null,
    )

    private fun createTree(seats: Array<Node>): Node {
        val q = ArrayDeque(seats.asList())

        while (q.size > 1) {
            val odd = q.size % 2 == 1

            repeat(q.size / 2) {
                val left = q.removeFirst()
                val right = q.removeFirst()

                val parent = Node(left.available + right.available, null, left, right)
                left.parent = parent
                right.parent = parent

                q.addLast(parent)
            }

            if (odd) {
                q.addLast(q.removeFirst())
            }
        }

        return q.single()
    }

    fun reserve(): Int = reserve(root) + 1

    private fun reserve(v: Node): Int {
        v.available--

        return when {
            v.number != null -> v.number
            v.left!!.available > 0 -> reserve(v.left)
            else -> reserve(v.right!!)
        }
    }

    fun unreserve(seatNumber: Int) {
        var v: Node? = seats[seatNumber - 1]

        while (v != null) {
            v.available++
            v = v.parent
        }
    }
}
```