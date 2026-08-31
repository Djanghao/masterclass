# BEATS 100% BFS simple DART solution

**Author:** Mohamed_Sadeck
**Votes:** 0
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4801902/](https://leetcode.com/problems/even-odd-tree/solutions/4801902/)

---


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
  bool isEvenOddTree(TreeNode? root) {
    if(root==0) return false;
    bool even=true;
    List<TreeNode?> q=[root];
    while(q.isNotEmpty){
        int len = q.length;
        int last=0;
        for(int i=0;i<len;i++){
            TreeNode? temp = q.removeAt(0);
            int val = temp!.val;
            if(even && val%2==0 || !even && val%2==1) return false;
            if((even && val<=last|| !even && val>=last) && i!=0) return false;
            last=val;
            if(temp.left!=null) q.add(temp.left);
            if(temp.right!=null) q.add(temp.right);
        }
        even=!even;
    }
    return true;
  }
}
```