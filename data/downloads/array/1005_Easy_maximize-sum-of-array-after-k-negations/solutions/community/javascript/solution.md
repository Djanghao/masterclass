# Javascript concise

**Author:** Swanand06
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/1191474/](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/solutions/1191474/)

---

```
var largestSumAfterKNegations = function(A, K) {
    while(K > 0 ){ 
        let v = Math.min(...A)
        let i = A.indexOf(v)
        A[i] = - A[i]
        K--
    }
    
    return A.reduce((a,c) => a+c,0)
};