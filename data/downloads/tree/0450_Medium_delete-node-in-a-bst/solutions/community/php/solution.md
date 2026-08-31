# PHP O(log h) with comments

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4091905/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4091905/)

---

# Code
```
class Solution {
    function deleteNode($root, $key) {
        // Base case: if the tree is empty, return null.
        if (!$root) return $root;

        // If the key is greater than the root's value, 
        // delete the node in the right subtree.
        if ($key > $root->val) {
            $root->right = $this->deleteNode($root->right, $key);
        } 
        // If the key is smaller than the root's value, 
        // delete the node in the left subtree.
        elseif ($key < $root->val) {
            $root->left = $this->deleteNode($root->left, $key);
        } 
        // Key matches the root's value, delete this node.
        else {
            // Node with only one child or no child.
            if (!$root->left) return $root->right;  // No left child.
            if (!$root->right) return $root->left;  // No right child.

            // Node with two children. Get the in-order successor 
            // (smallest in the right subtree).
            $cur = $root->right;
            while ($cur->left) {
                $cur = $cur->left;
            }

            // Copy the in-order successor's value to this node.
            $root->val = $cur->val;

            // Delete the in-order successor.
            $root->right = $this->deleteNode($root->right, $cur->val);
        }

        // Return the root node.
        return $root;
    }
}

```