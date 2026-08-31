# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4326210/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4326210/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. Make map which counts each character of input S
2. Find first character which is unique in input S and return index of it.
3. If there is no unique character in input S, return -1.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
$$N$$: length of S
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Making map: $$O(N)$$
Find unique character: $$O(N)$$
Total: $$O(N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Making S to List: $$O(N)$$
Making Map: $$O(N)$$
Total: $$O(N)$$

# Code
```
-spec first_uniq_char(S :: unicode:unicode_binary()) -> integer().

count(C, Map) ->
    case maps:is_key(C, Map) of
        true -> maps:update(C, maps:get(C, Map) + 1, Map);
        false -> maps:put(C, 1, Map)
    end.

find([], _, _) -> -1;
find([H | T], Map, Idx) ->
    case maps:get(H, Map) of
        1 -> Idx;
        _ -> find(T, Map, Idx + 1)
    end.

real_first_uniq_char(S) ->
    Map = lists:foldl(fun count/2, maps:new(), S),
    find(S, Map, 0).

first_uniq_char(S) ->
    real_first_uniq_char(binary_to_list(S)).
```