# JAVA EASIEST SOLUTION -WITH CLEAR EXPLANATION OF LOGIC!

**Author:** dani_danielsOO
**Votes:** 81
**Link:** [https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/589059/](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/solutions/589059/)

---

ok lets do this!!
so we are given an array which is the preorder traversal of the some tree!
we are used to traverse a tree a but are not privy to reconstruct the tree from the array!!
anyways!!!
so we are given an array whose first element is the root of out tree!!(because of preorder traversal)!
NOTE:this is not a linear solution!i have posted linear solutions here https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/discuss/589801/JAVA-3-WAYS-TO-DO-THE-PROBLEM!-O(N)-APPROACH
BUT i strongly suggest you go through this soution below so that you can get the gist of the logic and then move on to the more complex linear solutions i posted!

LETS DO THIS:

so we follow  steps:
1>we create the node
2>we traverse the array for values which are less than the current node!-- these values will become our left subtree.we stop whenever we get a value larger than the current root of the subtree!
3>we take the rest of the array(values whuch are greater than the value of the current root)-these are the values which will make out right subtree!

so we make a root!
make the left subtree(recursively)
then make right subtree(recursively)


code here!!
do a couple of dry runs!
u will get it!

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode bstFromPreorder(int[] preorder) {
     return helper(preorder, 0, preorder.length - 1);   
    }
    
    private TreeNode helper(int[] preorder, int start, int end) {
        if(start > end) return null;
        
        TreeNode node = new TreeNode(preorder[start]);
        int i;
        for(i=start;i<=end;i++) {
        if(preorder[i] > node.val)
            break;
        }
        
        node.left = helper(preorder, start+1, i-1);
        node.right = helper(preorder, i, end);
        return node;
        
        
        
    }
    
    
}
```

hope it helps!!

