# Kotlin easy to understand

**Author:** harshithakv
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/513149/](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/solutions/513149/)

---

```
class Solution {
    fun minDominoRotations(A: IntArray, B: IntArray): Int {
      if(A[0] == B[0]) return count(A,B,A[0])
      else return Math.max(count(A,B,A[0]), count(A,B,B[0]))  
    }
     fun count(A: IntArray , B: IntArray, target:Int): Int{
      var bot =0
      var top =0
      var n = A.size
      
      for(i in 0 until n){
        if(A[i] != target && B[i] != target) return -1
        else if (A[i] != target ) top++
        else if (B[i] != target) bot++
      }
      return Math.min(bot,top)
    }
}
```