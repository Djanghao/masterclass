# [C++] Beats 100% on Space and Time (with Explanation)

**Author:** leetcodegrindtt
**Votes:** 18
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/442725/](https://leetcode.com/problems/binary-tree-pruning/solutions/442725/)

---

```
class Solution {
private:
    
    // Take root by reference so changes persist
    TreeNode* pruneOurTree(TreeNode*& root) {
        if (!root) return nullptr;
		// Go to the bottom of the tree first.
        root->left = pruneOurTree(root->left);
        root->right = pruneOurTree(root->right);
		
		// We only trim if the node's value is 0 and it doesn't have kids
        if (root->val == 0 && root->left == nullptr && root->right == nullptr) {
		// We get rid of it by setting the node to nullptr;
            return nullptr;
        }
		// Otherwise we leave the node the way it is
        return root;
    }
    
    
public:
    
    TreeNode* pruneTree(TreeNode* root) {
        pruneOurTree(root);
        return root;
    }
};