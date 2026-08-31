# Simple C# Solution

**Author:** FranklynIhesiulo
**Votes:** 1
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/1870227/](https://leetcode.com/problems/recover-binary-search-tree/solutions/1870227/)

---

```
public class Solution {
    TreeNode previous= null;    
    TreeNode firstWrong= null;
    TreeNode secondWrong= null;
    public void RecoverTree(TreeNode root) {
      
        inOrder(root,ref previous, ref firstWrong, ref secondWrong);
        
        var temp= firstWrong.val;
        firstWrong.val= secondWrong.val;
        secondWrong.val=temp;
    }
    
     public void inOrder(TreeNode root, ref TreeNode previous, ref TreeNode firstWrong, ref TreeNode secondWrong) {
         
         if (root == null) return;
         
         inOrder(root.left,ref previous, ref firstWrong, ref secondWrong);
         
         //This block of code will be executed only twice, which will be when it meets the wrong nodes. 
         //For the First Execution, the greater one will be the firstWrongNode
         //For the second execution, the lesser one will be the second wrong node. 
         if(previous!=null && previous!=root&&previous.val>=root.val)
         {
             firstWrong=firstWrong==null?previous:firstWrong;                                                               
             secondWrong=root; 
         }
         previous=root;
         
        inOrder(root.right,ref previous, ref firstWrong, ref secondWrong);
    }
}

```