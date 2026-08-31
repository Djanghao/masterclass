# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern/solutions/4325891/](https://leetcode.com/problems/word-pattern/solutions/4325891/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Allocate pattern alphabet to each word and make another string with pattern.
And compare input S and string made by pattern

# Approach
<!-- Describe your approach to solving the problem. -->
1. Allocate alphabet to each word
Take each alphabet from pattern (each character)
To avoid allocating multiple alphabet to one word, used set (Avoiding Duplication).
2. Make new string with pattern
Words already mapped to each character of pattern. So loop pattern and uses each character as key of map and  add mapped word into list
3. Compare input word list S and list made by #2
4. If length of pattern and length of word list is not same, we cannot allocate character to word. In this case, return false

# Complexity
$$N$$: Length of Pattern
$$M$$: Length of Input string $$S$$
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Mapping character to word: $$O(N)$$
Make new word list from pattern: $$O(N)$$
Compare two lists: $$O(N)$$
Total: $$O(N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Word list splitted input string $$S$$: $$O(M)$$
Set used to avoid duplication: $$O(M)$$
Word list made by pattern: $$O(M)$$
Total: $$O(M)$$

# Code
```
-spec word_pattern(Pattern :: unicode:unicode_binary(), S :: unicode:unicode_binary()) -> boolean().

allocate_alphabet([], _, Map, _) -> Map;
allocate_alphabet([X | Xs], [Y | Ys], Map, Set) ->
    case sets:is_element(X, Set) of
        true -> allocate_alphabet(Xs, Ys, Map, Set);
        false -> allocate_alphabet(Xs, Ys, maps:put(Y, X, Map), sets:add_element(X, Set))
    end.

read_pattern([], _, List) -> List;
read_pattern([X | Xs], Map, List) -> 
    read_pattern(Xs, Map, List ++ [maps:get(X, Map, "")]).

real_world_pattern(Tokens, Pattern) ->
    Map = allocate_alphabet(Tokens, Pattern, maps:new(), sets:new()),
    MadeByPattern = read_pattern(Pattern, Map, []),
    Tokens =:= MadeByPattern.

word_pattern(Pattern, S) ->
    Tokens = lists:map(fun binary_to_list/1, re:split(binary_to_list(S), " ")),
    PatternList = binary_to_list(Pattern),
    case length(Tokens) == length(PatternList) of
        true -> real_world_pattern(Tokens, PatternList);
        false -> false
    end.
```