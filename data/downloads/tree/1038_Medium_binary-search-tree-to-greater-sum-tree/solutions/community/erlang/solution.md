# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5838258/](https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/solutions/5838258/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Tree traversal problem (Post order)

1. Get sum of node values from right child and add it to current node value and update current node value
2. Pass current node value when to get sum of node values of left child and get "sum of left nodes + current value + sum of right nodes"
3. return Root node of tree

# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec bst_to_gst(Root :: #tree_node{} | null) -> #tree_node{} | null.

bst_to_gst_impl(null, Sum) -> {Sum, null};
bst_to_gst_impl(Node, Sum) ->
    {RightSum, Right} = bst_to_gst_impl(Node#tree_node.right, Sum),
    CurVal = Node#tree_node.val + RightSum,
    {LeftSum, Left} = bst_to_gst_impl(Node#tree_node.left, CurVal),
    {LeftSum, #tree_node{val = CurVal, left = Left, right = Right}}.

bst_to_gst(Root) ->
    {_, Result} = bst_to_gst_impl(Root, 0),
    Result.
```