# Erlang - Simple recusive solution

**Author:** aozeritsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/1493465/](https://leetcode.com/problems/combination-sum-ii/solutions/1493465/)

---

```
-spec combination_sum2(Candidates :: [integer()], Target :: integer()) -> [[integer()]].

f(_, 0, Cur, Acc) -> [Cur|Acc];
f(_, Target, Cur, Acc) when Target < 0 -> Acc;
f([], Target, Cur, Acc) -> Acc;
f([A|B], Target, Cur, Acc) ->
    F1=f(B,Target-A, [A|Cur], Acc),
    Next=lists:dropwhile(fun(Item) -> Item =:= A end, B),
    f(Next,Target, Cur, F1).

combination_sum2(Candidates, Target) ->
  f(lists:sort(Candidates), Target, [], []).
```