# [Python3] No greedy, just DP

**Author:** yuanzhi247012
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/2036923/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/2036923/)

---

For each group size, we mod it with batchSize.
The greedy way is easy to think of, for those mod==0, make them immediately to single group.
For those pairs whose sum mod ==0, we also pair them to one single group.
For the rest, we do DP.
But the above 2 greedy steps do not change time complexity. Total time complexity is still decided by DP. Doing dp without greedy will still pass, and the code is much simpler.
**dp(counter_tup,mod):**
	**counter_tup** stores the count of every mod, we make it touple because python "@cache" decorator supports tuple.
	**mod** is that left over by the previous group. If previous group has 0 left over, the a new batch can be started, the frist group in the new batch will be happy.
dp(tup,mod) returns the maximum number of happy groups, with previous group left over 'mod' people to fill.
```
    def maxHappyGroups(self, batchSize: int, groups: List[int]) -> int:
        @cache
        def dp(counter_tup,mod):
            if sum(counter_tup)==0:
                return 0
            counter=list(counter_tup)
            startNewBatch = (mod==0)
            res = 0
            for i in range(len(counter)):
                if counter[i]!=0:
                    counter[i]-=1
                    mod2 = (mod-i)%batchSize
                    nxt_res = dp(tuple(counter),mod2) + startNewBatch
                    res = max(res, nxt_res)
                    counter[i]+=1
            return res
        counter = [0]*batchSize
        for g in groups:
            counter[g%batchSize]+=1
        return dp(tuple(counter),0)
```