# Dead simple Erlang solution (beats 100% lmao)

**Author:** erikcghedlund
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6101695/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6101695/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Linear search for the item

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```erlang []
-spec help(Arr ::[integer()]) -> boolean().
help([Candidate | Others]) when Candidate < 0 ->
    lists:any(fun (Elem) -> Elem == Candidate/2 end, Others);
help([Candidate | Others]) ->
    lists:any(fun (Elem) -> Elem == Candidate*2 end, Others).
-spec check_if_exist(Arr :: [integer()]) -> boolean().
check_if_exist(Arr) -> 
    SortedArr = lists:sort(Arr),
    lists:member(true, [help(lists:nthtail(Drop, SortedArr)) || Drop <- lists:seq(0, length(Arr) - 2)]).
```