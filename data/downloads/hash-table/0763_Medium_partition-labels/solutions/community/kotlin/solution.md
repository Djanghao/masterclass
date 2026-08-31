# Merge Intervals Solution

**Author:** diegopap
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-labels/solutions/5107014/](https://leetcode.com/problems/partition-labels/solutions/5107014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun partitionLabels(s: String): List<Int> {
        val intervals = s.toSet().map {
            val interval = IntArray(2)
            interval[0] = s.indexOf(it)
            interval[1] = s.lastIndexOf(it)
            interval
        }.toTypedArray()
        val res = mutableListOf<Int>()
        merge(intervals).forEach { 
            res.add(it[1] - it[0] + 1)
        }
        return res
    }

    fun merge(intervals1: Array<IntArray>): Array<IntArray> {
        val intervals = intervals1.sortedWith(compareBy { it.elementAt(0)}) // Sorting given array
        var ans: Array<IntArray> = emptyArray<IntArray>()
        var last = 0
        ans += intervals[0]
        for(i in 0..(intervals.size-1))
        {
            if(ans[last][1] >= intervals[i][0])
            {
                ans[last][1] = maxOf(ans[last][1], intervals[i][1])
            }
            else
            {
                ans += intervals[i]
                last++
            }
        }
        return ans
    }
}
```