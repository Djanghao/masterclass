# erlang solution

**Author:** Akmal4163
**Votes:** 0
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/5364086/](https://leetcode.com/problems/transpose-matrix/solutions/5364086/)

---

```
transpose([[]|_], Acc) -> Acc;
transpose(Matrix, Acc) ->
    transpose(lists:map(fun tl/1, Matrix), [lists:map(fun hd/1, Matrix) | Acc]).


-spec transpose(Matrix :: [[integer()]]) -> [[integer()]].
transpose(Matrix) -> lists:reverse(transpose(Matrix, [])).

```