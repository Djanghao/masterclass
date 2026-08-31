# Erlang solution

**Author:** ozzyozbourne
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/3675206/](https://leetcode.com/problems/valid-anagram/solutions/3675206/)

---

# Complexity
- Time complexity: nlog(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec is_anagram(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_anagram(S, T) -> lists:sort(binary_to_list(S)) =:= lists:sort(binary_to_list(T)).
```