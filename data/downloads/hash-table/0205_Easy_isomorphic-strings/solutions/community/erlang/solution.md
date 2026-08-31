# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 1
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/3938616/](https://leetcode.com/problems/isomorphic-strings/solutions/3938616/)

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
-spec is_isomorphic(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> boolean().
is_isomorphic(S, T) ->
    SList = unicode:characters_to_list(S),
    TList = unicode:characters_to_list(T),
    is_isomorphic(SList, TList, #{}, #{}).

-spec is_isomorphic(S :: [integer()], T :: [integer()], map(), map()) -> boolean().
is_isomorphic([], [], _, _) ->
    true;
is_isomorphic([SChar | RestS], [TChar | RestT], SToTMap, TToSMap) ->
    case {maps:get(SChar, SToTMap, undefined), maps:get(TChar, TToSMap, undefined)} of
        {TChar, SChar} ->
            is_isomorphic(RestS, RestT, SToTMap, TToSMap);
        {undefined, undefined} ->
            is_isomorphic(RestS, RestT, maps:put(SChar, TChar, SToTMap), maps:put(TChar, SChar, TToSMap));
        _ ->
            false
    end.
```