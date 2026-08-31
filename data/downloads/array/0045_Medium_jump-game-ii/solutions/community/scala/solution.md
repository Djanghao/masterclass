# Best Solution Explained

**Author:** darian-catalin-cucer
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3159792/](https://leetcode.com/problems/jump-game-ii/solutions/3159792/)

---


```
class Solution {
    fun jump(nums: IntArray): Int {
        val dq = ArrayDeque<Int>().apply { add(0) }
        val dist = hashMapOf(0 to 0)
        var prevMax = 0
        
        while (dq.isNotEmpty()) {
            val current = dq.removeFirst()
            if (current == nums.lastIndex) {
                return dist.getOrDefault(current, 0)
            }
            val lowerBound = 1 + maxOf(current, prevMax)
            val higherBound = minOf(nums.lastIndex, current + nums[current])
            for (nextPosition in lowerBound..higherBound) {
                if (!dist.containsKey(nextPosition)) {
                    dist[nextPosition] = 1 + dist.getOrDefault(current, 0)
                    dq.addLast(nextPosition)
                }
            }
            prevMax = current + nums[current]
        }
        
        return -1
    }
}
```