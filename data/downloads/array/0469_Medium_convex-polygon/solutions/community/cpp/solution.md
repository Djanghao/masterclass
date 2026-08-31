# C++ 5-liner O(N) checking convexity with cross product of adjacent vectors (detailed explanation)

**Author:** zzg_zzm
**Votes:** 22
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/95590/](https://leetcode.com/problems/convex-polygon/solutions/95590/)

---

Great solution inspired by @Ipeq1! Here is a C++ version with extracted determinant calculation.

The key observation for convexity is that **vector p<sub>i+1</sub>-p<sub>i</sub> always turns to the same direction to p<sub>i+2</sub>-p<sub>i</sub> formed by any 3 sequentially adjacent vertices, i.e., cross product (p<sub>i+1</sub>-p<sub>i</sub>) x (p<sub>i+2</sub>-p<sub>i</sub>) does not change sign when traversing sequentially along polygon vertices**. 

Note that for any 2D vectors **v<sub>1</sub>**, **v<sub>2</sub>**,
* **v<sub>1</sub> x v<sub>2</sub> = det([v<sub>1</sub>, v<sub>2</sub>])**

which is the determinant of 2x2 matrix **[v<sub>1</sub>, v<sub>2</sub>]**. And the sign of **det([v<sub>1</sub>, v<sub>2</sub>])** represents the positive z-direction of right-hand system from **v<sub>1</sub>** to **v<sub>2</sub>**. So **det([v<sub>1</sub>, v<sub>2</sub>]) &ge; 0** if and only if **v<sub>1</sub>** turns at most 180 degrees **counterclockwise** to **v<sub>2</sub>**.
![0_1480993864673_Right_hand_rule_cross_product.png](/uploads/files/1480993854384-right_hand_rule_cross_product.png) 

**Version 1:** use `pos, neg` as `0-1` flags to store if positive or negative determinant has ever been encountered:
```
    bool isConvex(vector<vector<int>>& p) {
      for (int i=0, pos=0, neg=0, n=p.size(); i < n; ++i) {
        long det = det2({p[i], p[(i+1)%n], p[(i+2)%n]});
        if ((pos|=(det>0))*(neg|=(det<0))) return false;
      }    
      return true;
    }
    // determinant of 2x2 matrix [A1-A0, A2-A0]
    long det2(const vector<vector<int>>& A) {
    	return (A[1][0]-A[0][0])*(A[2][1]-A[0][1]) - (A[1][1]-A[0][1])*(A[2][0]-A[0][0]);
    }
```
**Version 2:** use `prev` and `cur` to store previous and current non-zero determinants:
```
    bool isConvex(vector<vector<int>>& p) {
      for (long i = 0, n = p.size(), prev = 0, cur; i < n; ++i)
        if (cur = det2({p[i], p[(i+1)%n], p[(i+2)%n]})) 
          if (cur*prev < 0) return false; 
          else prev = cur;

      return true;
    }
```