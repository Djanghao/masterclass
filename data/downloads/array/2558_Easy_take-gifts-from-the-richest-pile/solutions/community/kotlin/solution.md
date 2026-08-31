# (6ms) PriorityQueue(IntComparator)

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6139062/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6139062/)

---

# Approach
PriorityQueue(IntComparator)
# Complexity
![image.png](./images/0.png)
# Code
```kotlin []
class Solution {
    object IntComparator : Comparator<Int> {
        override fun compare(a: Int, b: Int): Int = b - a
    }
    fun pickGifts(gifts: IntArray, k: Int): Long {
        val pq_desc = PriorityQueue(IntComparator)
        var sum = 0L
        for (g in gifts) {
            pq_desc.offer(g)
            sum+=g
        }

        for (i in 0 until k) {
            val N = pq_desc.poll()
            val del = N - sqrt(N.toDouble()).toInt()
            sum -= del
            pq_desc.offer(N-del)            
        }

        return sum
    }

    // fun sqrt(x: Int): Int {
    //     var low = 1
    //     var high = x
        
    //     while (low <= high) {
    //         val mid = (low + high) shr 1
    //         if (mid <= x / mid) low = mid + 1
    //         else high = mid - 1
    //     }
    //     return high
    // }
}
```