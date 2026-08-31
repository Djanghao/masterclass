# [Python3] freq table

**Author:** ye15
**Votes:** 32
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261351/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2261351/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/f00c06cefbc1b2305f127a8cde7ff9b010197930) for solutions of weekly 301. 

**Intuition**
It is not hard to figure out that this is a DP problem. What's challenging is that due to the very tight time constraint, one has to come up with a linear-ish algorithm to solve this problem. So we have to play some math instead of running the naive DP. 

The most important observation is that the number of ideal arrays of k distinct numbers are the same regardless of what the k numbers are. They are all (n-1, k-1) i.e. n-1 choose k-1. Here, you simply need to place the k-1 places where the numbers change among the n-1 candidates. 

With this obsevation, the below DP setup can work in O(Nlog^2M) time. The states are 
1) number of changes `k` (or equivalently `k+1` unique values)
2) the ending value which is used to generate ideal arrays with more unique values. 

Since there are multiple ways to end up at the same values e.g. `(1,2,6)`, `(1,3,6)`, I also need to maintain a counter to reflect this fact. 

I start with `{1:1, 2:1, ..., maxValue:1}` which indicates that `(1,1,..1)`, `(2,2,...,2)`, ... `(maxValue, maxValue, ..., maxValue)` each contributes 1 to the final answer. Then I enumerate the number of changes `k` as 1, 2, ..., n-1. At each `k`, I compute `freq[x]` which is the number of ways to arrive at `x` (with `k` changes). For example, with 2 changes, you can get 6 as `(1,2,6)` and `(1,3,6)`. Then, `comb(n-1, k) * freq[x]` is the contribution from the ideal arrays with `k` changes ending at `x`. 

```
class Solution:
    def idealArrays(self, n: int, maxValue: int) -> int:
        ans = maxValue
        freq = {x : 1 for x in range(1, maxValue+1)}
        for k in range(1, n): 
            temp = Counter()
            for x in freq: 
                for m in range(2, maxValue//x+1): 
                    ans += comb(n-1, k)*freq[x]
                    temp[m*x] += freq[x]
            freq = temp
            ans %= 1_000_000_007
        return ans 
```