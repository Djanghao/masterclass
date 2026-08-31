# C++ recursive solution, 4ms, beat 100%  & two Python solutions

**Author:** woziji
**Votes:** 4
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/425091/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/425091/)

---

C++ solution,
```
class Solution {
public:
    void helper (TreeNode* root, double target, int& res) {
        if (abs(root->val - target) < abs(res-target)) 
            res = root->val;

        if (root->val > target && root->left)
            helper(root->left,target,res);
        else if (root->val < target && root->right)
            helper(root->right,target,res);
    }

    int closestValue(TreeNode* root, double target) {
        int res = root->val;
        
        helper(root,target,res);

        return res;
    }
};
```

Python recursive solution,
```
class Solution:
    def helper(self, root: TreeNode, target: float, res: int):
        if abs(root.val - target) < abs(res-target): 
            res = root.val

        if root.val > target and root.left:
            return self.helper(root.left,target,res)
        elif root.val < target and root.right:
            return self.helper(root.right,target,res)
        else:
            return res

    def closestValue(self, root: TreeNode, target: float) -> int:
        return self.helper(root,target,root.val)
```

Python iterative solution,
```
class Solution:
    def closestValue(self, root: TreeNode, target: float) -> int:
        res = root.val

        while root:
            if abs(root.val - target) < abs(res-target): 
                res = root.val

            if root.val > target:
                root = root.left
            elif root.val < target:
                root = root.right
            else:
                break

        return res
```