# Simple Tree Map Solution

**Author:** blakew88
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/4074095/](https://leetcode.com/problems/find-right-interval/solutions/4074095/)

---

# Approach
1. Initalize `result` to -1, if an answer is not found
2. Store starting times in TreeMap with corresponding index
3. Find smallest value where `end` >= `start`
4. Assign found `startIndex` to `result`

# Complexity
- Time complexity: `O(N \u22C5log\u2061N)`
    Looping through each interval takes O(N)
    The search in TreeMap using ceilingEntry also takes O(logN)
    Resulting in O(N) * O(logN) == `O(N \u22C5log\u2061N)`


- Space complexity: `O(N)`
N results are stored in the TreeMap resulting in `O(N)`

# Code
```
class Solution {

    fun findRightInterval(intervals: Array<IntArray>): IntArray {
        //1. Initalize results to -1, if an answer is not found 
        val result = IntArray(intervals.size) { -1 }
        val starts = TreeMap<Int, Int>()

        //2. Store starting times in TreeMap with corresponding index
        for (i in intervals.indices) {
            val (start, _) = intervals[i]
            starts[start] = i
        }

        for (i in intervals.indices) {
            val (_, end) = intervals[i]
            //3. Find smallest value that satisfies end >= start 
            starts.ceilingEntry(end)?.let { (_, startIndex) ->
                //4. Assign found startIndex to result
                result[i] = startIndex
            }
        }
        return result
    }
}
```