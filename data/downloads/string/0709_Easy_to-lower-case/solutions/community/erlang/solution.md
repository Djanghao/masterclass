# Erlang

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/2680082/](https://leetcode.com/problems/to-lower-case/solutions/2680082/)

---

```
-spec to_lower_case(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
to_lower_case(S) ->
  string:lowercase(S).
```