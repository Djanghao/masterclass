# Clean code

**Author:** HSinghal3
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5420095/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5420095/)

---

# Intuition
1. Find index of all critical points
2. Compute max distance by subtracting last and first index 
3. Compute min distance by looping over list storing indices of critical points


# Complexity
- Time complexity: O(n)

- Space complexity: O(k), k is count of critical points
# Code
```
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun nodesBetweenCriticalPoints(head: ListNode?): IntArray {
        val criticalPoints = mutableListOf<Int>()
        var idx = 1
        var prev = head
        var current = head?.next
        var ahead = current?.next

        // Finding the critical points
        while (ahead != null) {
            if ((current!!.`val` < prev!!.`val` && current.`val` < ahead.`val`) || (current.`val` > prev.`val` && current.`val` > ahead.`val`)) 
                criticalPoints.add(idx)

            ++idx
            prev = current
            current = ahead
            ahead = ahead.next
        }

        if (criticalPoints.size < 2) return intArrayOf(-1, -1)

        val maxDistance = criticalPoints.last() - criticalPoints.first()
        var minDistance = Int.MAX_VALUE

        // Finding the distance
        for (idx in 1..criticalPoints.lastIndex) {
            val distance = criticalPoints[idx] - criticalPoints[idx - 1]
            minDistance = minOf(distance, minDistance)
        }
        
        return intArrayOf(minDistance, maxDistance)
    }
}
```