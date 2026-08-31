# Erlang Solution

**Author:** Akmal4163
**Votes:** 0
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/5364071/](https://leetcode.com/problems/spiral-matrix/solutions/5364071/)

---

```
transpose_wt(Matrix) -> transpose(Matrix, []).

transpose([[]|_], Acc) -> Acc;
transpose(Matrix, Acc) ->
    transpose(lists:map(fun tl/1, Matrix), [lists:map(fun hd/1, Matrix) | Acc]).

flatten(X) -> lists:reverse(flatten(X,[])).

flatten([],Acc) -> Acc;
flatten([H|T],Acc) when is_list(H) -> flatten(T, flatten(H,Acc));
flatten([H|T],Acc) -> flatten(T,[H|Acc]).

spiral([], Acc) -> Acc;
spiral([[]|_], Acc) -> Acc;
spiral([N], Acc) -> [N|Acc];
spiral([Head|Tail], Acc) ->
    spiral(transpose_wt(Tail), [Head|Acc]).

-spec spiral_order(Matrix :: [[integer()]]) -> [integer()].
spiral_order(Matrix) -> flatten(lists:reverse(spiral(Matrix, []))).
```