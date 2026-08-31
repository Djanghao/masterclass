# Python3 Solution fastest

**Author:** Anilchouhan181
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1783447/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/1783447/)

---

```
class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        n=len(nums)
        c=0
        for i in range(0,n):
            for j in range(i+1,n):
                if nums[i]==nums[j] and ((i*j)%k==0):
                    c+=1
        return c   
```