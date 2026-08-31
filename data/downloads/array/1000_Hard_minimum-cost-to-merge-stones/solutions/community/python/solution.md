# 2D Dynamic Programming Solution Explained Python

**Author:** sarthakBhandari
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/2687921/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/2687921/)

---

in each merge number of elements reduce by k-1
n -> n - (k-1) -> n - 2(k-1) .... -> n - m(k-1) == 1
n - 1 = m(k-1), since m is an integer n-1 % k-1 == 0

looking at the sequence in reverse
1 -> 1 + (k-1) + 1 + 2(k-1) ... -> 1 + m(k-1) == n

it should be obvious that we need to jump in k-1 steps in order to produce a mergeable interval.

for any interval (i, j), we try all all mergable intervals starting from i. So thats (i, i), (i, i+k-1), (i, i+2(k-1))... and stop just before reaching j. We dont want to reach j because thats exactly same as what we started with.

if (i, j) is a mergeable interval (i.e j - i % k - i == 0):          
sol(i, j) = min( sol(i, mid) + sol(mid+1, j) ) + sum(stones[i : j])

if (i, j) is not mergeable then just return min( sol(i, mid) + sol(mid+1, j) ), eventually this interval get merged if its part of a valid solution.
Note: just because (i, j) is not mergeable does NOT mean there doesnt exist an already merged interval inside (i, j). Thats the whole reason why we return min( sol(i, mid) + sol(mid+1, j) )



```
def mergeStones(self, stones, k):
    n = len(stones)
    if (n - 1) % (k - 1): return -1
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + stones[i]
    @lru_cache(None)
    def dp(i, j):
        if j - i + 1 < k: #if interval can not be merged yet
            return 0
        res = inf
        for mid in range(i, j, k-1):
            res = min(res, dp(i,mid) + dp(mid+1, j))
        
        if (j - i)%(k-1) == 0: #if interval can be merged
            res += prefix[j+1] - prefix[i]
        
        return res
            
    return dp(0, n-1)
```