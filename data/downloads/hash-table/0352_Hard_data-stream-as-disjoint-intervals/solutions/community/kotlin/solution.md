# Kotlin | TreeMap | Add - O(log n) time complexity

**Author:** jivanam
**Votes:** 2
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108458/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3108458/)

---

# Intuition
`TreeMap` stores the current interval, `TreeMap.key` represents the start and `TreeMap.value` represents the end of the interval(both inclusive).
For every input `value`, check whether `value + 1` and `value - 1` exists in the `TreeMap(TM)`. 
If `value + 1` exists, that means new interval will be `value` to `TM.get(value + 1)`. Same can be done for `value - 1`.

NOTE - 
1. Do not process the duplicate inputs. 
2. TreeMap is required due to the sorted order requirement while returning the intervals.

# Complexity
- Time complexity: Add - $$O(log(n))$$, GetIntervals - $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class SummaryRanges() {

    private val map = TreeMap<Int, Int>()
    private val invertMap = HashMap<Int, Int>()
    private val input = HashSet<Int>()

    fun addNum(value: Int) {
        var s = value
        var e = value
        
        if (!input.contains(value)) {
            if (map.containsKey(value + 1)) {
                e = map[value + 1]!!
                map.remove(value + 1)
            }
            if (invertMap.containsKey(value - 1)) {
                s = invertMap[value - 1]!!
                invertMap.remove(value - 1)
            }
            map[s] = e
            invertMap[e] = s
        }

        input.add(value)
    }

    fun getIntervals(): Array<IntArray> {
        val arr = Array<IntArray>(map.size) { IntArray(2) }
        var i = 0
        for (e in map) {
            arr[i][0] = e.key
            arr[i][1] = e.value
            i++
        }
        return arr
    }

}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
```