# [Python3] prime check

**Author:** ye15
**Votes:** 12
**Link:** [https://leetcode.com/problems/maximum-prime-difference/solutions/5019498/](https://leetcode.com/problems/maximum-prime-difference/solutions/5019498/)

---

Please checkout this [commit](https://github.com/gaosanyong/leetcode/commit/5618938ec2a9c4ae5d4529896d92b52e7556b231) for solutions of weekly 393 in C++, Java, Python3, Javascript and Typescript. 

```
class Solution:
    def maximumPrimeDifference(self, nums: List[int]) -> int:
        pos = []
        for i, x in enumerate(nums): 
            if x >= 2: 
                for p in range(2, isqrt(x)+1): 
                    if x % p == 0: break 
                else: pos.append(i)
        return pos[-1] - pos[0]
```