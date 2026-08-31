# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/ransom-note/solutions/4326192/](https://leetcode.com/problems/ransom-note/solutions/4326192/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Check there is a character of RansomNote in Magazine.
true: Remove that character from Magazine and re-check.
false: returns false

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
$$N$$: length of RansomNote
$$M$$: length of Magazine
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
lists:member -> $$O(log M)$$
real_can_construct -> $$O(N)$$
Total: $$O(NlogM)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Make RansomNote to List: $$O(N)$$
Make Magazine to List: $$O(M)$$
Total: $$O(N + M)$$

# Code
```
-spec can_construct(RnansomNote :: unicode:unicode_binary(), Magazine :: unicode:unicode_binary()) -> boolean().

real_can_construct([], _) -> true;
real_can_construct([R | Rs], Magazine) ->
    case lists:member(R, Magazine) of
        true -> real_can_construct(Rs, Magazine -- [R]);
        false -> false
    end.   

can_construct(RansomNote, Magazine) -> 
    real_can_construct(binary_to_list(RansomNote), binary_to_list(Magazine)).
```