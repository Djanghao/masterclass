# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4329939/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/4329939/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Count is number in list and check which number in [1, N] is not in counted array

# Approach
<!-- Describe your approach to solving the problem. -->
1. Add number and count to dictionary to count number in list
2. Loop [1, N] to find number which is not appeared in list


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Count: $$O(N)$$
Find: $$O(N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Counting dict: $$O(N)$$


# Code
```
-spec find_disappeared_numbers(Nums :: [integer()]) -> [integer()].

count(List) ->
    count(List, dict:new()).
count([], Dict) -> Dict;
count([H | T], Dict) ->
    NewDict = case dict:is_key(H, Dict) of
        true -> Dict;
        false -> dict:append(H, 1, Dict)
    end,
    count(T, NewDict).

find(N, Dict) ->
    find(N, Dict, []).
find(N, Dict, List) when N == 0 -> List;
find(N, Dict, List) ->
    NewList = case dict:is_key(N, Dict) of
        true -> List;
        false -> List ++ [N]
    end,
    find(N - 1, Dict, NewList).

find_disappeared_numbers(Nums) ->
    find(length(Nums), count(Nums)).

```