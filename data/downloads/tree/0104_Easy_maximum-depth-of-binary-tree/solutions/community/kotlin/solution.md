# Kotlin: 3 Approaches, Beginner friendly with comments.

**Author:** karum006
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3173349/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3173349/)

---

# Code
```
class Solution {

    // Approach 1: Recursive DFS. T=O(N). S=O(N).
    fun maxDepth(root: TreeNode?): Int {
        if (root == null) return 0
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }

    // Approach 2: Iterative DFS. T=O(N). S=O(N).
    // Notice how the stack traversal happens until the one branch is completely popped, hence
    // making it a DFS
    fun maxDepth2(root: TreeNode?): Int {
        var maxDepth = 0
        val stack = Stack<Pair<TreeNode?, Int>>()
        stack.add(Pair(root, 1))

        while (stack.isNotEmpty()) {
            val popped = stack.pop()
            popped.first?.let {
                maxDepth = Math.max(maxDepth, popped.second)
                stack.add(Pair(it.left, popped.second + 1))
                stack.add(Pair(it.right, popped.second + 1))
            }
        }
        return maxDepth
    }

    // Approach 3: Iterative BFS. T=O(N). S= O(N).
    // Notice how the queue/list traversal happens in the order of nodes that are added to the queue
    // Hence the travelsal happens one level at a time making it a BFS.
    fun maxDepth3(root: TreeNode?): Int {
        val queue = LinkedList<Pair<TreeNode?, Int>>()
        var depth = 0
        queue.add(Pair(root, 1))

        while (queue.isNotEmpty()) {
            val polled = queue.pollFirst()
            polled.first?.let {
                depth = polled.second
                queue.add(Pair(it.left, depth + 1))
                queue.add(Pair(it.right, depth + 1))
            }
        }
        return depth
}
}
```


Please UPVOTE if it helped. Thanks!