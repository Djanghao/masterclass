# C++ | Super Simple DFS | Easy Understanding Solution

**Author:** shubhammishra115
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/2046675/](https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/solutions/2046675/)

---

**Time Complexity O(n)
Space Complexity O(h), where h is height of binary tree.**

```
TreeNode* ans;
    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) 
    {
        if (cloned == NULL)
            return cloned;
        if (cloned->val == target->val) // If target node found in cloned tree save it into a variable.
            ans = cloned;
        getTargetCopy(original, cloned->left, target);
        getTargetCopy(original, cloned->right, target);
        return ans;
    }
```

Hope you like it.