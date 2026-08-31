# Python 3 || 16 lines, heap || T/S: 87% / 15%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4885043/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4885043/)

---

```
class Solution:
    def unmarkedSumArray(self, nums: List[int], 
                               queries: List[List[int]]) -> List[int]:

        n, sm = len(nums), sum(nums)
        unmarked, ans = set(range(n)), []

        heap = list(zip(nums,range(len(nums))))
        heapify(heap)

        for idx, k in queries:

            if idx in unmarked:
                sm -= nums[idx]
                unmarked.discard(idx)

            while k and heap:

                num, idx = heappop(heap) 

                if idx in unmarked:               
                    unmarked.discard(idx)
                    k-= 1
                    sm-= num

            ans.append(sm)

        return ans
```
[https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/submissions/1205578480/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/submissions/1205578480/
)



I could be wrong, but I think that time complexity is *O*(*N* log *N* + *O*(*Q* log *N*)) and space complexity is *O*(*N*), in which *N* ~ `len(nums)` and  *Q* ~ `len(queries)`.