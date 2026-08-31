# DART‎️‍ One🔥loop✅100%🚀

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/2975588/](https://leetcode.com/problems/reshape-the-matrix/solutions/2975588/)

---


If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```
class Solution {
  List<List<int>> matrixReshape(List<List<int>> mat, int r, int c) {
      int m = mat.length , n = mat[0].length, total = m * n;
        if(r * c != total) return mat;
        List<List<int>> ans= List.generate(r, (i) => List.filled(c,0));
        for(int i = 0; i < total; i++) 
            ans[i ~/ c][i % c] = mat[i ~/ n][i % n];
        return ans;
  }
}
```

Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)