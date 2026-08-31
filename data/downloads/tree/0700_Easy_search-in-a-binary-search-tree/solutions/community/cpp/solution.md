# 2 approach with great explanation. Beats 84% user.  Recursive and Looping

**Author:** trishitchar
**Votes:** 57
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/3794032/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/3794032/)

---

![Screenshot 2023-07-20 234618.png](./images/0.png)

# \u2705 \u2B06\uFE0F --- Soln -  1 ---  \u2B06 \u267B\uFE0F
# \uD83E\uDD29 Intuition and Approach - Recursive \uD83E\uDD73

the searchBST function is a recursive function that searches for a specific target value in a binary search tree (BST). The function starts its search from the root of the BST and traverses down the tree based on the comparison of the target value with the values of nodes. If the target value is found in the tree, the function returns the corresponding TreeNode*, otherwise, it returns NULL to indicate that the target value is not present in the BST.

# Complexity
- Time complexity: O(log n)

- Space complexity: O(log n)


# Code
```

class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int target) {

        if(root->val == target) return root;

        //if the target is lesser than the root->val, then 
        else if(root->val > target) return searchBST(root->left,target);
        else return searchBST(root->right, target);

        // If the root is null (i.e., the tree is empty) or we have reached a leaf node,
        // we cannot find the target in the tree, so we return null.
        if (root == NULL) return NULL;

        // If the current node's value is equal to the target value,
        // then we have found the node containing the target value, so we return this node.
        if (root->val == target) return root;

        // If the target value is lesser than the current node's value,
        // we need to search in the left subtree of the current node.
        // So we recursively call the searchBST function with the left child of the current node.
        else if(root->val > target) return searchBST(root->left,target);

        // If the target value is greater than the current node's value,
        // we need to search in the right subtree of the current node.
        // So we recursively call the searchBST function with the right child of the current node.
        else return searchBST(root->right, target);

        
    }
};
```
# \u2B06\uFE0F\u2705---  Soln - 2  --- \uD83E\uDD73

# \uD83E\uDD29 Intuition and Approach \u267B\uFE0F
while loop to traverse the binary search tree iteratively, moving to the left or right subtree based on the comparison of the target value with the values of nodes. If the target value is found in the tree, the function returns the corresponding TreeNode*, otherwise, it returns NULL to indicate that the target value is not present in the BST. 

```
    // The loop continues until either the root becomes NULL (end of the tree) or
    // the root's value matches the target value.
    while (root != NULL && root->val != target) {

        // If the current node's value is greater than the target value,
        // move to the left subtree to continue the search.
        if (root->val > target)
            root = root->left;

        // If the current node's value is lesser than the target value,
        // move to the right subtree to continue the search.
        else
            root = root->right;
    }

    // Return the current node (which contains the target value) if found,
    // or NULL if the target value is not present in the BST.
    return root;
```

