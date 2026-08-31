# Python | Intuitive | Recursion + Memo | Explanation

**Author:** detective_dp
**Votes:** 5
**Link:** [https://leetcode.com/problems/dice-roll-simulation/solutions/1505338/](https://leetcode.com/problems/dice-roll-simulation/solutions/1505338/)

---

* At some ith roll, we care about what i - 1 roll was and how many times it occurred consecutively. We don't want to cross each roll limit.
* So our state space includes (idx, prevNum, prevNumFreq) where idx is roll number, prevNum is the number which came up in (i - 1)th roll and prevNumFreq is the frequency of consecutive rolls of (i - 1)th number.
* Since this is top down, the base case would be when we reach nth roll (0 - indexed) that means we succesfully created a valid sequence of size n so return 1.
* Rest is implementation detail.
```
class Solution:
    def dieSimulator(self, n: int, rollMax: List[int]) -> int:
        MOD = 10 ** 9 + 7
        
        @lru_cache(None)
        def func(idx, prevNum, prevNumFreq):
            if idx == n:
                return 1
            
            ans = 0
            for i in range(1, 7):
                if i == prevNum:
                    if prevNumFreq < rollMax[i - 1]:
                        ans += func(idx + 1, i, prevNumFreq + 1)
                        
                else:
                    ans += func(idx + 1, i, 1)
            
            return ans % MOD
        
        return func(0, 0, 0)