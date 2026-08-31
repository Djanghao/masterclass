# Binary Search solution

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-hit-counter/solutions/4782167/](https://leetcode.com/problems/design-hit-counter/solutions/4782167/)

---

# Intuition
note: it is not optimal solution coz spend O(n) memory

As we have param `timestamp` in the `getHits` finction

```kotlin
    getHits(timestamp: Int) 
```

we can assume that our API will be used for getting non-chronogical order. For example: getting data from the time-period in the past. 

If we solve this problem (but current task do not required to solve it) 
we have to store all hits in the memory. 

Then, to get start and end pointers we can use binarySearch, coz all timestamps in the chronogical order. It is a sorted list of ints. 
# Approach
- store data in the list 
- search nearest index using bi-search 

# Complexity
- Time complexity:
getHits - O(log n)
hit -> O(1) or O(n) if we increasing space

- Space complexity:
O(n)

# Code
```kotlin
class HitCounter() {

    private val store = mutableListOf<Int>()

    fun hit(timestamp: Int) {
        store.add(timestamp)
    }

    fun getHits(timestamp: Int): Int {
        if (store.isEmpty()) return 0
        val end = store.findIndex(timestamp, false)
        val start = store.findIndex(timestamp - 300 + 1, true)
        return when {
            start == -1 -> 0
            end == -1 -> store.size - start
            else -> end - start + 1
        }
    }

    private fun List<Int>.findIndex(req: Int, left: Boolean): Int {
        var start = 0
        var end = this.lastIndex
        var closest = -1

        while (start <= end) {
            val mid = start + (end - start) / 2
            val closestValue = this.getOrNull(closest) ?: Integer.MAX_VALUE
            if (this[mid] >= req && (req - this[mid]).absoluteValue <= (req - closestValue).absoluteValue) {
                closest = mid
            }
            when {
                this[mid] > req -> end = mid - 1
                this[mid] < req -> start = mid + 1
                else -> if (left) end = mid - 1 else start = mid + 1
            }
        }

        return closest
    }

}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
```