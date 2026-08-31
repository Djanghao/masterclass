# ✅ Well Detailed Explanation [Java , C++, Python] 🧠 Beats around 100% users.

**Author:** trishitchar
**Votes:** 37
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/3801194/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/3801194/)

---

![image.png](./images/0.png)

# \u2705 \u2B06\uFE0F  Approach 1 - iterative method \u2B06 \u267B\uFE0F

In **CPP** or **JAVA** or **PYTHON**, the main difference is nothing. Only have to change 1-2 **word** in **syntax**. Otherwise the whole code and concept will remain same.
 
```
Well defined and describeed in code. Please upvote if it helped.
```

# Complexity
- Time complexity : O(logn)

- Space complexity : O(logn)

# Code
```
     if (root == NULL)
        return new TreeNode(val);
    
    // Create a temporary pointer 'temp' to store the original root node.
    TreeNode* temp = root;
    
    // Start a while loop to find the appropriate position to insert the new value.
    while (root) {
        // If the value to insert (val) is greater than or equal to the current node's value, move to the right subtree.
        if (root->val <= val) {
            // If the right child exists, move 'root' to the right child and continue the loop.
            if (root->right != NULL)
                root = root->right;
            // If the right child is NULL, it means we have found the appropriate place to insert the new value.
            // Create a new node with the given value and set it as the right child of the current node.
            else {
                root->right = new TreeNode(val);
                // Break out of the loop as the insertion is complete.
                break;
            }
        }
        // If the value to insert (val) is less than the current node's value, move to the left subtree.
        else {
            // If the left child exists, move 'root' to the left child and continue the loop.
            if (root->left != NULL)
                root = root->left;
            // If the left child is NULL, it means we have found the appropriate place to insert the new value.
            // Create a new node with the given value and set it as the left child of the current node.
            else {
                root->left = new TreeNode(val);
                // Break out of the loop as the insertion is complete.
                break;
            }
        }
    }
    
    // Return the original root (temp) of the modified tree after the insertion.
    return temp;
    }
};


```

# \u2705 \u2B06\uFE0F  Approach 1 - recursive method \u2B06 \u267B\uFE0F 

```
Well defined and describeed in code. Please upvote if it helped.
```

# Complexity
- Time complexity : O(logn)

- Space complexity : O(logn)

# Code
```
// If the tree is empty, create a new node with the given value and return it as the new root.
        if(root == NULL) return new TreeNode(val);

        // Compare the value to insert (val) with the current node's value.
        if (val > root->val)
            // If the value to insert is greater than the current node's value, recursively insert it into the right subtree.
            root->right = insertIntoBST(root->right, val);
        else
            // If the value to insert is less than or equal to the current node's value, recursively insert it into the left subtree.
            root->left = insertIntoBST(root->left, val);

        // Return the root of the modified tree after the insertion.
        return root;
```