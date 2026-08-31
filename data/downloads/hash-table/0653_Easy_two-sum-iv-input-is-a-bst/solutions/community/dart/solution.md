# Simple solution using python and dart

**Author:** HELINITY
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/3491062/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/3491062/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Dart 
```
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
  bool findTarget(TreeNode? root, int k) {
    List<int> arr = [];
    void inOrderTraversal(TreeNode? tree) {
      if (tree?.left != null) inOrderTraversal(tree?.left);
      arr.add(tree?.val ?? 0);
      if (tree?.right != null) inOrderTraversal(tree?.right);
    }
    inOrderTraversal(root);
    if (arr.length == 1 && !arr.contains(k)) return false;
    int l = 0, r = arr.length - 1;
    while (arr[l] != arr[r]) {
      int n = arr[l] + arr[r];
      if (n == k) return true;
      if (n < k) {
        l++;
      } else {
        r--;
      }
    }
    return false;
  }
}
```
# Python
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        arr = []
        def inOrderTraversal(tree):
            if tree.left:inOrderTraversal(tree.left)
            arr.append(tree.val)
            if tree.right:inOrderTraversal(tree.right)
        inOrderTraversal(root)
        if len(arr)==1 and k not in arr:return False
        l,r=0,-1
        while arr[l]!=arr[r]:
            n=arr[l]+arr[r]
            if n==k:return True
            if n<k:l+=1
            if n>k:r-=1
        return False
```