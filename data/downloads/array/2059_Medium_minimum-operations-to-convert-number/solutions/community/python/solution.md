# Python 3   ||   10 lines,  queue and sets, w/comments   ||   T/S: 82% / 76%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/2837283/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/2837283/)

---

```
class Solution:
    def minimumOperations(self, nums: List[int], start: int, goal: int) -> int:

        queue, unseen = deque([(start, 1)]), set(range(1001))   # queue: contains still-possible candidates  
                                                                # unseen: takes care of already seen and negs
        while queue:
            x, ct = queue.popleft()
            for n in nums:

                for cand in {x+n, x-n, x^n}:                    # <-- set here reduces redundant checks
                    if cand == goal: return ct                  #     (for example x, n = 3, 0)

                    if 0 <= cand <= 1000 and cand in unseen:
                        queue.append((cand, ct + 1))
                        unseen.remove(cand)
                    
        return -1
```
[https://leetcode.com/problems/minimum-operations-to-convert-number/submissions/1285367978/](https://leetcode.com/problems/minimum-operations-to-convert-number/submissions/1285367978/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.