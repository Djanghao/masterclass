# 2-liner, a math problem with explanation

**Author:** zzg_zzm
**Votes:** 11
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/112982/](https://leetcode.com/problems/reach-a-number/solutions/112982/)

---

I firstly tried DFS routine `dfs(int target, int start = 0, int move = 1)` but got TLE with or without memorization, which is essentially brute force (not surprise). 

Actually, the setup of this problem can be resolved mathematically. Thanks to [the solution](https://discuss.leetcode.com/topic/115531/c-o-1-solution-without-loop) by @fsqhxrcjw, here is the rewritten O(1) solution: 
```cpp
    int reachNumber(int t) {
        int n = ceil((sqrt(1+8.*abs(t))-1)/2), d = n*(n+1)/2-t;
        return n + (d%2)*(n%2+1);
    }
```
Brief explanation:

The problem is to ask the minimum integer `n` such that `sum sign(i)*i = t` for `1 <= i <= n`, where `sign(i) = 1` or `-1`.

1. To achieve minimum moves, we need to make sure to move in one direction as much as possible.
1. For target location `t` (let `t>0` without losing generality), to keep moving towards target `t`, there exists the smallest integer `n` such that
   * `1+2+...+n = n(n+1)/2 >= t`, i.e., `n = ceil((sqrt(1+8t)-1)/2)`.
1. If difference `d:=n(n+1)/2-t` is even, we have
   * `sum sign(i)*i = t` for `1 <= i <= n` with only `sign(d/2) = -1`.
1. Otherwise, `d` is odd. If `n+1` is odd, `d+(n+1)` must be even and we have
   * `sum sign(i)*i = t` for `1 <= i <= n+1`, with only `sign((d+n+1)/2) = -1`.
1. Otherwise, `n+1` is even, we have
   * `sum sign(i)*i = t` for `1 <= i <= n+2`, with only `sign(n+2)` and `sign((d-1)/2) = -1`.