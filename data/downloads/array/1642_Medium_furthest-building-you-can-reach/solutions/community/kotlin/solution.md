# [Kotlin] Greedy solution. using PQ. (minHeap or MaxHeap)

**Author:** Hibbah
**Votes:** 2
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4740753/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4740753/)

---

# Intuition
Because ladders are very efficient, bricks should be used whenever possible.
Ladders should be used where the height difference is greatest.



<br>

# Approach
First, use the ladder to cross.
If there is no ladder, use bricks in the section with the smallest height difference among the sections passed so far.
The section with the smallest height difference can be found through PQ.


<br>

# Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

<br>

# Code
```
fun furthestBuilding(heights: IntArray, bricks: Int, ladders: Int): Int {
    val pq = PriorityQueue<Int>() // minHeap
    var remainBricks = bricks

    for (i in 0 until heights.lastIndex) {
        val gap = heights[i + 1] - heights[i]
        
        if (gap <= 0) continue
        
        pq.add(gap)
        
        if (pq.size > ladders) { // there is no ladder
            // use bricks at smallest difference section
            remainBricks -= pq.poll()

            // there is no bricks
            if (remainBricks < 0) return i
        }
    }

    return heights.lastIndex
}
```

```
// same solution
// Kotlin friendly code
fun furthestBuilding(heights: IntArray, bricks: Int, ladders: Int): Int {
    val pq = PriorityQueue<Int>() // minHeap
    var remainBricks = bricks

    heights.asSequence()
        .zipWithNext { a, b -> b - a } // List<Int>(n - 1)
        .forEachIndexed { i, gap ->
            if (gap <= 0) return@forEachIndexed
            
            pq.add(gap)
            
            if (pq.size > ladders) {
                remainBricks -= pq.poll()
                if (remainBricks < 0) return i
            }
        }

    return heights.lastIndex
}
```



<br><br>

# using maxHeap Solution

Previously, a ladder was used first.
Below is the code that uses bricks first, then finds the highest section and uses the ladder.


```
fun furthestBuilding(heights: IntArray, bricks: Int, ladders: Int): Int {
    val pq = PriorityQueue<Int>(Collections.reverseOrder()) // maxHeap
    var remainBricks = bricks
    var remainLadders = ladders

    heights.asSequence()
        .zipWithNext { a, b -> b - a }
        .forEachIndexed { i, gap ->
            if (gap <= 0) return@forEachIndexed

            remainBricks -= gap
            pq.add(gap)

            if (remainBricks < 0) {
                if (remainLadders <= 0) return i

                remainLadders--
                remainBricks += pq.poll()
            }
        }

    return heights.lastIndex
}
```



