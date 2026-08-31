# 🔥✅✅ Beats 100% with Proof | Very Easy to Understand ✅✅🔥

**Author:** areetrahalder
**Votes:** 18
**Link:** [https://leetcode.com/problems/same-tree/solutions/4783450/](https://leetcode.com/problems/same-tree/solutions/4783450/)

---

# Proof - Upvote if you are watching the proof
![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine whether two binary trees are the same, we need to check if they are structurally identical and if their nodes have the same values.

# Approach
<!-- Describe your approach to solving the problem. -->
1. We start by checking if both trees are null. If they are, they are the same, so we return true.
2. If one of the trees is null and the other is not, they cannot be the same, so we return false.
3. If both trees are not null, we check if their values are equal.
4. Then, we recursively call the function on their left and right subtrees and check if they are the same.
5. We combine the results of the checks on the current node's value and its subtrees and return the final result.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> where n is the number of nodes in the smaller tree. We need to traverse each node once.

- Space complexity: $$O(h)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> where h is the height of the tree. This is the space required for the recursive call stack. In the worst case, the height of the tree could be O(n) for a skewed tree, but on average, it's O(log n) for a balanced binary tree.

# Code
```Java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        boolean isPNull = p == null;
        boolean isQNull = q == null;
        if(isPNull & isQNull) {
            return true;
        } else if (isPNull ^ isQNull){
            return false;
        } else {
          boolean status = p.val == q.val;
          status &= isSameTree(p.left, q.left);
          status &= isSameTree(p.right, q.right);
          return status;
        }
    }
}
```
```C []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
bool isSameTree(struct TreeNode* p, struct TreeNode* q) {
    if (p == NULL && q == NULL) {
        return true;
    } else if (p == NULL || q == NULL) {
        return false;
    } else {
        return p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
    }
}

```
```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if (p == nullptr && q == nullptr) {
            return true;
        } else if (p == nullptr || q == nullptr) {
            return false;
        } else {
            return p->val == q->val && isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
        }
    }
};

```
```C# []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public bool IsSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        } else if (p == null || q == null) {
            return false;
        } else {
            return p.val == q.val && IsSameTree(p.left, q.left) && IsSameTree(p.right, q.right);
        }
    }
}

```
```Python []
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        is_p_null = p is None
        is_q_null = q is None

        if is_p_null and is_q_null:
            return True
        elif is_p_null or is_q_null:
            return False
        else:
            status = p.val == q.val
            status &= self.isSameTree(p.left, q.left)
            status &= self.isSameTree(p.right, q.right)
            return status
```
```Python3 []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        is_p_null = p is None
        is_q_null = q is None
        
        if is_p_null and is_q_null:
            return True
        elif is_p_null or is_q_null:
            return False
        else:
            status = p.val == q.val
            status = status and self.isSameTree(p.left, q.left)
            status = status and self.isSameTree(p.right, q.right)
            return status
```
```Javascript []
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
```
```Typescript []
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}
```

# Upvote - Please
![image.png](./images/1.png)
