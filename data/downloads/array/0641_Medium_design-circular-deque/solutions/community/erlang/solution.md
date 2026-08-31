# Easy Erlang Solution with Mnesia

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5842048/](https://leetcode.com/problems/design-circular-deque/solutions/5842048/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just define record and use mnesia.

# Code
```erlang []
-record(deque, {
    id :: integer(),
    capacity :: integer(),
    count :: integer(),
    data :: [integer()]
}).

mnesia_init() ->
    mnesia:create_schema([node()]),
    mnesia:start(),
    mnesia:create_table(deque, [{attributes, record_info(fields, deque)}]).

mnesia_transaction(F) ->
    {_, Result} = mnesia:transaction(F),
    Result.

-spec my_circular_deque_init_(K :: integer()) -> any().
my_circular_deque_init_(K) ->
    mnesia_init(),
    mnesia:transaction(
        fun() ->
            mnesia:write(#deque{
                id = 0,
                capacity = K,
                count = 0,
                data = []
            })
        end
    ),
    null.

-spec my_circular_deque_insert_front(Value :: integer()) -> boolean().
my_circular_deque_insert_front(Value) ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0, write),
            case E#deque.capacity =< E#deque.count of
                true -> false;
                _ -> 
                    mnesia:write(
                        E#deque{count = E#deque.count + 1, data = [Value] ++ E#deque.data}
                    ), 
                    true
            end
        end
    ).

-spec my_circular_deque_insert_last(Value :: integer()) -> boolean().
my_circular_deque_insert_last(Value) ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0, write),
            case E#deque.capacity =< E#deque.count of
                true -> false;
                _ -> 
                    mnesia:write(
                        E#deque{count = E#deque.count + 1, data = E#deque.data ++ [Value]}
                    ), 
                    true
            end
        end
    ).

-spec my_circular_deque_delete_front() -> boolean().
my_circular_deque_delete_front() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0, write),
            case E#deque.count of
                0 -> false;
                _ -> 
                    mnesia:write(
                        E#deque{count = E#deque.count - 1, data = tl(E#deque.data)}
                    ), 
                    true
            end
        end
    ).

-spec my_circular_deque_delete_last() -> boolean().
my_circular_deque_delete_last() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0, write),
            case E#deque.count of
                0 -> false;
                _ -> 
                    mnesia:write(
                        E#deque{count = E#deque.count - 1, data = lists:reverse(tl(lists:reverse(E#deque.data)))}
                    ), 
                    true
            end
        end
    ).

-spec my_circular_deque_get_front() -> integer().
my_circular_deque_get_front() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0),
            case E#deque.count of
                0 -> -1;
                _ -> hd(E#deque.data)
            end
        end
    ).

-spec my_circular_deque_get_rear() -> integer().
my_circular_deque_get_rear() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0),
            case E#deque.count of
                0 -> -1;
                _ -> hd(lists:reverse(E#deque.data))
            end
        end
    ).

-spec my_circular_deque_is_empty() -> boolean().
my_circular_deque_is_empty() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0),
            case E#deque.count of
                0 -> true;
                _ -> false
            end
        end
    ).

-spec my_circular_deque_is_full() -> boolean().
my_circular_deque_is_full() ->
    mnesia_transaction(
        fun() ->
            [E] = mnesia:read(deque, 0),
            E#deque.capacity =:= E#deque.count
        end
    ).


%% Your functions will be called as such:
%% my_circular_deque_init_(K),
%% Param_1 = my_circular_deque_insert_front(Value),
%% Param_2 = my_circular_deque_insert_last(Value),
%% Param_3 = my_circular_deque_delete_front(),
%% Param_4 = my_circular_deque_delete_last(),
%% Param_5 = my_circular_deque_get_front(),
%% Param_6 = my_circular_deque_get_rear(),
%% Param_7 = my_circular_deque_is_empty(),
%% Param_8 = my_circular_deque_is_full(),

%% my_circular_deque_init_ will be called before every test case, in which you can do some necessary initializations.
```