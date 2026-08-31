# Easy Python Solution with Explanation [ACCEPTED]

**Author:** it_bilim
**Votes:** 40
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988209/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988209/)

---



**Explanation**
Firstly, we create an empty heap. Then go through each pair, add them into a heap, compare and pop unnecessary pairs.
**Complexity**

Time ```O(N*logN)```
Space ```O(N)```

**Python:**
```
import heapq
def eatenApples(self, A, D) -> int:
    fin, i = 0, 0
    q = []
    while i<len(A) or q:
        if i<len(A) and A[i]>0:
            heapq.heappush(q, [i+D[i],A[i]])
        while q and (q[0][0]<=i or q[0][1]==0):
            heapq.heappop(q)
        if q:
            q[0][1] -= 1
            fin += 1
        i += 1
    return fin
```