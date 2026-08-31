# 🚀️🔥️ Kotlin/Java simplest recursive solution - beats 100%

**Author:** Klemo1997
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3296556/](https://leetcode.com/problems/sum-root-to-leaf-numbers/solutions/3296556/)

---

# Approach
We can't do this bottom up, because we'd lose the information about count of distinct paths. Instead the top-down approach is the way to go.
Collect the state from root to leafs and sum them on the way up.

# Complexity
- Time complexity:
$$O(n)$$ - we have to visit all nodes

- Space complexity:
$$O(n)$$ - allocated in call stack in worst case

```kotlin []
class Solution {
    fun sumNumbers(root: TreeNode?) = recSum(root, 0)

    private fun recSum(node: TreeNode?, current: Int): Int {
        if (node == null) return 0
        val next = node.`val` + (current * 10)

        return if (node.left == null && node.right == null) next
            else recSum(node.left, next) + recSum(node.right, next)
    }
}
```
```java []
class Solution {
    public int sumNumbers(TreeNode root) {
        return recSum(root, 0);        
    }

    private int recSum(TreeNode node, int current) {
        if (node == null) return 0;
        
        int next = node.val + (current * 10);

        if (node.left == null && node.right == null) return next;
        
        return recSum(node.left, next) + recSum(node.right, next);
    }
}
```