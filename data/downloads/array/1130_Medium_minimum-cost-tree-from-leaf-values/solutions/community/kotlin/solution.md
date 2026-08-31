# Kotlin | O(N2) | logically explained

**Author:** ni3verma
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/4849277/](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/solutions/4849277/)

---

# Intuition & Approach
when we build each level of the binary tree, it is the max left leaf node and max right leaf node that are  being used.
    so we would like to put big leaf nodes close to the root. ---- IMPORTANT
    Otherwise if its level is deep, for each level above it, its value will be used to calculate the non-leaf node value, which will result in a big total sum.

With above observation, the greedy approach is to find the smallest value in the array, use it and its smaller neighbor to build a non-leaf node.
then we can safely delete smaller neighbour from the array since it has a smaller value than its neightbor so it will never be used again to calculate sum.
Repeat this process until there is only one node left in the array (which means we cannot build a new level any more)

# Complexity
- Time complexity: $$O(N^2)$$
    - outer loop - $$O(N)$$
        - get min number - $$O(N)$$
        - remove at - $$O(N)$$



- Space complexity:
$$O(N)$$ -- for mutable list

# Code
```
class Solution {
    fun mctFromLeafValues(arr: IntArray): Int {
        val elements = arr.toMutableList()
        var result = 0

        while(elements.size != 1){
            val minNumIndex = getMinNumIndex(elements)
            val minNeighbourIndex = getMinNeighbourIndex(elements, minNumIndex)

            result += elements[minNumIndex] * elements[minNeighbourIndex]

            elements.removeAt(minNumIndex)
        }

        return result
    }

    private fun getMinNumIndex(nums:List<Int>):Int{
        var minIndex = 0
        var min = nums[0]

        nums.forEachIndexed{i,n->
            if(n<min){
                min = n
                minIndex = i
            }
        }

        return minIndex
    }

    private fun getMinNeighbourIndex(nums:List<Int>, i:Int):Int{
        if(i == 0) return 1
        else if(i == nums.size-1) return i-1
        else if(nums[i-1] < nums[i+1]) return i-1
        else return i+1
    }
}
```