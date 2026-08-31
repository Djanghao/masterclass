# Erlang Solution

**Author:** jofahduhs
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/3702484/](https://leetcode.com/problems/length-of-last-word/solutions/3702484/)

---

# Code
```
-spec length_of_last_word(S :: unicode:unicode_binary()) -> integer().
length_of_last_word(S) ->
    Trimmed = string:trim(S),
    Wordlist = string:split(Trimmed, " ", all),
    case lists:last(Wordlist) of
        "" -> 0;
        Last -> byte_size(Last)
    end.

```