# Using ETS

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-parking-system/solutions/3110823/](https://leetcode.com/problems/design-parking-system/solutions/3110823/)

---

# Intuition
Create three variables for each car type and reduce it each time when `add_car` function is invoked.

# Approach
Used Erlang build-int term storage (ETS) to store and update parking space values.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
-record(parking, {big, medium, small}).

-spec parking_system_init_(Big :: integer(), Medium :: integer(), Small :: integer()) -> any().
parking_system_init_(Big, Medium, Small) ->
    Is_empty = lists:member(parking, ets:all()),
    if Is_empty ->
        ets:delete(parking);
    true -> unit
        end,
     ets:new(parking, [set, named_table]),
     ets:insert(parking, [{big, Big}, {medium, Medium}, {small, Small}]).

is_free_and_update(CarType) ->
    [{_, Vacant}] =  ets:lookup(parking, CarType),
    ets:delete(parking, CarType), 
    ets:insert(parking, [{CarType, Vacant - 1}]),
    Vacant > 0.

-spec parking_system_add_car(CarType :: integer()) -> boolean().
parking_system_add_car(CarType) ->
    case CarType of 
        1 -> is_free_and_update(big);
        2 -> is_free_and_update(medium);
        3 -> is_free_and_update(small);
        _Else -> unit
    end.
    
%% Your functions will be called as such:
%% parking_system_init_(Big, Medium, Small),
%% Param_1 = parking_system_add_car(CarType),

%% parking_system_init_ will be called before every test case, in which you can do some necessary initializations.
```