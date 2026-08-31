# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 54
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543425/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543425/)

---

# PLEASE UPVOTE IF IT HELPED


---

![Screenshot 2024-01-11 053235.png](./images/0.png)

---


# Approaches
(Also explained in the code)

1. **Depth-First Search (DFS):**

- Traverse the tree using DFS to explore all nodes.
1. **Recursion:**

- Use a recursive function `dfs` that returns a pair of integers representing the minimum and maximum values encountered in the subtree rooted at the current node.
1. **Update Maximum Difference:**

- Update the maximum difference `m` by comparing the differences between the current node's value and the minimum and maximum values in its subtree.


# Complexity
- Time complexity:
   $$O(n)$$
(*where N is the number of nodes in the tree*)

- Space complexity:
   $$O(h)$$
(*where H is the height of the tree*)
    


# Code
```C++ []
class Solution {
public:
    int maxAncestorDiff(TreeNode* root) {
        int m = 0;
        dfs(root, m);
        return m;
    }

private:
    std::pair<int, int> dfs(TreeNode* root, int& m) {
        if (root == nullptr) {
            return {INT_MAX, INT_MIN};
        }

        auto left = dfs(root->left, m);
        auto right = dfs(root->right, m);

        int minVal = std::min(root->val, std::min(left.first, right.first));
        int maxVal = std::max(root->val, std::max(left.second, right.second));

        m = std::max({m, std::abs(minVal - root->val), std::abs(maxVal - root->val)});

        return {minVal, maxVal};
    }
};




```
```Java []
import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) {
        val = x;
        left = right = null;
    }
}

public class Solution {
    public int maxAncestorDiff(TreeNode root) {
        int[] m = {0};
        dfs(root, m);
        return m[0];
    }

    private int[] dfs(TreeNode root, int[] m) {
        if (root == null) {
            return new int[]{Integer.MAX_VALUE, Integer.MIN_VALUE};
        }

        int[] left = dfs(root.left, m);
        int[] right = dfs(root.right, m);

        int minVal = Math.min(root.val, Math.min(left[0], right[0]));
        int maxVal = Math.max(root.val, Math.max(left[1], right[1]));

        m[0] = Math.max(m[0], Math.max(Math.abs(minVal - root.val), Math.abs(maxVal - root.val)));

        return new int[]{minVal, maxVal};
    }
}



```
```python3 []
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = self.right = None

class Solution:
    def maxAncestorDiff(self, root):
        m = [0]
        self.dfs(root, m)
        return m[0]

    def dfs(self, root, m):
        if not root:
            return float('inf'), float('-inf')

        left = self.dfs(root.left, m)
        right = self.dfs(root.right, m)

        min_val = min(root.val, min(left[0], right[0]))
        max_val = max(root.val, max(left[1], right[1]))

        m[0] = max(m[0], max(abs(min_val - root.val), abs(max_val - root.val)))

        return min_val, max_val



```
```javascript []
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Solution {
    maxAncestorDiff(root) {
        const m = [0];
        this.dfs(root, m);
        return m[0];
    }

    dfs(root, m) {
        if (!root) {
            return [Infinity, -Infinity];
        }

        const left = this.dfs(root.left, m);
        const right = this.dfs(root.right, m);

        const minVal = Math.min(root.val, Math.min(left[0], right[0]));
        const maxVal = Math.max(root.val, Math.max(left[1], right[1]));

        m[0] = Math.max(m[0], Math.abs(minVal - root.val), Math.abs(maxVal - root.val));

        return [minVal, maxVal];
    }
}



```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---