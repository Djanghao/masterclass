# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3930077/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/3930077/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
%% @doc Find the first occurrence of `Needle` in `Haystack`.
%% @param Haystack The string to search in.
%% @param Needle The string to search for.
%% @return The index of the first occurrence of `Needle` in `Haystack`, or -1 if `Needle` is not part of `Haystack`.
-spec str_str(Haystack :: unicode:unicode_binary(), Needle :: unicode:unicode_binary()) -> integer().
str_str(Haystack, Needle) ->
    %% Use binary:match/2 to find the first occurrence of Needle in Haystack.
    case binary:match(Haystack, Needle) of
        %% If there is a match, the function returns {Start, Length}.
        %% We return Start, which is the index of the first occurrence of Needle.
        {Start, _Length} -> Start;
        %% If there is no match, the function returns nomatch.
        %% We return -1 in this case, as required by the problem statement.
        nomatch -> -1
    end.
```