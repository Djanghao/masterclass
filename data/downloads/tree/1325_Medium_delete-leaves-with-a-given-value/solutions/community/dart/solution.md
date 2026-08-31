# Delete Leaves with a Given Value

**Author:** parmar__rutvik
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5169501/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5169501/)

---





# Approach
1. Use recursion that processes the tree in a post-order manner (left, right, root).
2. For each node, recursively call the function on its left and right children.
3. After processing the children, check if the current node is a leaf node with the value target. If so, delete the node by returning null.
  -> If a node have both left and right as null its a leaf node.
4. If the node is not a leaf node with the value target, return the node itself.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity ( Using java ) : 0ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# java

    if(root==null) return null;

        root.left= removeLeafNodes(root.left,target);
        root.right = removeLeafNodes(root.right,target);

        
        return root.val==target && root.left==null && root.right==null ? null : root ;

# C
    struct TreeNode* removeLeafNodes(struct TreeNode* root, int target) {
        if (root == NULL) {
            return NULL;
        }

        root->left = removeLeafNodes(root->left, target);
        root->right = removeLeafNodes(root->right, target);

        if (root->val == target && root->left == NULL && root->right == NULL) {
            return NULL;
        }

        return root;
    
    }

# Python3
        if not root:
            return None

        root.left = self.removeLeafNodes(root.left, target)
        root.right = self.removeLeafNodes(root.right, target)

        if root.val == target and not root.left and not root.right:
            return None

        return root

# C++ 
        if (root == NULL) {
            return NULL;
        }

        root->left = removeLeafNodes(root->left, target);
        root->right = removeLeafNodes(root->right, target);
    
        if (root->val == target && root->left == NULL && root->right == NULL) {
            return NULL;
        }
    
        return root;

# Dart

    if (root == null) {
        return null;
    }

    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);

    if (root.val == target && root.left == null && root.right == null) {
        return null;
    }

    return root;