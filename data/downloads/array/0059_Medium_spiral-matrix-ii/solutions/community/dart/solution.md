# ‎️‍🔥 DART‎️‍ 🔥100%🚀✅

**Author:** Mahmoud_Zakaria
**Votes:** 2
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3505875/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3505875/)

---

# Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> generateMatrix(int n) {
      int r1=0, r2=n-1, c1=0, c2=n-1, k=1;
        List<List<int>> res=
        List.generate(n, (_) =>List.filled(n, 0, growable: false));
        while(r1<=r2 && c1<=c2){
            for(int i=c1; i<=c2; i++)res[r1][i]=k++;r1++;
            for(int i=r1; i<=r2; i++)res[i][c2]=k++;c2--;
            for(int i=c2; i>=c1; i--)res[r2][i]=k++;r2--;
            for(int i=r2; i>=r1; i--)res[i][c1]=k++;c1++;
        }
        return res ;
  }
}
```