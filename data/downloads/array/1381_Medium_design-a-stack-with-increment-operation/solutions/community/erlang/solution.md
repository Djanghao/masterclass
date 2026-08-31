# Erlang | Mnesia ❤️

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5852266/](https://leetcode.com/problems/design-a-stack-with-increment-operation/solutions/5852266/)

---

# Code
```erlang []
-record(stack, {
  id :: integer(),
  data :: [integer()],
  index :: integer()
}).


-spec mnesia_init() -> any().
mnesia_init() ->
  mnesia:create_schema([node()]),
  mnesia:start(),
  mnesia:create_table(stack, [{attributes, record_info(fields, stack)}]).


-spec mnesia_transaction(F :: fun()) -> any().
mnesia_transaction(F) ->
  {_, Result} = mnesia:transaction(F),
  Result.


-spec insert_value(Index :: integer(), Value :: integer(), Data :: [integer()]) -> [integer()].
insert_value(Index, Value, Data) ->
  [case I =:= Index of true -> Value; false -> V end || {I, V} <- lists:enumerate(Data)].


-spec increment_values(Limit :: integer(), Value :: integer(), Data :: [integer()]) -> [integer()].
increment_values(Limit, Value, Data) ->
  [case I =< Limit of true -> lists:nth(I, Data) + Value; false -> V end || {I, V} <- lists:enumerate(Data)].


-spec custom_stack_init_(MaxSize :: integer()) -> any().
custom_stack_init_(MaxSize) ->
  mnesia_init(),
  mnesia:transaction(fun() ->
    mnesia:write(#stack{
      id = 0,
      data = lists:duplicate(MaxSize, 0),
      index = 1
    })
  end),
  null.


-spec custom_stack_push(X :: integer()) -> any().
custom_stack_push(X) ->
  mnesia_transaction(fun() ->
    [Stack] = mnesia:read(stack, 0, write),
    Index = Stack#stack.index,
    case Index =< length(Stack#stack.data) of
      true -> 
        mnesia:write(
          Stack#stack{
            data = insert_value(Index, X, Stack#stack.data), 
            index = Index + 1
          });
      false -> nomatch
    end,
    null
  end).


-spec custom_stack_pop() -> integer().
custom_stack_pop() ->
  mnesia_transaction(fun() ->
    [Stack] = mnesia:read(stack, 0, write),
    Index = Stack#stack.index - 1,
    case Index < 1 of
      true -> -1;
      false ->
        mnesia:write(
          Stack#stack{
            data = insert_value(Index, 0, Stack#stack.data),
            index = Index
          }),
        lists:nth(Index, Stack#stack.data)
    end
  end).


-spec custom_stack_increment(K :: integer(), Value :: integer()) -> any().
custom_stack_increment(K, Value) ->
  mnesia_transaction(fun() ->
    [Stack] = mnesia:read(stack, 0, write),
    Index = Stack#stack.index,
    case Index > 1 of
      true ->
        Limit = min(K, Index - 1),
        mnesia:write(
          Stack#stack{
            data = increment_values(Limit, Value, Stack#stack.data)
          });
      false -> nomatch
    end,
    null
  end).


%% Your functions will be called as such:
%% custom_stack_init_(MaxSize),
%% custom_stack_push(X),
%% Param_2 = custom_stack_pop(),
%% custom_stack_increment(K, Val),

%% custom_stack_init_ will be called before every test case, in which you can do some necessary initializations.
```