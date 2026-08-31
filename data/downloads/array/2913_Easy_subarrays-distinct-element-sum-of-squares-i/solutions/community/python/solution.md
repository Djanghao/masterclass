# Easy Python Solution 🐍

**Author:** Arpit_Patel_07
**Votes:** 12
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218756/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/4218756/)

---

# Code
```
class Solution:
    def sumCounts(self, nums: List[int]) -> int:
        ans=[]
        for i in range(len(nums)):
            for j in range(i,len(nums)+1):
                ans.append(len(set(nums[i:j]))**2)
        return sum(ans)
```
***Hope it helps...!!*** \uD83D\uDE07\u270C\uFE0F