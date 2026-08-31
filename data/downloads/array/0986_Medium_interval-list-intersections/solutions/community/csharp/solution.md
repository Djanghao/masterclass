# C#, simple O(n) solution

**Author:** edevyatkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/interval-list-intersections/solutions/647641/](https://leetcode.com/problems/interval-list-intersections/solutions/647641/)

---

```
public class Solution {
    public int[][] IntervalIntersection(int[][] A, int[][] B) {
        int lenA = A.Length;
        int lenB = B.Length;
        List<int[]> result = new List<int[]>();    
        int iA = 0, iB = 0;
        while (iA < lenA && iB < lenB) {
            if (A[iA][0] >= B[iB][0] && A[iA][0] <= B[iB][1] ||
                B[iB][0] >= A[iA][0] && B[iB][0] <= A[iA][1])
                    result.Add(new int[] { Math.Max(A[iA][0], B[iB][0]),
                                           Math.Min(A[iA][1], B[iB][1]) });             
            if (A[iA][1] < B[iB][1]) 
                iA++;
            else
                iB++;
        }
        return result.ToArray();
    }
}
```