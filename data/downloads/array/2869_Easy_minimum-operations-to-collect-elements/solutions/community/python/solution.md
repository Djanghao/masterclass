# Python Simple Code ||  Contest

**Author:** vvivekyadav
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4113292/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4113292/)

---

**If you got help from this,... Plz Upvote .. it encourage me**
# Code
```
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        
        l = []
        for i in range(1,k+1):
            l.append(i)
        # print(l)
        c = 0

        i = len(nums) - 1

        while l:
            if nums[i] in l:
                l.remove(nums[i])
            i -= 1
            c += 1

        # print(c)
        return c

    
```