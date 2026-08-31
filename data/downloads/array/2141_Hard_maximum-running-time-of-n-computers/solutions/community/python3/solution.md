# [Python3] greedy

**Author:** ye15
**Votes:** 49
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/1692965/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/1692965/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/210499523d9965e2d9dd5e1a6fbf67931233e41b) for solutions of weekly 276. 

**Intuition**
Sort the batteries by ascending order. Let's focus on the last `n` batteries and redefine this subarray as the new batteries. The remaining element can be summed into a number. Here, since a battery can be used freely, it doesn't matter if one has `k` batteries with values `x, y, ...`. Without any loss of generality, one can think of them as a big battery with value `x+y+...`. Now the problems becomes we have `n` batteries for `n` computers with an extra reservoir (say `extra`). 

Thus, we can adopt a greedy stragegy to check batteries progressively 
1) give all `extra` reservoir to the lowest battery and check if it can last as much as the 2nd lowest battery; if not, return (lowest + `extra`); otherwise, proceed to next step;
2) given `extra` reservoir to the lowest and 2nd lowest batteries and check if they can last as much as the 3rd lowest battery; if not, return (lowest + 2nd lowest + `extra`)//2; otherwise, proceed to next step; 
3) repeat the above step to all batteries; if stopped at `i`, return (lowest + 2nd lowest + ... + `extra`)//(i+1); 
4) if not stopped, return (sum(batteries) + `extra`)//n. 


```
class Solution:
    def maxRunTime(self, n: int, batteries: List[int]) -> int:
        batteries.sort()
        extra = sum(batteries[:-n])
        batteries = batteries[-n:]
        
        ans = prefix = 0 
        for i, x in enumerate(batteries): 
            prefix += x 
            if i+1 < len(batteries) and batteries[i+1]*(i+1) - prefix > extra: return (prefix + extra) // (i+1)
        return (prefix + extra) // n
```