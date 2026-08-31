# SImple Dart Solution (DFS)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/cousins-in-binary-tree/solutions/3589864/](https://leetcode.com/problems/cousins-in-binary-tree/solutions/3589864/)

---

# Approach
//Given a binary tree return if the nodes with values
//x and y are cousins meaning they are at the same depth
//but do not have the same parent nodes. 

//To solve this I used DFS to find the depth of the respective nodes, and
//the parent of the target nodes.
//I then compared them to see if they were the same. If they are then they are
//not cousins if they are not then they are.

//Time: 300ms Beats: 100%
//Memory: 142.9MB Beats: 100%

# Code
```
class Solution {
  bool isCousins(TreeNode? root, int x, int y) {  
      CurrNode? x_node = searchForNode(root,x,0,null);
      CurrNode? y_node = searchForNode(root,y,0,null);
      if(x_node == null || y_node == null){
          return false;
      }
      if(x_node.depth != y_node.depth || x_node.parent == y_node.parent){
          return false;
      }
      return true;
}
    CurrNode? searchForNode(TreeNode? root, int target, int depth , TreeNode? parent){
        if(root == null){
            return null;
        }
        if(root.val == target){
            return CurrNode(parent, depth);
        }
        CurrNode? left = searchForNode(root.left, target, depth + 1 , root);
        CurrNode? right = searchForNode(root.right, target, depth + 1 , root);
        if(left != null){
            return left;
        }
        return right;
    }
}
class CurrNode{
    TreeNode? parent;
    int depth;
    CurrNode( this.parent, this.depth);
}

```