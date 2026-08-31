# [Python3] priority queue

**Author:** ye15
**Votes:** 24
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390207/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390207/)

---


```
class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        pq = [-x for x in piles]
        heapify(pq)
        for _ in range(k): heapreplace(pq, pq[0]//2)
        return -sum(pq)
```

The solutions for weekly 255 can be found in this [commit](https://github.com/gaosanyong/leetcode/commit/312849ed66e5ad76fa278cbb34dd57772fb3ceeb).