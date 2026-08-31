# C++ Simple and Clean Solution, With Easy Detailed Explanation

**Author:** YehudisK
**Votes:** 16
**Link:** [https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/1407162/](https://leetcode.com/problems/merge-bsts-to-create-single-bst/solutions/1407162/)

---

**Explanation:**
1. First, for easy search and access, we map all our roots in an unordered_map roots: [value->root].
    We also put all leafs in a set `leaves` to be able to find our new root.
2. The result root will be the one which is not found in any trees leaves, because otherwise in the resulting tree there will be two nodes with the same value, and that's impossible as we need each node to be strictly greater/less than parent.
So `getRoot` function checks which root doesn't appear in the leaves set.
Then we can remove the new root from the roots map.
3. Now, all we have to do is recursively find leaves that are in the roots node and merge trees.
	We create a `tmp` node to keep the current node.
	If we found a node that appears in the roots map, tmp = roots[root->val]. Otherwise, it stays `root`.
	We can remove it from roots map and recursively do the same for left node and right node.
4. Last, is to check that our result is a valid BST and we used all trees given.
```
class Solution {
public:
    bool isBST(TreeNode* root, long top, long bottom) {
        if (!root) return true;
        if (root->val >= top || root->val <= bottom) return false; 
        return isBST(root->left, root->val, bottom) && isBST(root->right, top, root->val);
    }

    TreeNode* getTree(TreeNode* root) {
        if (!root) return NULL;
        TreeNode* tmp =  roots.count(root->val) ? roots[root->val]: root;
        roots.erase(root->val);
        root->left = getTree(tmp->left);
        root->right = getTree(tmp->right);
        return tmp;
    }
    
    TreeNode* getRoot(vector<TreeNode*>& trees) {
        for (auto root : trees) {
            if (!leaves.count(root->val)) return root;
        }
        return NULL;
    }
    
    TreeNode* canMerge(vector<TreeNode*>& trees) {
        for (auto root : trees) {
            roots[root->val] = root;
            if (root->left) leaves.insert(root->left->val);
            if (root->right) leaves.insert(root->right->val);
        }
        
        TreeNode* new_root = getRoot(trees);
        if (!new_root) return NULL;
        roots.erase(new_root->val);
        
        getTree(new_root);
        
        return isBST(new_root, 2147483648, -2147483649) && !roots.size() ? new_root : NULL;
            
    }
    
private:
    unordered_map<int, TreeNode*> roots;
    unordered_set<int> leaves;
};
```
**like it? please upvote!**