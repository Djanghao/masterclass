# Greedy solution using priority queue

**Author:** PaulShan
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/3678774/](https://leetcode.com/problems/largest-values-from-labels/solutions/3678774/)

---

# Intuition
Greedy solution
# Approach
Using priority queue to get the biggest value and check whether the item is valid

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n)

# Code
```
data class Vector(val value:Int, val label:Int)
class Solution {
    fun largestValsFromLabels(values: IntArray, labels: IntArray, numWanted: Int, useLimit: Int): Int {
        val priorityQueue = PriorityQueue<Vector>{a,b -> b.value - a.value}
        
        for(i in values.indices)
        {
            priorityQueue.add(Vector(values[i], labels[i]))
        }
        
        val countMap = mutableMapOf<Int,Int>()
        var result = 0
        var currentItemNumber = 0
        while(priorityQueue.isNotEmpty() && currentItemNumber < numWanted)
        {
            val current = priorityQueue.remove()
            val oldCount = countMap[current.label] ?: 0
            if(oldCount  >= useLimit) continue
            result += current.value
            countMap.merge(current.label, 1){old,new -> old + new}
            ++currentItemNumber
        }
        return result
    }
}
```