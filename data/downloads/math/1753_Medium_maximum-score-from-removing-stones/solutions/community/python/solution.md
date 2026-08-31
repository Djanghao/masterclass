# Python || simple heap property || Easy to understaand

**Author:** risky_coder
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053661/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1053661/)

---

```


a=1
b=8
c=8

import heapq
def max_score(a,b,c):
    heap = [-a,-b,-c]
    heapq.heapify(heap)

    ans =0
    while len(heap) >= 2:      # when remaining length >=2
        p1 = heapq.heappop(heap)
        p2 = heapq.heappop(heap)
        if p1+1 !=0:
            heapq.heappush(heap,p1+1)
        if p2+1 != 0:
            heapq.heappush(heap,p2+1)
        ans += 1
    return ans

print(max_score(a,b,c))

```