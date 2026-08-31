# 10 Lines of Python3 and 4 Lines of Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5018051/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5018051/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
In position `i`, we would like to know how many indexes `j < i` and no elements greater than `nums[i]` in the range `nums[j], nums[j+1], ..., nums[i]`. So we can keep a non-increasing monotonic stack and a counter for obtaining number of seen elements with the value of `nums[i]`. The overall complexity is $O(N)$ only. The solution can be implemented in Erlang in only 4 lines of concise code. 

My other solution compute the numbers in the monotonic stack with binary search which requires $O(N \\log N)$. Although higher complexity, the practical runtime of the binary search approach is faster than the $O(N)$ approach with a counter.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code in Python3 with Counter 
```Python3
class Solution:
    def numberOfSubarrays(self, nums: List[int]) -> int:
        s = []
        ans = 0
        cnt = Counter()
        for v in nums:
            while s and s[-1] < v:
                cnt[s.pop()] -= 1
            s.append(v)
            cnt[v] += 1
            ans += cnt[v]
        return ans
```

# Code in Python3 with Bineary Search
```Python3
class Solution:
    def numberOfSubarrays(self, nums: List[int]) -> int:
        s = []
        ans = 0
        for v in nums:
            while s and -s[-1] < v:
                s.pop()
            s.append(-v)
            ans += len(s) - bisect_left(s, -v)            
        return ans
```

# Code in Erlang with Counter
```Erlang
-spec number_of_subarrays(Nums :: [integer()]) -> integer().
number_of_subarrays(Nums) -> solve(Nums, [], #{}).
solve([], Stack, Cnt) -> 0;
solve([H|T], [SH|ST], Cnt) when H > SH -> solve([H|T], ST, Cnt#{SH => maps:get(SH, Cnt)-1});
solve([H|T], Stack, Cnt) -> maps:get(H, Cnt, 0)+1 + solve(T, [H|Stack], Cnt#{H => maps:get(H, Cnt, 0)+1}).
```