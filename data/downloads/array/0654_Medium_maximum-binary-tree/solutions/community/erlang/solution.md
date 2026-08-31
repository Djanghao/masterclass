# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/5841618/](https://leetcode.com/problems/maximum-binary-tree/solutions/5841618/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, We have to know which value is at left or right side of max value. So I used lists:enumerate/1 to store Index in list and sort it with the value of tuple in it.

and, To make binary tree, First, I picked the largest value(front of the list) and made two list of left and right side (list of left side stores values has smaller index compared to index of largest value, right side is larger index).

and just recurse tree generator function, Done.

# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec construct_maximum_binary_tree(Nums :: [integer()]) -> #tree_node{} | null.

construct_maximum_binary_tree_impl([]) -> null;
construct_maximum_binary_tree_impl([{Idx, Val} | T]) ->
    #tree_node{
        val = Val,
        left = construct_maximum_binary_tree_impl([{XIdx, XVal} || {XIdx, XVal} <- T, XIdx < Idx]),
        right = construct_maximum_binary_tree_impl([{XIdx, XVal} || {XIdx, XVal} <- T, XIdx > Idx])
    }.


construct_maximum_binary_tree(Nums) ->
    construct_maximum_binary_tree_impl(
        lists:sort(
            fun ({_, A}, {_, B}) ->
                A > B
            end, lists:enumerate(Nums)
        )
    ).
```