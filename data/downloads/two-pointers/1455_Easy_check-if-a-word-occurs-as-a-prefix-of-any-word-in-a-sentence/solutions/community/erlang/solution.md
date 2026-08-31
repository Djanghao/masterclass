# Erlang solution

**Author:** erikcghedlund
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105864/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105864/)

---


# Code
```erlang []
-spec is_prefix_of_word(Sentence :: unicode:unicode_binary(), SearchWord :: unicode:unicode_binary()) -> integer().
is_prefix_of_word(Sentence, SearchWord) -> case lists:search(
    fun({_, Val}) -> string:prefix(Val, SearchWord) /= nomatch end,
    lists:enumerate(string:lexemes(Sentence, " "))
    ) of
    {value, {Index, _}} -> Index;
    false -> -1
end.
```