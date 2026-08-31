# Using Regex

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/3096603/](https://leetcode.com/problems/jewels-and-stones/solutions/3096603/)

---

# Intuition
Just used regex.

# Approach
Had little bit headache with `nomatch` but `case` helped

# Complexity
- Time complexity:
$O(n)$

- Space complexity:
$O(1)$.


# Code
```
-spec num_jewels_in_stones(Jewels :: unicode:unicode_binary(), Stones :: unicode:unicode_binary()) -> integer().
num_jewels_in_stones(Jewels, Stones) ->
    case re:run(Stones, ["[", Jewels, "]"], [global]) of
        {match, Matches} -> length(Matches);
        nomatch -> 0
    end.
```