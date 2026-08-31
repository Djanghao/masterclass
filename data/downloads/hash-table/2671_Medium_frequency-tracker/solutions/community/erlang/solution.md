# Erlang Solution

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/4924647/](https://leetcode.com/problems/frequency-tracker/solutions/4924647/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The global hashtable created with `ets` can pass the test case. `erlang:put()` and `erlang:get()` get TLE though. 

# Complexity
- Time complexity: $O(1)$ for each opeartion
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec frequency_tracker_init_() -> any().
frequency_tracker_init_() ->
    delete_table(numbers),
    delete_table(counts),
    ets:new(numbers, [named_table, set, public, {keypos, 1}]),
    ets:new(counts, [named_table, set, public, {keypos, 1}]).

delete_table(Name) ->
    case ets:info(Name) of
        undefined -> ok; % Table does not exist
        _ -> ets:delete(Name)
    end.

get(Table, Key) ->
    case ets:lookup(Table, Key) of
        [{_, Val}] -> Val;
        [] -> 0
    end.

put(Table, Key, Val) ->
    ets:insert(Table, {Key, Val}),
    Val.

increase(Table, Key, Add) ->
    Val = get(Table, Key) + Add,
    case Val >= 0 of
        true -> put(Table, Key, Val);
        false -> 0
    end.

-spec frequency_tracker_add(Number :: integer()) -> any().
frequency_tracker_add(Number) ->
    C = increase(numbers, Number, 1),
    increase(counts, C - 1, -1),
    increase(counts, C, 1).

-spec frequency_tracker_delete_one(Number :: integer()) -> any().
frequency_tracker_delete_one(Number) ->
    case get(numbers, Number) > 0 of
        true ->
            C = increase(numbers, Number, -1),
            increase(counts, C + 1, -1),
            increase(counts, C, 1);
        false -> ok
    end.

-spec frequency_tracker_has_frequency(Frequency :: integer()) -> boolean().
frequency_tracker_has_frequency(Frequency) -> get(counts, Frequency) > 0.

```