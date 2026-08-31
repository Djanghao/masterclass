# Erlang recursive union find

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/3717706/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/3717706/)

---

# Intuition


# Approach
<!-- Describe your approach to solving the problem. -->

Using ETS instead of maps for the union-find algorithm to avoid passing along variables as the map changes.
Using union-find algorithm to detect a cycle

# Complexity
- Time complexity:
O(n^2  log(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
uf_init(Points) ->
    Root = ets:new(root, []), 
    Rank = ets:new(rank, []),
    [begin 
        ets:insert(Rank, {Point, 1}),
        ets:insert(Root, {Point, Point})
    end || Point <- Points],
    {Root, Rank}.

uf_find({Root, Rank} = UF, X) ->
    case ets:lookup(Root, X) of 
        [{X, X}] ->
            X;
        [{X, RootX}] ->
            NRootX = uf_find(UF, RootX), 
            ets:insert(Root, [{X, NRootX}]),
            NRootX
    end.

uf_union({Root, Rank} = UF, X, Y) ->
    RootX = uf_find(UF, X),
    RootY = uf_find(UF, Y),
    case RootX == RootY of 
        true -> 
            false;
        false ->
            [{RootX, RankX}] = ets:lookup(Rank, RootX),
            [{RootY, RankY}] = ets:lookup(Rank, RootY),
            case {RankX, RankY} of 
                {Same, Same} ->
                    ets:insert(Root, {RootX, RootY}),
                    ets:insert(Rank, {RootY, RankY+1});
                {RankX, RankY} when RankX > RankY ->
                    ets:insert(Root, {RootY, RootX});
                {RankX, RankY} when RankX < RankY ->
                    ets:insert(Root, {RootX, RootY})
            end,
            true
    end.

-spec min_cost_connect_points(Points :: [[integer()]]) -> integer().
min_cost_connect_points(Points) ->
  build_kruskal(weights(Points), uf_init(Points), 0, 0, length(Points)-1).

build_kruskal(_SortedWeights, _UF, Result, Max, Max) ->
    Result;
build_kruskal([{Weight, Point1, Point2} | SortedWeights], UF, Result, Current, Max) ->
    {NResult, NCurrent} = case not (uf_find(UF, Point1) == uf_find(UF, Point2)) of 
            true -> 
                % Roots or Point1 and Point2 are not equal
                uf_union(UF, Point1, Point2),
                {Weight + Result, Current+1};
            false ->
                {Result, Current}
    end,
    build_kruskal(SortedWeights, UF, NResult, NCurrent, Max).

weights(Points) ->
    lists:sort(lists:foldr(fun(Point, AccList) ->
        lists:foldr(fun(Second, Acc2) ->
              [{distance(Point, Second), Point, Second} | Acc2]
             end, 
             AccList, 
             lists:delete(Point, Points))

    end, [], Points)).

distance([X,Y], [X2, Y2]) ->
    abs(X - X2) + abs(Y -Y2).


```