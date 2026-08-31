# [Erlang] Space-optimised Union Find (beats 100%)

**Author:** lvsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3426723/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3426723/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using `union` &`find` on disjoint sets, where `union` balances  uptrees by keeping track of size, we get an array with node-indexed, where the root nodes store the size of their respective components. This is all we need to find the answer.


# Approach
<!-- Describe your approach to solving the problem. -->
Aside from using path compression, the Union-Find data structure here is also space optimised by keeping track of root notes using the sign of their stored value. Child nodes have a value greater or equal to zero, pointing to their parent node, root nodes have a negative value, reflecting their number of children, useful for keeping the uptrees balanced while merging, and for calculating the result.

Once the input has been processed using `union` with a `foldl`, go over the resulting array, keeping track of result `Res` and the nodes processed so far in `Cnt`. When encountering a root node (i.e. `Size < 0`), update `Res` by adding `Size * Cnt`, and update `Cnt` by adding `Size` (note that `Size` is stored as a negative number, so we have to use subtract in order to add them).


# Code

```erlang []
-spec count_pairs(N :: integer(), Edges :: [[integer()]]) -> integer().
count_pairs(N, Edges) ->
    Sets = lists:foldl(
        fun([A, B], Acc) -> union(A, B, Acc) end,
        %% Each set initially has size one, with themselves as root
        array:new(N, {default, -1}),
        Edges
    ),
    {Result, _TotalNodes} = array:foldl(
        fun
            (_, Size, Acc) when Size >= 0 -> Acc;
            %% Size is negative, so subtract in order to add it
            (_, Size, {Res, Cnt}) -> {Res - Cnt * Size, Cnt - Size}
        end,
        {0, 0},
        Sets
    ),
    Result.

-type set() :: non_neg_integer().
-type size() :: neg_integer().
-type sets() :: array:array(set() | size()).

%% Returns the index of a set's root, and a path-compressed set of sets
-spec find(Set :: set(), Sets :: sets()) -> {set(), sets()}.
find(Set, Sets) ->
    Parent = array:get(Set, Sets),
    if
        Parent < 0 ->
            {Set, Sets};
        true ->
            {Root, Tmp} = find(Parent, Sets),
            {Root, array:set(Set, Root, Tmp)}
    end.

%% Joins two sets, and returns a path-compressed set of sets
-spec union(Set1 :: set(), Set2 :: set(), Sets :: sets()) -> sets().
union(Set1, Set2, OldSets) ->
    %% Only use union on root sets
    {R1, Tmp} = find(Set1, OldSets),
    {R2, NewSets} = find(Set2, Tmp),
    if
        %% Return path compressed sets if they already share a root
        R1 == R2 ->
            NewSets;
        true ->
            Size1 = array:get(R1, NewSets),
            Size2 = array:get(R2, NewSets),
            %% Use size to determine which set remains a root
            if
                Size1 > Size2 ->
                    array:set(R2, Size1 + Size2, array:set(R1, R2, NewSets));
                true ->
                    array:set(R1, Size1 + Size2, array:set(R2, R1, NewSets))
            end
    end.
```


# Complexity
- Time complexity: $$O(n\\ +\\ e)$$

- Space complexity: $$O(n)$$