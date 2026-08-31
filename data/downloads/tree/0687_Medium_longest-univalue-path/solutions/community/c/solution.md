# Simple C++ & Python solution with explanation

**Author:** geekcoder1989
**Votes:** 33
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/650435/](https://leetcode.com/problems/longest-univalue-path/solutions/650435/)

---

This question is definitely not `easy` question. Its `medium` at best.
We will do post-order traversal to compute paths so that at each parent node there will be information about the paths from left and right child.
We will maintain following variables:
global: `max_val` which will always have the max value.
local: `cur_val` which will compute the value at the node.
local: `ret_val` which will compute the value to be returned to parent.

To compute the solution of this question we have to consider 4 possible conditions at each level.
1. if left_child.val == right_child.val == root.val
```
   4
 /    \\
4      4
		\\
		 4
```
In this case, 
`cur_val = lval + rval + 2` (+ 2 because two paths are now added from right and left)
`ret_val = max(lval, rval) + 1` (because we can only send one path to the parent. To get the longest path we will have to send the max(lval, rval)
2. if only left_child.val == root.val
```
   4
 /    \\
4      5
```
`cur_val = ret_val = lval + 1`
3. If only right_child.val == root.val
```
   5
 /    \\
4      5
```
`cur_val = ret_val = rval + 1`
4. If both right_child and left_child don't match with root.val
```
   3
 /    \\
4      5
```
`cur_val = ret_val = 0` Since there no path between the child and parent node.


C++
```
class Solution {
public:
    int max_val {0};
    int longestUnivaluePath(TreeNode* root);
    int helper(TreeNode* root);
 
};

int Solution::longestUnivaluePath(TreeNode* root) {
    int cur_val {helper(root)};
    return this->max_val;
}

int Solution::helper(TreeNode* root){
    if (!root) return 0;
    
    int lval = helper(root->left);
    int rval = helper(root->right);
    int cur_val {0};
    int ret_val {0};
    if (root->left != NULL && root->right != NULL && 
        (root->left->val == root->val) &&
        (root->right->val == root->val)){
        cur_val = lval + rval + 2;
        ret_val = std::max(lval, rval) + 1;
    }
    else if (root->left && (root->left->val == root->val)){
        cur_val = lval + 1;
        ret_val = cur_val;
    }
    else if (root->right && (root->right->val == root->val)){
        cur_val = rval + 1;
        ret_val = cur_val;
    }
    else{
        cur_val = 0;
        ret_val = cur_val;
            
    }
    
    this->max_val = std::max(this->max_val, cur_val);
    return ret_val;
    
}
```

Python3:
```
class Solution:
    def longestUnivaluePath(self, root: TreeNode) -> int:
        if not root: return 0
        self.res = 0
        self.postOrder(root)
        return self.res
    
    def postOrder(self, node):
        if not node: return 0
        l_val = r_val = b_val = 0
        l_val = self.postOrder(node.left)
        r_val = self.postOrder(node.right)
        
        if node.left and node.right and (node.val == node.left.val == node.right.val):
            self.res = max(self.res, l_val + r_val + 2)
            return (max(l_val, r_val) + 1)
            
        elif node.left and (node.val == node.left.val):
            l_val += 1
            self.res = max(self.res, l_val)
            return l_val
        elif node.right and (node.val == node.right.val):
            r_val += 1
            self.res = max(self.res, r_val)
            return r_val
        else:
            return 0
