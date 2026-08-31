# [Python3] Eventually Nice

**Author:** awice
**Votes:** 15
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5686810/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/solutions/5686810/)

---

Consider the log of each value.  Each multiplication increases it by `log(M)`.  This makes it so that eventually `(with M > 1)`, all values are in an interval at most `log(M)` width.

Let's brute force until all values are > 1e9.  Now all log-values are in an interval of width at most `log(M)`, which means the multiplications now happen in sorted order, as every multiplication puts the value from the back of the line to the front.  So with `q*N + r` multiplications left, all the values get mulitplied `q` more times, and the first `r` values get multiplied an extra time.

# Code
```python3 []
class Solution:
    def getFinalState(self, A: List[int], K: int, M: int) -> List[int]:
        if M == 1: return A
        MOD = 10 ** 9 + 7
        N = len(A)
        
        B = [[x, i] for i,x in enumerate(A)]
        heapify(B)
        count = [0] * N

        while K and B[0][0] <= 1e9:
            K -= 1
            b, i = heappop(B)
            count[i] += 1
            heappush(B, [b * M, i])
        
        q, r = divmod(K, N)
        B.sort()
        for ix, (b, i) in enumerate(B):
            count[i] += q + (ix < r)
        
        for i, c in enumerate(count):
            A[i] *= pow(M, c, MOD)
            A[i] %= MOD
        
        return A
```