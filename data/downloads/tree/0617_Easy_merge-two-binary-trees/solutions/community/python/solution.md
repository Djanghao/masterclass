# Short Recursive Solution w/ Python & C++

**Author:** zqfan
**Votes:** 151
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/104301/](https://leetcode.com/problems/merge-two-binary-trees/solutions/104301/)

---

as the problem description says: Otherwise, the NOT null node will be used as the node of new tree. so here comes this solution.

python solution
```
class Solution(object):
    def mergeTrees(self, t1, t2):
        if t1 and t2:
            root = TreeNode(t1.val + t2.val)
            root.left = self.mergeTrees(t1.left, t2.left)
            root.right = self.mergeTrees(t1.right, t2.right)
            return root
        else:
            return t1 or t2
```
c++ solution
```
class Solution {
public:
    TreeNode* mergeTrees(TreeNode* t1, TreeNode* t2) {
        if ( t1 && t2 ) {
            TreeNode * root = new TreeNode(t1->val + t2->val);
            root->left = mergeTrees(t1->left, t2->left);
            root->right = mergeTrees(t1->right, t2->right);
            return root;
        } else {
            return t1 ? t1 : t2;
        }
    }
};
```