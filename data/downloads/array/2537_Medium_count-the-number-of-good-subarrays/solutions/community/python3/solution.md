# Python 3   ||   11 lines,  two pointers, dict   ||   T/S: 87% / 98%

**Author:** Spaulding_
**Votes:** 18
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3053838/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3053838/)

---

Here's the plan:
1. We increment`right` and use a dict `d` to keep track of the count of each integer in `nums[:right+1]`.
2. Once the number of pairs reaches`k`, we add the count of subarrays with subarray `[right+1]`to`ans`].
3. We increment`left`and adjust`d`. If we still have`k`pairs, we add a similar count to `ans`and increment `left`again. If not, we iterate`right`and start again.
4. Once`right`iterates`nums`completely and`left`increments so that pairs are less than`k`, we return `ans`. 
```
class Solution:
    def countGood(self, nums: List[int], k: int) -> int:

        left = ans = tally = 0
        n, d = len(nums), defaultdict(int)

        for right,num in enumerate(nums):    # <-- 1
            tally += d[num]
            d[num] += 1
            
            while tally >= k:                # <-- 2     
                ans+= n - right
                d[nums[left]] -= 1           # <-- 3
                tally -= d[nums[left]]
                left += 1
            
        return ans                           # <-- 4
```
[https://leetcode.com/problems/count-the-number-of-good-subarrays/submissions/1292499995/](https://leetcode.com/problems/count-the-number-of-good-subarrays/submissions/1292499995/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is worst case *O*(*N*), in which *N* ~ `len(nums)`.