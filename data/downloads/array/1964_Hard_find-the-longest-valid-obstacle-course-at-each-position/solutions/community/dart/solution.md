# Solution using dart

**Author:** abdulrahmanhaney
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3496521/](https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/solutions/3496521/)

---


# Code
```
class Solution {
  List<int> longestObstacleCourseAtEachPosition(List<int> A) {
    List<int> piles = [A[0]];
    List<int> res = List<int>.filled(A.length, 1);
    
    for (int i = 1; i < A.length; i++) {
      int cur = A[i];
      int l = 0;
      int r = piles.length - 1;
      
      while (l < r) {
        int m = (l + r) ~/ 2;
        if (piles[m] <= cur)
          l = m + 1;
        else
          r = m;
      }
      
      if (piles[l] <= cur) l++;
      if (l < piles.length)
        piles[l] = cur;
      else
        piles.add(cur);
      
      res[i] = l + 1;
    }
    
    return res;
  }
}

```