# DFS kotlin

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/5450388/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/5450388/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var children: List<Node?> = listOf()
 * }
 */

class Solution {
    private var res = 0 
    fun diameter(root: Node?): Int {
        if( root == null) return 0 

        helper(root)
        return res - 1
    }

    fun helper( root: Node?): Int{
        if( root == null) return 0
        var first = 0 
        var second = 0



        root.children.forEach{

            val l = helper(it)
            if( l >= first) {
                second = first 
                first = l
            } else if( l > second)
                second = l
        }

        res = max(res, first + second + 1)

        return first + 1
    }
}
```