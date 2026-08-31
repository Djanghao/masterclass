# Java easy and intuitive solution

**Author:** ruperrrrt
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/376306/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/376306/)

---

Using 3 arrays
we have 1, 2, 3, 4, 5, 6  index
countSum is total number of occurrences with each index in either A or B
countA is total number of occurrences with each index only in A but not in B
countB is total number of occurrences with each index only in B but not in A
Only if countSum[i] = A.length will the problem have a solution

return `Math.min(countA, countB)`  since no need for swap when A[i] = B[i] 
```
class Solution {
    public int minDominoRotations(int[] A, int[] B) {
        int len  = A.length;
        int[] countSum = new int[7], countA = new int[7], countB = new int[7];
		
        for(int i = 0 ; i < len; i++) {
            if(A[i] == B[i]) 
                countSum[A[i]]++;
            else {
                countSum[A[i]]++;
                countSum[B[i]]++;
                countA[A[i]]++;
                countB[B[i]]++;
            }
        }
        
        for(int i = 1; i <= 6; i++) {
            if(countSum[i] == len) 
                return Math.min(countA[i], countB[i]);
        }
        
        return -1;
    }
}
```