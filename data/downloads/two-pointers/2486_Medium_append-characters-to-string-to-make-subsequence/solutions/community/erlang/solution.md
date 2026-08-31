# Blazingly Slow Erlang

**Author:** drdonovan
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5274940/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5274940/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec append_characters(S :: unicode:unicode_binary(), T :: unicode:unicode_binary()) -> integer().
append_characters(_, <<>>) ->
    0;
append_characters(<<>>, <<TT/binary>>) ->
    length(unicode:characters_to_list(TT, utf8));
append_characters(<<SH/utf8, ST/binary>>, <<T/binary>>) ->
    <<TH/utf8, TT/binary>> = T,
    if
        SH =:= TH ->
            append_characters(ST, TT);
        true ->
            append_characters(ST, T)
    end.
```