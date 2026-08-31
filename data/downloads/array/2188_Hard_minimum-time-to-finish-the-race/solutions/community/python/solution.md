# [Python] DP solution in O(n) time

**Author:** Huayu_Ivy
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1802700/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1802700/)

---



- `dp[i]` represents for the minimum time to complete `i + 1` laps.
- `minimum[i]` represents for the minimum time to complete `i + 1` laps without changing a tire.
- `dp[i] = min(dp[i - j - 1] + changeTime + minimum[j] for j in range(len(minimum)))`
- don\u2019t forget about the edge case when `i - j == 0`, which means there is no previous tire. we should discard changeTime and compare `dp[i]` with `minimum[j]` directly.

```python
def minimumFinishTime(self, tires: List[List[int]], changeTime: int, numLaps: int) -> int:
    minimum = [] # minimum[i] represents for the min time to complete i + 1 laps without changing a tire
    total = [0] * len(tires)
    # the worst case is: fi = 1, ri = 2, changeTime = 10 ** 5
    # this while loop will be computed for at most math.ceil(math.log2(10 ** 5 + 1)) = 17 times
    while True:
        for t in range(len(tires)):
            total[t] += tires[t][0]
            tires[t][0] *= tires[t][1]
        minimum.append(min(total))
        # if the minimum cost is greater than changing a new tire, we stop looping
        if minimum[-1] > changeTime + minimum[0]: break

    # dp
    dp = [float('inf')] * numLaps
    for l in range(numLaps):
        for pre in range(len(minimum)):
            if l - pre - 1 < 0:
                dp[l] = min(dp[l], minimum[pre])
                break
            dp[l] = min(dp[l], minimum[pre] + dp[l - pre - 1] + changeTime)
    return dp[-1]
```

