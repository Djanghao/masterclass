# using two list and merging after

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/4948684/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/4948684/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
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
  List<int> getAllElements(TreeNode? root1, TreeNode? root2) {
    List<int> b1=[];
    List<int> b2=[];
    inOrder(root1,b1);
    inOrder(root2,b2);
    List<int> result=[...b1,...b2];
    result.sort();
    return result;

  }
  void inOrder(TreeNode? temp,List<int> arr) {
    if (temp == null) return;
    inOrder(temp.left,arr);
    arr.add(temp.val);
    inOrder(temp.right,arr);
  }
}
```