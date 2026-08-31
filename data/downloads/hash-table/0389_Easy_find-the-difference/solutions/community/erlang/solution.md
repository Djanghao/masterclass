# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/4326220/](https://leetcode.com/problems/find-the-difference/solutions/4326220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Input T has one more character than S. 
So first element of subtracted list(T - S) will be answer.

# Code
```
-spec find_the_difference(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> char().
find_the_difference(S, T) ->
    lists:nth(1, binary_to_list(T) -- binary_to_list(S)).
```