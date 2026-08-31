# Two statement solution in Erlang

**Author:** erikcghedlund
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/6030833/](https://leetcode.com/problems/longest-common-prefix/solutions/6030833/)

---


# Code
```erlang []
-spec longest_common_prefix(Strs :: [unicode:unicode_binary()]) -> unicode:unicode_binary().
longest_common_prefix([H|T]) -> binary:part(H, 0, binary:longest_common_prefix([H|T])).
```