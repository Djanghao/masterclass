# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3938620/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/3938620/)

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
-spec reverse_vowels(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
reverse_vowels(S) ->
    %% Convert string to list of characters
    SList = unicode:characters_to_list(S),

    %% Separate vowels and non-vowels
    {Vowels, NonVowels} = lists:foldr(fun separate_vowels/2, {[],[]}, SList),

    %% Reverse the list of vowels
    RevVowels = lists:reverse(Vowels),

    %% Merge back vowels and non-vowels
    unicode:characters_to_binary(merge_vowels(RevVowels, NonVowels)).

%% @doc `separate_vowels/2` separates vowels and non-vowels in a string.
%% @spec separate_vowels(Char, {Vowels, NonVowels} :: {list(), list()}) -> {list(), list()}.
separate_vowels(C, {V, NV}) when C =:= $a; C =:= $e; C =:= $i; C =:= $o; C =:= $u; C =:= $A; C =:= $E; C =:= $I; C =:= $O; C =:= $U ->
    {[C | V], [undefined | NV]};
separate_vowels(C, {V, NV}) ->
    {V, [C | NV]}.

%% @doc `merge_vowels/2` merges vowels and non-vowels back into a single list where vowels are reversed.
%% @spec merge_vowels(Vowels, NonVowels :: {list(), list()}) -> list().
merge_vowels([], []) -> [];
merge_vowels([V | Vs], [undefined | NVs]) ->
    [V | merge_vowels(Vs, NVs)];
merge_vowels(Vs, [NV | NVs]) ->
    [NV | merge_vowels(Vs, NVs)].
```