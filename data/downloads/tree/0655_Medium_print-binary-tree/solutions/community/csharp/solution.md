# C# DFS Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-binary-tree/solutions/5264436/](https://leetcode.com/problems/print-binary-tree/solutions/5264436/)

---

# Approach
<!-- Describe your approach to solving the problem. -->//  GetHeight: This function computes the height of the tree. It is used to determine the number of rows m and columns
//  n in the result matrix.
//  PrintTree: This function initializes the result matrix 'res' with empty strings and calls the 'Fill' function to
//  populate it with the tree values.
//  Fill: This recursive function places each node value in its appropriate position in the result matrix based on the 
//  given rules. It uses cLeft and cRight to determine the correct column position for each node.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(m*n).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(m*n).
___

# Code
```
using System;
using System.Collections.Generic;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public IList<IList<string>> PrintTree(TreeNode root) {
        int height = GetHeight(root);
        int m = height + 1;
        int n = (1 << (height + 1)) - 1;    // Equivalent to 2^(height + 1) - 1

        var res = new List<IList<string>>();
        for (int i = 0; i < m; i++) {
            var row = new List<string>(new string[n]);
            for (int j = 0; j < n; j++) {
                row[j] = "";
            }
            res.Add(row);
        }

        Fill(res, root, 0, 0, n - 1, height);
        return res;
    }

    private int GetHeight(TreeNode root) {
        if (root == null) return -1;
        return 1 + Math.Max(GetHeight(root.left), GetHeight(root.right));
    }

    private void Fill(IList<IList<string>> res, TreeNode root, int r, int cLeft, int cRight, int height) {
        if (root == null) return;
        int c = (cLeft + cRight) / 2;
        res[r][c] = root.val.ToString();
        Fill(res, root.left, r + 1, cLeft, c - 1, height);
        Fill(res, root.right, r + 1, c + 1, cRight, height);
    }
}
```