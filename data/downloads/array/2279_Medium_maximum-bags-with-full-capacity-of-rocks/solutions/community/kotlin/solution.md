# Kotlin Solution using Priority Queue

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2068110/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2068110/)

---

```
fun maximumBags(capacity: IntArray, rocks: IntArray, additionalRocks: Int): Int {
    var additionalRocks = additionalRocks
    var result = 0
    val pq = PriorityQueue<Int>()
    for (i in rocks.indices) {
        if (capacity[i] - rocks[i] > 0) {
            pq.add(capacity[i] - rocks[i])
        } else result++
    }
    
	// fill up best bag every time until the rocks run out
    while (!pq.isEmpty() && additionalRocks > 0) {
        val stuff = pq.poll()
        if (stuff > additionalRocks) {
            return result
        }
        additionalRocks -= stuff
        result++
    }
        
    if (pq.poll() == 0) result++
    return result
}
```