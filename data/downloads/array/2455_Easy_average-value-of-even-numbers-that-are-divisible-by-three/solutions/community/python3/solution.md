# Python 3  ||   2 lines   ||    T/S: 94% / 99%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2758446/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/solutions/2758446/)

---

```
class Solution:
    def averageValue(self, nums: List[int]) -> int:
        
        nums = [n for n in nums if not n%6]
        
        return sum(nums)//len(nums) if nums else 0
```
[https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/submissions/1290348966/](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/submissions/1290348966/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.