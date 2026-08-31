# scala DFS + recursion

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/5190760/](https://leetcode.com/problems/nested-list-weight-sum-ii/solutions/5190760/)

---

# Intuition
The problem requires calculating the sum of integers in a nested list, where each integer's weight is determined by its depth. The deeper the integer, the lower its weight. The key intuition is to process the list level by level, accumulating sums at each depth, and then sum these with the appropriate weights.

# Approach
Depth Calculation: We use a helper function to traverse the nested list and calculate the maximum depth. This is achieved through a depth-first search (DFS).

Weighted Sum Calculation: Another recursive function processes each level of the nested list. It accumulates the integer values and gathers nested lists for further processing.

Recursive Processing: At each recursive step, we accumulate integer sums and prepare a list of nested lists for the next level. This allows us to process each level separately and calculate the weighted sum based on the previously calculated maximum depth.

# Complexity
- Time complexity:
$$O(n)$$
n is the total number of integers and lists in the nested structure. Each element is visited once to calculate the maximum depth and once more to compute the weighted sum.
- Space complexity:
$$O(d)$$
d is the maximum depth of the nested lists. This accounts for the recursion stack in the depth calculation and weighted sum functions.

# Code
```
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * trait NestedInteger {
 *
 *   // Return true if this NestedInteger holds a single integer, rather than a nested list.
 *   def isInteger: Boolean
 *
 *   // Return the single integer that this NestedInteger holds, if it holds a single integer.
 *   def getInteger: Int
 *
 *   // Set this NestedInteger to hold a single integer.
 *   def setInteger(i: Int): Unit
 *
 *   // Return the nested list that this NestedInteger holds, if it holds a nested list.
 *   def getList: Array[NestedInteger]
 *
 *   // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *   def add(ni: NestedInteger): Unit
 * }
 */
object Solution {
    def depthSumInverse(nestedList: List[NestedInteger]): Int = {
        helper(nestedList, 0)
    }

    private def helper(niList: List[NestedInteger], prev: Int): Int = {
        var intSum = prev
        val levelBreak = scala.collection.mutable.ListBuffer[NestedInteger]()

        for (ni <- niList) {
            if (ni.isInteger) {
                intSum += ni.getInteger
            } else {
                levelBreak ++= ni.getList.toList
            }
        }

        val listSum = if (levelBreak.isEmpty) 0 else helper(levelBreak.toList, intSum)
        listSum + intSum
    }
}

```