# Both Iterative and Recursive solutions, 4 lines each, simple and easy to read

**Author:** IlIllIIlIllIIl
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4224072/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/4224072/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(log_2(n))$$ where `n = number of nodes` for both Iterative and Recursive

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ for Iterative, $$O(n)$$ where `n = number of nodes` for Recursive (due to size of callstack)

# Code
```
// Iterative
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    while (root !== null && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    }
    return root;
};

// Recursive
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val < val) return searchBST(root.right, val);
    if (root.val > val) return searchBST(root.left, val);
};
```