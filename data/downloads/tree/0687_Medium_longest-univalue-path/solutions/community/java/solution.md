# Java || Easy Approach with Explanation || Postorder

**Author:** swapnilGhosh
**Votes:** 10
**Link:** [https://leetcode.com/problems/longest-univalue-path/solutions/1427807/](https://leetcode.com/problems/longest-univalue-path/solutions/1427807/)

---

```
class Solution 
{
    private int Lpath= 0;//maximum univalued path length
    public int longestUnivaluePath(TreeNode root) 
    {
        pathCalculator(root);//helps to calculate the univalued path 
        return  Lpath;
    }
    private int pathCalculator(TreeNode root)
    {//postorder traversal DFS
       if(root == null)//base case, we we hit null node 
          return 0;//we tell the parent that there is no node ahed of this point and no need to traverse
      
       int left= pathCalculator(root.left);//recursing down the left subtree and knowing about the left child 
       int right= pathCalculator(root.right);//recursing down the right subtree and knowing about the right child 
      
       int Tleft= 0, Tright= 0;//total path achived in left and right path 
      
       //Root or Parent 
       if(root.left != null && root.left.val == root.val)
          Tleft+= left + 1;//increasing the edge count, if this two end vertex are same 
      
       if(root.right != null && root.right.val == root.val)
          Tright+= right+ 1;//increasing the edge count, if this two end vertex are same 
      
       Lpath= Math.max(Lpath, Tleft + Tright);//current maximum path achived 
      
       return Math.max(Tleft, Tright);//moving forward, we only choose one max(frequency count high) path to move ahed 
    }
}//Please do Upvote, it helps a lot 
```