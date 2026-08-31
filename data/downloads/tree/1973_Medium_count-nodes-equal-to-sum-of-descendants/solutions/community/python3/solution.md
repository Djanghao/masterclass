# [Python3] post-order dfs

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1412419/](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/solutions/1412419/)

---


```
class Solution:
    def equalToDescendants(self, root: Optional[TreeNode]) -> int:
        
        def fn(node):
            """Return sum of nodes' value on sub-tree."""
            nonlocal ans
            if not node: return 0 
            sm = fn(node.left) + fn(node.right)
            if sm == node.val: ans += 1
            return sm + node.val 
        
        ans = 0 
        fn(root)
        return ans
```

Implemented in C++ 
```
class Solution {
public:
    int equalToDescendants(TreeNode* root) {
        int ans = 0; 
        
        function<long(TreeNode*)> fn = [&](TreeNode* node) {
            if (!node) return 0l; 
            long sm = fn(node->left) + fn(node->right); 
            if (sm == node->val) ++ans; 
            return sm + node->val; 
        }; 
        
        fn(root); 
        return ans; 
    }
};
```