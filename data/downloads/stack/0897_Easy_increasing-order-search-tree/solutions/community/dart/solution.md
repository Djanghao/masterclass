# simple dimple (with recursion)

**Author:** sayedadinan
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/4803039/](https://leetcode.com/problems/increasing-order-search-tree/solutions/4803039/)

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
    List<int>store=[];
  TreeNode? increasingBST(TreeNode? root) {
      inorder(root);
     TreeNode? newnode;
     TreeNode? current;
     while(store.isNotEmpty){
      TreeNode newval=TreeNode(store.removeAt(0));
       if(newnode==null){  // this is creating a tree like only to right side and that is taking from that sorted array and that adding to newnode it means newroot or new tree 
           newnode=newval;
           current=newnode;
       }else{
           current?.right=newval;
         current=newval;  
       }
     }
    return newnode; // and returning that modified tree
  }
      inorder(TreeNode? root){//sorting that tree with inorder funtion
        if(root==null){
            return null;
        }
        inorder(root.left);
        store.add(root.val);
        inorder(root.right);
    }
}
```