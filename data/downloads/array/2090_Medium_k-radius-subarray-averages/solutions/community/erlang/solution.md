# Erlang solution with sliding window

**Author:** giacomocavalieri
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3665035/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3665035/)

---

# Complexity
- Time complexity: $O(n)$ where $n$ is the size of the array
- Space complexity: $O(k)$ where $k$ is the size of the window

# Code
```
-spec get_averages(Nums :: [integer()], K :: integer()) -> [integer()].

split(N, XS) -> split(N, XS, []).
split(0, XS, Acc) -> {lists:reverse(Acc), XS};
split(_, [], Acc) -> {lists:reverse(Acc), []};
split(N, [X|XS], Acc) -> split(N-1, XS, [X | Acc]).

get_averages(Nums, 0) -> Nums;
get_averages(Nums, K) when (K*2 + 1) > length(Nums) -> lists:duplicate(length(Nums), -1);
get_averages(Nums, K) ->
    {WindowElems, Rest} = split(K*2, Nums),
    do(queue:from_list(WindowElems), Rest, lists:sum(WindowElems), K, lists:duplicate(K, -1)).

do(Window, [], WindowSum, K, Avgs) -> lists:reverse(lists:append(lists:duplicate(K, -1), Avgs));
do(Window, [Added | Nums], WindowSum, K, Avgs) ->
    {{value, Dropped}, Window1} = queue:out(Window),
    Window2 = queue:in(Added, Window1),
    Avg = (WindowSum + Added) div (K*2 + 1),
    NewSum = WindowSum + Added - Dropped,
    do(Window2, Nums, NewSum, K, [Avg | Avgs]).
```