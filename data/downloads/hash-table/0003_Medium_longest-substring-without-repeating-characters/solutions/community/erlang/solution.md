# Erlang

**Author:** karthikmn505
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4540238/](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4540238/)

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
-spec length_of_longest_substring(S :: unicode:unicode_binary()) -> integer().
length_of_longest_substring(S) ->
  substring(S, 0).

substring(<<"">>, Length) ->
    Length;
substring(<<S:8, Tail/binary>>, Length) ->
    NewLength = find_length([S], Tail, 1),
    case NewLength > Length of
        true -> substring(Tail, NewLength);
        false -> substring(Tail, Length)
    end.

find_length(_, <<"">>, Length) ->
    Length;
find_length(SubStr, <<S:8, String/binary>>, Length) ->
    case lists:member(S, SubStr) of
        true -> Length;
        false -> find_length([S|SubStr], String, Length+1)
    end.
```