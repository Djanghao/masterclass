# python 3  ||  translation, mask , w/ example   ||  T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 12
**Link:** [https://leetcode.com/problems/split-array-with-same-average/solutions/2669616/](https://leetcode.com/problems/split-array-with-same-average/solutions/2669616/)

---

See *@timothyleong97*'s excellent explanation below.
```
class Solution:
    def splitArraySameAverage(self, nums: List[int]) -> bool:

        s, n, pos, neg = sum(nums), len(nums), [], []
        if n == 1: return False
                                                # Ex: nums = [5, 3, 11, 19, 2]
        def mask(arr: List) -> int:
            ans = 1
            for a in arr: ans |= (ans << a)
            return (ans-1)^(1<<sum(arr))

        nums = [n*num-s for num in nums]        # <-- translated (num-average(nums) * n:
                                                #     nums = [-15, -25, 15, 55, -30]
        if 0 in nums: return True 

        for num in nums:                        # <-- pos = [15, 55]   neg = [15, 25, 30]
            if num > 0: pos.append(num)
            else:  neg.append(-num)

        return bool(mask(pos) & mask(neg)) 
        
        # bin(mask(pos)) = 100000_0000000000_0000000000_0000000000_0000100000_0000000000
        # bin(mask(neg)) = 100000_0000100001_0000000001_0000100000_0000100000_0000000000
        #                  ^                                           ^
        #                  |                                           | 
        #               55 = 25 + 30                                15 = 15
```
[https://leetcode.com/problems/split-array-with-same-average/submissions/1272651336/](https://leetcode.com/problems/split-array-with-same-average/submissions/1272651336/)

I could be wrong, but I think that time complexity is *O*(2^*N*) and space complexity is *O*(2^*N*), in which *N* ~ `len(nums)`.
