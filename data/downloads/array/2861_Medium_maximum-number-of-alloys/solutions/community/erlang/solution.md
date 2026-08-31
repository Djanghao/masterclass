# Binary Search in Erlang and Python

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4896353/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4896353/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
For each machine, binary search for the number of alloys to produce. Checking the answer is very easy. 

# Code in Python3
```
class Solution:
    def maxNumberOfAlloys(self, n: int, k: int, budget: int, composition: List[List[int]], stock: List[int], cost: List[int]) -> int:
        def check(k, comp):
            total_cost = 0
            for i, v in enumerate(comp):
                total_cost += max(0, k * v - stock[i]) * cost[i]
                if total_cost > budget:
                    return False
            return True

        def solve(comp):
            l, r = 0, 2**31
            while l < r:
                m = (l + r) // 2
                if check(m, comp):
                    l = m + 1
                else:
                    r = m
            return l - 1

        return max(solve(comp) for comp in composition)
```

# Code in Erlang
```
-spec max_number_of_alloys(N :: integer(), K :: integer(), Budget :: integer(), Composition :: [[integer()]], Stock :: [integer()], Cost :: [integer()]) -> integer().
max_number_of_alloys(N, K, Budget, Composition, Stock, Cost) -> solve(Budget, Stock, Cost, Composition, 0).

solve(Bugdet, Stock, Cost, [], Ans) -> Ans;
solve(Bugdet, Stock, Cost, [H|T], Ans) -> solve(Bugdet, Stock, Cost, T, max(Ans, binary_search(Bugdet, Stock, Cost, H, 0, 2000000000))).

binary_search(Budget, Stock, Cost, Comp, Lo, Lo) -> Lo - 1;
binary_search(Budget, Stock, Cost, Comp, Lo, Hi) -> 
    Mid = (Lo + Hi) div 2,
    case check(Budget, Stock, Cost, Comp, Mid) of
        true -> binary_search(Budget, Stock, Cost, Comp, Mid + 1, Hi);
        false -> binary_search(Budget, Stock, Cost, Comp, Lo, Mid)
    end.

check(Budget, [], [], [], Goal) -> Budget >= 0;
check(Budget, [S|ST], [C|CT], [R|RT], Goal) -> check(Budget - max(0, (R * Goal - S) * C), ST, CT, RT, Goal).
```