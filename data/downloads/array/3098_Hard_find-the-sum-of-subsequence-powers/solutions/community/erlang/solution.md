# O(N^4) Memoization in Python3 and Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4957510/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4957510/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
My approach to this problem is to exploring all the possible minimum dfferences. For a difference `d`, calculating all the possible $k$-subsequences in which the minimum difference is equal to or greater than `d`. To speed up, for each `d`, I precompute a `jump` lookup table for each `i` to its next position `j` so that `nums[i] + d >= nums[j]`.

There are $O(N^2)$ possible differences, and all the $k$-subsequences with a minimum difference can be obtained by using DP in $O(kN) = O(N^2)$. The overall complexity is $O(N^4)$.


# Complexity
- Time complexity: $O(N^4)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code in Python3
```Python3
class Solution:
    def sumOfPowers(self, nums: List[int], k: int) -> int:
        n = len(nums)
        nums.sort()

        @cache
        def dp(i, j):
            if j == k:
                return 1 
            if i >= n:
                return 0
            return (dp(i+1, j) + dp(jump[i], j+1)) % 1_000_000_007

        diffs = sorted(list(set([(nums[j] - nums[i]) for i in range(n) for j in range(i+1, n)])), reverse=True)
        prev, ans = 0, 0
        for d in diffs:  
            jump = [bisect_left(nums, nums[i] + d) for i in range(n)]
            current = dp(0, 0)
            dp.cache_clear()
            ans = (ans + d * (current - prev)) % 1_000_000_007
            prev = current
        return ans
```

# Code in Erlang
```Erlang
-spec sum_of_powers(Nums :: [integer()], K :: integer()) -> integer().
sum_of_powers(Nums, K) ->
    SortedNums = lists:sort(Nums),
    Differences = lists:uniq(lists:sort(fun (A, B) -> A > B end, diff(SortedNums))),
    solve(list_to_tuple(SortedNums), Differences, K, 0).

diff([]) -> [];
diff([H|T]) -> diff2(H, T) ++ diff(T).
diff2(H, []) -> [];
diff2(H1, [H2|T]) -> [H2 - H1|diff2(H1, T)].

build_jump(Arr, D, I, J) when I > size(Arr) -> ok;
build_jump(Arr, D, I, J) when element(I, Arr) + D > element(J, Arr) -> 
    build_jump(Arr, D, I, J+1);
build_jump(Arr, D, I, J) -> 
    erlang:put({jump, I}, J),
    build_jump(Arr, D, I+1, J).

solve(Arr, [], K, Prev) -> 0;
solve(Arr, [D|DT], K, Accu) -> 
    erlang:erase(),
    build_jump(Arr, D, 1, 1),
    Current = dp(Arr, K, 1),
    ((Current - Accu) * D + solve(Arr, DT, K, Current)) rem 1000000007.

dp(Arr, 0, I) -> 1;
dp(Arr, K, I) when I > size(Arr) -> 0;
dp(Arr, K, I) -> 
    case erlang:get({I, K}) of
        'undefined' -> 
            Ret = (dp(Arr, K, I+1) + dp(Arr, K - 1, erlang:get({jump, I}))) rem 1000000007,
            erlang:put({I, K}, Ret),
            Ret;
        Ret -> Ret
    end.
```