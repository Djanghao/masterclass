# Kotlin DFS Recursion solution

**Author:** 27081993
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-bst-subtree/solutions/5809949/](https://leetcode.com/problems/largest-bst-subtree/solutions/5809949/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(h)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {  
    fun largestBSTSubtree(root: TreeNode?): Int {  
        fun TreeNode?.call(): Triple<Boolean, Int, Pair<Int, Int>> {  
            if (this == null) return Triple(true, 0, Pair(Int.MAX_VALUE, Int.MIN_VALUE))  
            
            val (lFlag, lCount, lBounds) = left.call()  
            val (rFlag, rCount, rBounds) = right.call()  
            
            val lMax = lBounds.second  
            val rMin = rBounds.first  

            val isCurrentBST = (lFlag && rFlag && (left == null || lMax < `val`) && (right == null || rMin > `val`))  

            if (isCurrentBST) {  
                val minVal = if (left == null) `val` else lBounds.first  
                val maxVal = if (right == null) `val` else rBounds.second  
                return Triple(true, lCount + rCount + 1, Pair(minVal, maxVal))  
            } else {  
                return Triple(false, max(lCount, rCount), Pair(0, 0))  
            }  
        }  

        return root.call().second  
    }  
}
```