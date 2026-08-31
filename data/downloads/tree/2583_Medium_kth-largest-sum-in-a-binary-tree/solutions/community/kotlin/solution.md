# Priority Queue with BFS beats 100%

**Author:** usernamectrlc
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/4983038/](https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/solutions/4983038/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Loop every level and use priority queue to sort the result
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun kthLargestLevelSum(root: TreeNode?, k: Int): Long {
        val pq = PriorityQueue<Long>()
        if(root == null) return -1L
        val q: Queue<TreeNode> = LinkedList()
        q.offer(root)

        while( q.isNotEmpty()){
            var res = 0L
            val curr = q.size

            repeat(curr){
                val temp = q.poll()
                res+= temp.`val`
                if(temp.left != null) q.offer(temp.left)
                if(temp.right != null) q.offer(temp.right)
            }
            pq.offer(res)
            while(pq.size > k) pq.poll()
        }
        return if( pq.size < k) -1L else pq.peek()
    }
}
```