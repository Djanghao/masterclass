# Simulating Assignment Using 2 Priority Queue

**Author:** yunhao_liu
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899010/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899010/)

---

# Intuition
When a friend comes, we need to know which chairs are freed, then assign the smallest-indexed, or increase total chairs. So we can keep an occupied PriorityQueue compared by leaving time. and another free chair PriorityQueue compared by index.

# Approach
Create a class Chair containing index and emptyAt. The reason to use a class object is that we can mutate the emptyAt value without recreating object. (While another apporach is to use Pair<Int, Int>)
```
        data class Chair(val index: Int, var emptyAt: Int)
```
Create the two PriorityQueue to measure occupied and free chairs:
```
        val occupied = PriorityQueue<Chair>(compareBy { it.emptyAt })
        val free = PriorityQueue<Chair>(compareBy { it.index })
```
Now sort the friends by their arriving time, because we want to simulate the process chronologically:
```
        val sorted = times.withIndex().sortedBy { it.value[0] }
```
Iterate the friends:
```
        for ((originalIndex, time) in sorted) {
        }
```
For a coming time, if any chair in occupied queue has a leaving time earlier, we free it:
```
            while (occupied.peek() != null && occupied.peek()!!.emptyAt <= time[0]) {
                free.offer(occupied.poll()!!)
            }
```
then if free queue is not empty, the first-indexed one is the next chair, otherwise we create a new chair whose index will be the occupied queue's size.
```
            val nextChair = if (free.isNotEmpty()) {
                free.poll()!!.apply { emptyAt = time[1] }
            } else {
                Chair(occupied.size, time[1])
            }
```
if this friend's original index is the target index, we return it; otherwise we add this chair to occupied queue:
```
            if (originalIndex == targetFriend) {
                return nextChair.index
            } else {
                occupied.offer(nextChair)
            }
```

# Complexity
- Time complexity:
$$O(n*logn)$$ 

- Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun smallestChair(times: Array<IntArray>, targetFriend: Int): Int {

        data class Chair(val index: Int, var emptyAt: Int)

        val occupied = PriorityQueue<Chair>(compareBy { it.emptyAt })
        val free = PriorityQueue<Chair>(compareBy { it.index })

        // Sort friends by their arrival time
        val sorted = times.withIndex().sortedBy { it.value[0] }

        for ((originalIndex, time) in sorted) {
            // Free up chairs for friends that have already left
            while (occupied.peek() != null && occupied.peek()!!.emptyAt <= time[0]) {
                free.offer(occupied.poll()!!)
            }

            // Assign the next available chair
            val nextChair = if (free.isNotEmpty()) {
                free.poll()!!.apply { emptyAt = time[1] }
            } else {
                Chair(occupied.size, time[1])
            }

            if (originalIndex == targetFriend) {
                return nextChair.index
            } else {
                occupied.offer(nextChair)
            }
        }
        return 0
    }
}
```