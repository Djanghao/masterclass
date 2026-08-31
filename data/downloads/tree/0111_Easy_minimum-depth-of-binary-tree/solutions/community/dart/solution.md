# Dart simple solution  recursive

**Author:** Mahmoud_Zakaria
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2875847/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/2875847/)

---

DFS recursive approach.

If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```

class Solution {
  int minDepth(TreeNode? root) {
       if (root==null)return 0 ;
        int l=minDepth(root.left);
        int r=minDepth(root.right);
        if(l==0||r==0)return l+r+1 ;
        return min(l,r)+1;

  }
}
```



Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)



