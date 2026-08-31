# Erlang | Stack

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5943253/](https://leetcode.com/problems/parsing-a-boolean-expression/solutions/5943253/)

---

# Code
```erlang []
-spec bool_to_int(X :: boolean()) -> integer().
bool_to_int(X) -> case X of true -> 1; false -> 0 end.


-spec prev_operator(TrueCount :: integer(), FalseCount :: integer(), Stack :: queue:queue()) -> {integer(), integer(), queue:queue()}.
prev_operator(TrueCount, FalseCount, Stack) ->
  Value = queue:last(Stack),
  if
    Value =:= $t orelse Value =:= $f ->
      prev_operator(TrueCount + bool_to_int(Value =:= $t), FalseCount + bool_to_int(Value =:= $f), queue:liat(Stack));
    true ->
      {TrueCount, FalseCount, Stack}
  end.


-spec eval(Data :: queue:queue()) -> queue:queue().
eval(Data) ->
  {TrueCount, FalseCount, Stack} = prev_operator(0, 0, Data),
  Operator = queue:last(Stack),
  NewStack =  queue:liat(Stack),

  Value = case Operator of
    $! -> if FalseCount > 0 -> $t; true -> $f end;
    $& -> if FalseCount > 0 -> $f; true -> $t end;
    $| -> if TrueCount > 0 -> $t; true -> $f end;
    _ -> $)
  end,

  queue:in(Value, NewStack).


-spec iter(C :: integer(), Stack :: queue:queue()) -> queue:queue().
iter(C, Stack) ->
  if
    (C =/= $() andalso (C =/= $)) andalso (C =/= $,) -> queue:in(C, Stack);
    C =:= $) -> eval(Stack);
    true -> Stack
  end.


-spec parse_bool_expr(Expression :: unicode:unicode_binary()) -> boolean().
parse_bool_expr(Expression) ->
  Stack = lists:foldl(fun iter/2, queue:new(), binary:bin_to_list(Expression)),
  queue:last(Stack) =:= $t.
```