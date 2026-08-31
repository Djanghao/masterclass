# [Python3 100%] $O(Nk)$ time and memory DP

**Author:** piossel
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280624/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280624/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to go over all elements of the array, building all possible sequences along the way, keeping track of the best ones.

We track the longest subsequence with given last element $x$ and number of shifts $q\\in[0,\\dots k]$ so far.

At each iteration we update our knowledge of the best subsequences. This step is optimized by also keeping a separate subsequence category tracking the best subsequences for given $q$ but without specifying $x$. This trick allows us at each step to only look at $O(k)$ stored values, instead of the full $O(Nk)$ memory.

# Approach
The variable `best` stores $k+1$ numbers, where `best[q]` is the best (longest) sequence so far that has had `q` shifts. 

The variable `runs` is a `dict` which stores the same for subsequences with a specific last element. In particular, `runs[y]` is the array for subsequences ending in $y$, e.g. `runs[y][0]` is the longest subsequence with $q=0$ shifts (i.e. all elements equal $y$).

Now consider an iteration step. Suppose the current element is $x$. If we take a subsequence and add the current element, it will now end in $x$. This means that only `runs[x]` and `best` need to be updated. 

First we update `runs[x]`. 
1. Consider subsequences that already ended with $x$ and add our new $x$ to its end.
- If this is the first time we have encountered $x$ in `nums`, then we simply set `runs[x] = [1] * (k+1)`. [*Sidenote: we could equally initiate with `[1, 0, 0, ...]`. As long as the array is non-increasing, only its front number matters (it represents a longer subsequence with less shifts and thus always outperforms the rest of subsequences represented by this array)*]. 
- If `runs[x]` already existed, we simply update its value by incrementing all values in it by one.
2. Consider subsequences that did not end with $x$ and add $x$ to their end. This again increments values by $1$ but also increases $q$ by $1$. Thus, we take `runs[x][i]` and update its value with `best[i-1] + 1`, if the latter is larger.
3. Finally we update `best` by comparing its values with the just updated `runs[x]` and choosing the larger.

After iterating through `nums`, we just have to choose the best of `best`.

# Complexity
- Time complexity:
$$O(Nk)$$: $N$ iteration steps, $O(k)$ updates at each step

- Space complexity:
$O(Nk)$

# Code
```
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        runs = {}
        best = [0] * (k + 1)
        for x in nums:
            if x not in runs:
                runs[x] = [1] * (k + 1)
            else:
                runs[x] = [z + 1 for z in runs[x]]
            runs[x][1:] = [max(otherrun + 1, xrun) for otherrun, xrun in zip(best, runs[x][1:])]
            best = [max(b, xrun) for b, xrun in zip(best, runs[x])]
            
        return max(best)
        
