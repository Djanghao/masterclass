# [Python3] Bitmask Dynamic Programming - Explained, easy understanding

**Author:** dolong2110
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2994140/](https://leetcode.com/problems/minimum-time-to-kill-all-monsters/solutions/2994140/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- If we choose to kill a `monster` with `power` `p`. The current gain the `days` takes will be >= the `power` / `gain`. For instance, it takes at least 3 `days` to kill a `monster` with `power` = 5 and current `gain` is 2. We use ceiling for this while ceiling(5 / 2) = 3; ceiling(4 / 2) = 2.

- First we can think about greedy approach. Sort power and kill the monsters respectively from smallest to biggest `power`. Why having this thought? Because each time a `monster` is killed, the `gain` will increase by `1`. Thus, with greater `gain` it may take less time to kill the next `monster`. In conclusion, this approach will choose to kill the smallest `monster` left, while it costs least days and increase the `gain` fastest.
- However the greedy approach won't work in this case. There are cases, for example: assume the `power` = [1,3,4].
    
    **a) Greedy Approach**
    - `days` take initially = 0
    - First, we kill the `power` = 1 `monster` -> it takes `days` = ceiling(power = 1 / gain = 1) = 1 -> current `days` = 0 + 1 = 1 -> `gain` now = 1 + 1 = 2.
    - Second, we kill the `power` = 3 `monster` -> it takes `days` = ceiling(power = 3 / gain = 2) = 2 -> current `days` = 1 + 2 = 3 -> `gain` = 2 + 1 = 3.
    - Finally, we kill the `power` = 4 `monster` -> it takes `days` = ceiling(power = 4 / gain = 3) = 2 -> current `days` = 3 + 2  = 5 -> `gain` = 3 + 1  = 4.
    - Totally it takes 5 `days` to kill all `monster` with greedy approach.

    **b) A Better Way**
    - First, we kill the `power` = 1 `monster` -> it takes `days` = ceiling(power = 1 / gain = 1) = 1 -> current `days` = 0 + 1 = 1 -> `gain` now = 1 + 1 = 2.
    - Second, we kill the `power` = 4 `monster` -> it takes `days` = ceiling(power = 4 / gain = 2) = 2 -> current `days` = 1 + 2 = 3 -> `gain` = 2 + 1 = 3.
    - Finally, we kill the `power` = 3 `monster` -> it takes `days` = ceiling(power = 3 / gain = 3) = 1 -> current `days` = 3 + 1  = 4 -> `gain` = 3 + 1  = 4.
    - Totally it takes 4 `days` to kill all `monster` that is better than greedy approach.
- First Observation: greedy not work and it seems like the current choice will affect the next choice. In here we also need to find the minimum of `days`. They are two essential signal tell us to use Dynamic Programming.
- Second Observation: We can see that after kill a `monster` we should never kill it again so. Brute-force can be done with `dfs + backtracking`. The optimize version of it with small input range is `Bitmask Dynamic Programming`.
- One tip: In here, if we sort the power first we can pass TLE with top-down memoization.

# Approach
<!-- Describe your approach to solving the problem. -->
- Naturally with Dynamic Programming Problem, it may be easier to think about top-down approach, because it is more close to natural human's thought.
    - N is the length of the array `power`.
    - First sort the `power`.
    - Using the bit mask number to represent the current status of `monster`. `0` means they are alive and `1` means they was killed. Initially, the bit mask number is 0 ~ `0000.....00`.
    - Base case: when all the `monster` are killed -> return 0. The bit mask number when all are death is `1111...11` ~ N `1` digit. We have `1000...000` (N number `0`) - 1 = `1111...1111` (N number `1`). Thus all are death when `mask == (1 << n) - 1` (1 << n = `1000...000` - N number `0`).
    - Then we iterate over the array `power`:
        - If i-th `monster` was killed, its current status is `1`. Thus, `mask & (1 << i) == 1`. We skip and do nothing.
        - If i-th `monster` is alive we can use this DP formula:
        `min_day = min(min_day, dp(mask | (1 << i), gain + 1) + math.ceil(power[i] / gain))`. We choose to kill the current `monster`, so it takes `math.ceil(power[i] / gain)`. The digit i of mask will change form `0` (alive) to `1` (death) by formula: `mask | (1 << 1)` and gain of course increase by 1. and find the minium possible days to killed all `monster` at state `mask` and `gain`. 

# Complexity
- Time complexity: $$O(N.2^N)$$.

    - Sorting: $$O(NlogN)$$. Normally it is them complexity of sorting in all languages.
    - DP: $$O(N.2^N)$$. Iterate the array `power` and kill all costs $$N$$. Each bit digit has 2 state `0` and `1`, there are N digit, so it costs $$2^N$$.
    - Thus it takes $$O(NlogN + N.2^N)$$ ~ $$O(N.2^N)$$

- Space complexity: $$O(2^N)$$. we need to save current state to the bit number of bit length N. So there are $$2^N$$ cases

# Code
```
class Solution:
    def minimumTime(self, power: List[int]) -> int:
        n = len(power)
        power.sort()

        @cache
        def dp(mask: int, gain: int) -> int:
            if mask == (1 << n) - 1:
                return 0
            
            min_day = float('inf')
            for i in range(n):
                if mask & (1 << i):
                    continue
                min_day = min(min_day, dp(mask | (1 << i), gain + 1) + math.ceil(power[i] / gain))
            return min_day
        
        return dp(0, 1)
```