# 🍉Beats 100%✅ || Simple 4 Lines🔥|| All Language Solutions🍉

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/same-tree/solutions/4783418/](https://leetcode.com/problems/same-tree/solutions/4783418/)

---

![image.png](./images/0.png)

# Intuition
The intuition behind this approach is to recursively compare the structures and values of the given binary trees. We can start by checking if both trees are empty, if one tree is empty while the other is not, or if the values of the current nodes are not equal. Then, we recursively check the left and right subtrees to ensure that they are also identical.

# Approach
We can solve this problem using a recursive approach. We traverse both trees simultaneously and compare their nodes at each step. If the values of the current nodes are equal, we proceed to compare their left subtrees and right subtrees recursively. If any of the conditions for inequality are met, we return `false`, indicating that the trees are not the same.

# Complexity
- Time complexity: **O(n)**, where n is the total number of nodes in the smaller tree. In the worst-case scenario, we might need to traverse all nodes.
- Space complexity: **O(h)**, where h is the height of the tree. This space is occupied by the recursive function call stack. In the worst case, the height of the tree is equal to the number of nodes in the tree, resulting in O(n) space complexity.

# Code

```Java []
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null)  return true;
        if (p == null || q == null)   return false;
        if (p.val != q.val)   return false;
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    }
}
```
```C++ []
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr)
            return true;
        if (p == nullptr || q == nullptr)
            return false;
        if (p->val != q->val)
            return false;
        return isSameTree(p->right, q->right) && isSameTree(p->left, q->left);
    }
};
```
```Python []

class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        if p is None and q is None:
            return True
        if p is None or q is None:
            return False
        if p.val != q.val:
            return False
        return self.isSameTree(p.right, q.right) and self.isSameTree(p.left, q.left)
```
```Javascript []
var isSameTree = function(p, q) {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};
```
```C []
bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    if (p == NULL && q == NULL)
        return true;
    if (p == NULL || q == NULL)
        return false;
    if (p->val != q->val)
        return false;
    return isSameTree(p->right, q->right) && isSameTree(p->left, q->left);
}
```
```C# []

public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null)
            return true;
        if (p == null || q == null)
            return false;
        if (p.val != q.val)
            return false;
        return IsSameTree(p.right, q.right) && IsSameTree(p.left, q.left);
    }
}
```
```PHP []

class Solution {
    function isSameTree($p, $q) {
        if ($p === null && $q === null)
            return true;
        if ($p === null || $q === null)
            return false;
        if ($p->val !== $q->val)
            return false;
        return $this->isSameTree($p->right, $q->right) && $this->isSameTree($p->left, $q->left);
    }
}
```
```Typescript []
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null)
        return true;
    if (p === null || q === null)
        return false;
    if (p.val !== q.val)
        return false;
    return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
}

```
# Code With Explaination\uD83D\uDC47\u2705
```
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {

        // If both trees are empty, they are considered the same
        if (p == null && q == null)
            return true;

        // If one tree is empty while the other is not, they are not the same
        if (p == null || q == null)
            return false;

        // If the values of the current nodes are not equal, they are not the same
        if (p.val != q.val)
            return false;

        // Recursively check the left and right subtrees
        return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
    }
}

```
# Hope You Find UseFul\uD83D\uDE4C\uD83D\uDC4D
