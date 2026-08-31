# Runtime 342 ms Beats🔥100%🚀Dart

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/2913704/](https://leetcode.com/problems/excel-sheet-column-number/solutions/2913704/)

---




If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB



# Code
```
class Solution {
  int titleToNumber(String columnTitle) {
      int res =0 ;
        for(int i=0; i<columnTitle.length;i++){
            int s = columnTitle.codeUnits[i] - 64 ;//64=codeUnits['A'] -1
            res=res*26+s ;
        }
        return res ;
  }
}
```
Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)