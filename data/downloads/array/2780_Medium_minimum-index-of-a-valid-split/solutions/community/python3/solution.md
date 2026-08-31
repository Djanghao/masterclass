# Python 3   ||   6 lines,  one ptr   ||   T/S: 95% / 90%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3774521/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3774521/)

---

It's possible, using the relevant linear inequalities and elementary algebra, to derive the necessary and sufficient conditions `if cut < 2: return -1` and `if 1 < left - i <= cut: return i` for a valid split at index`i`. 
```
class Solution:
    def minimumIndex(self, nums: List[int]) -> int:

        dom, cnt = max(Counter(nums).items(), key = lambda x: x[1])
        left, cut = 0, 2*cnt - len(nums)

        if cut < 2: return -1

        for i, num in enumerate(nums):

            left+= 2*(num == dom)
            if 1 < left - i <= cut: return i
```
[https://leetcode.com/problems/minimum-index-of-a-valid-split/submissions/1233432321/](https://leetcode.com/problems/minimum-index-of-a-valid-split/submissions/1233432321/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.