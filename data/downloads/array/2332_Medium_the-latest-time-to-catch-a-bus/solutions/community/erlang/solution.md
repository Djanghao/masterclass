# O(N log N) Solution with binary search in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4885381/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/4885381/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Preparing all candidate arrival time points and performing binary search to find the latest valid time points. 

# Complexity
- Time complexity: $O(N \\log N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec latest_time_catch_the_bus(Buses :: [integer()], Passengers :: [integer()], Capacity :: integer()) -> integer().
latest_time_catch_the_bus(Buses, Passengers, Capacity) -> 
    SortedBuses = lists:sort(Buses),
    SortedPassengers = lists:sort(Passengers),
    Nums = list_to_tuple(candidates(SortedBuses, SortedPassengers)),
    binary_search(Nums, 0, tuple_size(Nums), SortedBuses, SortedPassengers, Capacity). 

candidatesP([H1,H2|T]) when H1 < H2 - 1 -> [H2-1|candidatesP([H2|T])];
candidatesP([H1,H2|T]) -> candidatesP([H2|T]);
candidatesP(L) -> [].

dedup([H1|T1], [H2|T2]) when H1 == H2 -> dedup(T1, [H2|T2]);
dedup([H1|T1], [H2|T2]) when H1 > H2 -> dedup([H1|T1], T2);
dedup([H1|T1], [H2|T2]) -> [H1|dedup(T1, [H2|T2])];
dedup([], L2) -> [];
dedup(L1, []) -> L1.

candidates(Buses, Passengers) -> 
    P = candidatesP([0] ++ Passengers),    
    lists:sort(dedup(dedup(Buses, Passengers), P) ++ P).
    
valid(T, [BH|BT], [], Waiting, Capacity) when T =< BH, Capacity > Waiting -> true;
valid(T, [BH|BT], [], Waiting, Capacity) -> valid(T, BT, [], Waiting - min(Waiting, Capacity), Capacity);
valid(T, [], Passenger, Waiting, Capacity) -> false;
valid(T, [BH|BT], [PH|PT], Waiting, Capacity) when PH =< BH -> valid(T, [BH|BT], PT, Waiting + 1, Capacity);
valid(T, [BH|BT], [PH|PT], Waiting, Capacity) -> valid(T, BT, [PH|PT], Waiting - min(Waiting, Capacity), Capacity).

binary_search(Nums, L, R, SortedBuses, SortedPassengers, Capacity) when L == R - 1 -> element(L+1, Nums);
binary_search(Nums, L, R, SortedBuses, SortedPassengers, Capacity) -> 
    M = (L + R) div 2,
    T = element(M+1, Nums),
    case valid(T, SortedBuses, [X || X <- SortedPassengers, X < T], 0, Capacity) of
        true -> binary_search(Nums, M, R, SortedBuses, SortedPassengers, Capacity);
        false -> binary_search(Nums, L, M, SortedBuses, SortedPassengers, Capacity)
    end.
```