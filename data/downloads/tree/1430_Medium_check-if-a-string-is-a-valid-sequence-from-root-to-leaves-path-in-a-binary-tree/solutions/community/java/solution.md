# Java Solution | DFS | O(n) time

**Author:** bwanave
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2336108/](https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/solutions/2336108/)

---

```

class Solution {
    public boolean isValidSequence(TreeNode root, int[] arr) {
        return isValidSequence(root, arr, 0);
    }

    public boolean isValidSequence(TreeNode root, int[] arr, int idx) {

        if (root == null || idx == arr.length) return false;

        if (root.val != arr[idx]) return false;

        if (root.left == null && root.right == null && idx == arr.length - 1) return true;
        
        return isValidSequence(root.left, arr, idx + 1) || isValidSequence(root.right, arr, idx + 1);
    }
}
```