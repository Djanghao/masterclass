# Map of counting spaces in sentences

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3124601/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3124601/)

---

# Intuition
Count spaces in each sentence

# Approach
Map list of strings using `count_subs` function then find maximum. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec most_words_found(Sentences :: [unicode:unicode_binary()]) -> integer().
most_words_found(Sentences) ->
    SpaceCount = lists:map(fun(X) -> count_subs(X, "\\\\s") end, Sentences),
        lists:max(SpaceCount) + 1.

count_subs(String, Sub) ->
    case re:run(String, [" "], [global]) of
        {match, Matches} -> length(Matches);
        nomatch -> 0
    end.
```