# O(NLogN) solution || Priority Queue || Very easy to understand

**Author:** anonymous_now
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901767/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901767/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array based on left value
2. We can add a interval in a group if and only if its left value is greater than group max value (max right value)
3. So we need to find smallest (right) value from any group which is less than current interval left value
4. Use Min-heap to get this value in O(1) time , add every interval right value in min-heap
5. if min-heap top has a value less than this interval left value then it means we can add it in pre existing group which ends at min-heap peek value
6. If  min-heap top dont have  a value less than this interval left then create a new group by inc grp var
5. Add the current interval right value in min-heap
6. return grp at last 

# Complexity
- Time complexity: O(NLogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun minGroups(intervals: Array<IntArray>): Int {
        intervals.sortWith(compareBy{it[0]})
        val pq = PriorityQueue<Int>()
        var grp = 1
        pq.add(intervals[0][1])
        for(i in 1..intervals.size-1){
            if(pq.peek() < intervals[i][0]){
                pq.poll()
            } else {
                grp++
            }
            pq.add(intervals[i][1])
        }
        return grp 
    }
}
// [[1, 5], [3, 8], [10, 15], [1, 5], [3, 8]]
//(1,5),(10,25)
//(3,8)
//(1,5)
// (3,8)
```