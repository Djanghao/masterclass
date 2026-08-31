# Erlang | Segment Tree

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-ii/solutions/5840874/](https://leetcode.com/problems/my-calendar-ii/solutions/5840874/)

---

# Code
```erlang []
-spec my_calendar_two_init_() -> any().
my_calendar_two_init_() ->
  persistent_term:put(calendar, orddict:new()).


-spec add_or_update_pair(Key :: integer(), NewValue :: integer(), Calendar :: [tuple()]) -> [tuple()].
add_or_update_pair(Key, NewValue, Calendar) ->
  case orddict:find(Key, Calendar) of
    {ok, OldValue} -> orddict:store(Key, OldValue + NewValue, Calendar); % update
    error -> orddict:store(Key, NewValue, Calendar) % add
  end.


-spec is_triple_booking(Calendar :: [tuple()]) -> boolean().
is_triple_booking(Calendar) ->
  is_triple_booking(Calendar, true, 0).

-spec is_triple_booking(Calendar :: [tuple()], Status :: boolean(), Count :: integer()) -> boolean().
is_triple_booking([H | T], Status, Count) when Status ->
  {_, BookingCount} = H,
  Value = Count + BookingCount,
  case Value > 2 of
    true -> is_triple_booking([], false, Value);
    false -> is_triple_booking(T, true, Value)
  end;

is_triple_booking([], Status, _) -> 
  Status.


-spec my_calendar_two_book(Start :: integer(), End :: integer()) -> boolean().
my_calendar_two_book(Start, End) ->
  L0 = persistent_term:get(calendar),
  L1 = add_or_update_pair(Start, 1, L0),
  L2 = add_or_update_pair(End, -1, L1),

  Status = is_triple_booking(L2),
  case Status of 
    true -> persistent_term:put(calendar, L2);
    false -> nomatch
  end,
  Status.


%% Your functions will be called as such:
%% my_calendar_two_init_(),
%% Param_1 = my_calendar_two_book(Start, End),

%% my_calendar_two_init_ will be called before every test case, in which you can do some necessary initializations.
```