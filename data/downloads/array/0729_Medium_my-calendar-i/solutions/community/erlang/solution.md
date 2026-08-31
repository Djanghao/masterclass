# Erlang | Segment Tree

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/my-calendar-i/solutions/5836636/](https://leetcode.com/problems/my-calendar-i/solutions/5836636/)

---

# Code
```erlang []
-spec my_calendar_init_() -> any().
my_calendar_init_() ->
  persistent_term:put(calendar, []).


-spec my_calendar_book(Start :: integer(), End :: integer()) -> boolean().
my_calendar_book(Start, End) ->
  Calendar = persistent_term:get(calendar),
  IsOverlap = fun({A, B}, Acc) ->
    case (End > A) andalso (Start < B) of
      true -> false;
      false -> Acc
    end
  end,
  
  Status = lists:foldl(IsOverlap, true, Calendar),
  case Status of
    true -> persistent_term:put(calendar, [{Start, End} | Calendar]);
    _ -> nomatch
  end,
  Status.

%% Your functions will be called as such:
%% my_calendar_init_(),
%% Param_1 = my_calendar_book(Start, End),

%% my_calendar_init_ will be called before every test case, in which you can do some necessary initializations.
```