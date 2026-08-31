# Kotlin, simple and short solution with two priority queues, 390 ms

**Author:** user7581dN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/6062465/](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons/solutions/6062465/)

---

# Intuition
Let's simulate the process.
At each 1-unit movement, the area under all pistons is increased by the number of pistons going up and decreased by the number of pistons going down. While no pistons reach top or bottom, the area changes monotonically, therefore we don't need to simulate every single step. Instead, we can only track the points when any piston changes its direction.
We will track the sum in all such points - that is, two points for each piston (reaching top and bottom) - and choose the maximum.

# Approach
We'll maintain two priority queues: min queue for pistons going down and max queue for pistons going up.
On each iteration, take the top value from either of the queues which is closer to its destination (`0` for min queue and `height` for max queue). Calculate its distance to destination, and the difference of this distance from the previous top value's distance - that is the number of units that all pistons moved by from the previous iteration. Update the area according to this difference, and update max area if needed.

The piston just taken from one of the queues needs to be added to the other queue, to represent the number of units it has to move to reach the opposite destination.

# Complexity
- Time complexity:
$$O(n\\log n)$$
Building the initial queues takes $$O(n\\log n)$$. Then, we loop through all `n` pistons twice, removing one element from a queue and inserting it to another queue on each iteration which takes $$O(\\log n)$$.

- Space complexity:
$$O(n)$$ for the queues

# Code
```kotlin []
class Solution {
    fun maxArea(height: Int, positions: IntArray, directions: String): Long {
        var sum = 0L
        val down = PriorityQueue<Int>()
        val up = PriorityQueue<Int>(reverseOrder())
        for (i in positions.indices) {
            val pos = positions[i]
            sum += pos
            (if (directions[i] == 'U') up else down).offer(pos)
        }

        var max = sum
        var prevDist = 0
        repeat(positions.size shl 1) {
            val step = up.size - down.size
            val dist = if (up.isEmpty() || down.isNotEmpty() && down.peek() < height - up.peek()) down.poll().also { up.offer(-it) }
            else (height - up.poll()).also { down.offer(height + it) }
            sum += step.toLong() * (dist - prevDist)
            max = max(max, sum)
            prevDist = dist
        }

        return max
    }
}
```