# Runtime 289 ms Beats 100%🚀Dart

**Author:** Mahmoud_Zakaria
**Votes:** 1
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/2868263/](https://leetcode.com/problems/balanced-binary-tree/solutions/2868263/)

---

If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```

class Solution {
      int cnt(TreeNode? nod  ){
        if (nod==null) return 0 ;
        int l = cnt(nod.left) ;
        if(l==-1) return-1 ;
        int r = cnt(nod.right) ;
        if(r==-1) return-1 ;
        if  ( (r-l > 1)|| (l-r >1) ) return -1 ;
        return( l >= r ? l+1 : r+1 )  ;

    }
        
  bool isBalanced(TreeNode? root) {
      return cnt(root) != -1 ;

  }
}
```



Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)