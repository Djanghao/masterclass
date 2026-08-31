# better solution

**Author:** subruZz
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4948648/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/4948648/)

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
    int sum=0;
  int sumEvenGrandparent(TreeNode? root) {
    dfs(root,null,null);
      return sum;
  }
  void dfs(TreeNode? temp,TreeNode? p, TreeNode? gp){
    if(temp==null)return;
    if(gp!=null&&gp.val%2==0){
        sum+=temp.val;
    }
    dfs(temp.left,temp,p);
    dfs(temp.right,temp,p);
  }
}
```