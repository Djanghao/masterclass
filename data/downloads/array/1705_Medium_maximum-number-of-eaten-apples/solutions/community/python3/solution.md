# Python ACCEPTED solution with detailed explanation.

**Author:** ravi_blu3
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988630/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/988630/)

---

Explanation:
You should keep track of the available apples on daily basis and consume ones which will rot earlier. We can use a heap ```h```  which will store lists. Each list in the heap will contain the data related to the batch of apples of a day. The first element in the list will tell us till how many days the apple in that batch will stay fresh. The second element will tell how many apples are left in the same batch which can be consumed.

Complexity:
Time ```O(NlogN)``` Each batch will be inserted and popped from the heap once.
Space ```O(N)``` Maximum size of the heap.

Code:
```
from heapq import heappush, heappop
class Solution:
    def eatenApples(self, A: List[int], D: List[int]) -> int:
        ans, i, N = 0, 0, len(A)
        h = []
        while i < N or h:
            # only push to heap when you have a valid i, and the apple has atleast one day to stay fresh.
            if i<N and A[i] > 0:
                heappush(h, [i+D[i], A[i]])
            # remove the rotten apples batches and the batches with no apples left (which might have got consumed).
            while h and (h[0][0] <= i or h[0][1] <= 0):
                heappop(h)
            # only if there is batch in heap after removing all the rotten ones, you can eat. else wait for the subsequent days for new apple batch by incrementing i.
            if h:
                h[0][1]-=1
                ans+=1
            i+=1
        return ans 
```



