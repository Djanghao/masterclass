# Python 3   || 6 lines,  bitmap, w/example   ||   T/S: 99% / 98%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4110418/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4110418/)

---

Here's the plan:

- We use a bitmap `s` to track the elements of `nums` not greater than `k`, and we use `cnt` to count the iterations. 


- Once bits 1 thru`k`are 1s,  we return `cnt`.

```
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        
                                                #  Example: nums = [3,1,5,4,2]   k=2
        s = cnt = 0                             #           goal = (1<<3)-2 = 6 = '110'
        goal = (1<<(k+1)) - 2

        while nums:                             #   num    s    cnt
                                                #   \u2013\u2013\u2013   \u2013\u2013\u2013   \u2013\u2013\u2013 
            cnt+= 1                             #    2    100    1
            if (num:=nums.pop()) <= k:          #    4    100    2
                s|= (1<<num)                    #    5    100    3
                                                #    1    110    4 <--return 4
            if  s == goal: return cnt
```
[https://leetcode.com/problems/minimum-operations-to-collect-elements/submissions/1065114625/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.