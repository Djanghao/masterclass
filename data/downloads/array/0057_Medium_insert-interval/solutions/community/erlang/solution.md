# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-interval/solutions/3850383/](https://leetcode.com/problems/insert-interval/solutions/3850383/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec insert(Intervals :: [[integer()]], NewInterval :: [integer()]) -> [[integer()]].
insert(Intervals, NewInterval) ->
  do(Intervals, NewInterval, []).

do([[A,B]| Rest], [C, D], Acc) when C>B ->
    do(Rest, [C, D], [[A,B] | Acc]);

do([[A,B]| Rest], [C, D], Acc) when
        ((A=<C) and (C=<B)) or 
        ((A=<D) and (D=<B)) or 
        ((C=<A) and (A=<D))->     
    do(Rest, [min(A,C), max(B,D)], Acc);

do([[A,B]| Rest], [C, D], Acc) when D<A ->
    lists:reverse([[C, D] | Acc]) ++  [[A,B]| Rest];

do([], [C, D], Acc) ->
    lists:reverse([[C, D] | Acc]).

```