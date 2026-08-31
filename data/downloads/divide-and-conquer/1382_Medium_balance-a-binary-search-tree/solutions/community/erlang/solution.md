# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5846321/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5846321/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary Search Tree (BST) have to handle the nodes like;
left child's subtree have to set smaller value,
right child's subtree have to set larger value than current subtree's root node.

So I did like this:
1. flatten tree to list
2. select value index of $$length(List) / 2 + 1$$ as $Pivot$ and partition flatten list like { [$X | X < Pivot$], Pivot, [$X | X > Pivot$] } (BST does not have duplication in node values)
3. make node recursively like
    value=$Pivot$
    left = $Pivot$ of Left List
    right = $Pivot$ of Right List
4. done


# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

flatten_tree(null) -> [];
flatten_tree(Node) ->
    flatten_tree(Node#tree_node.left) ++ 
    [Node#tree_node.val] ++ 
    flatten_tree(Node#tree_node.right).

partition(List) -> 
    N = length(List),
    PivotIdx = N div 2 + 1,
    Left = [X || {Idx, X} <- lists:enumerate(List), Idx < PivotIdx],
    Right = [X || {Idx, X} <- lists:enumerate(List), Idx > PivotIdx],
    {Left, lists:nth(PivotIdx, List), Right}.

build_tree([]) -> null;
build_tree(List) -> 
    {Left, Pivot, Right} = partition(List),
    #tree_node{
        val = Pivot,
        left = build_tree(Left),
        right = build_tree(Right)
    }.

-spec balance_bst(Root :: #tree_node{} | null) -> #tree_node{} | null.
balance_bst(null) -> null;
balance_bst(Root) ->
    FlattenList = lists:sort(flatten_tree(Root)),
    build_tree(FlattenList).
```