# KOTLIN and JAVA solution using a Stack

**Author:** anlk
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/6043084/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/6043084/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
The BST in-order traversal visits nodes in increasing order. A stack can be used to simulate the recursive process, storing nodes as we traverse the tree to the leftmost leaf. The next() operation retrieves the current node and processes the next node, ensuring minimal memory usage.


# Complexity
- Time complexity: $$O(1)$$ average
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(h)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Kotlin []
class BSTIterator(root: TreeNode?) {

    val stack = Stack<TreeNode>()

    init {
        pushLeft(root)
    }

    fun next(): Int {
        val node = stack.pop()
        node.right?.let { pushLeft(it) }
        return node.`val`
    }

    fun hasNext(): Boolean = stack.isNotEmpty()

    private fun pushLeft(node: TreeNode?) {
        var current = node
        while (current != null) {
            stack.push(current)
            current = current.left
        }
    }
}
```

```Java []
class BSTIterator {

    private Stack<TreeNode> stack;

    public BSTIterator(TreeNode root) {
        stack = new Stack<>();
        pushLeft(root);
    }

    public int next() {
        TreeNode node = stack.pop();
        if (node.right != null) {
            pushLeft(node.right);
        }
        return node.val;
    }

    public boolean hasNext() {
        return !stack.isEmpty();
    }

    private void pushLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }
}
```