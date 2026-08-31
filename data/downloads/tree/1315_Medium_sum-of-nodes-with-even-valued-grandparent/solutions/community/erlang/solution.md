# Easy Erlang Solution

**Author:** wt2080
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5841629/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/5841629/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Start with Root node, but begins traversal with child of Root node with Parent value(Root.val).
Parent value will be set as GrandParent when access Root.childes.childes agains.
Check GrandParent mod 2 == 0 and GrandParent =/= 0 (initial value, there no zero in value of node).
and sum it.
Done.

# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec sum_even_grandparent(Root :: #tree_node{} | null) -> integer().

sum_even_grandparent(Root) ->
    sum_even_grandparent(Root#tree_node.left, Root#tree_node.val, 0) +
    sum_even_grandparent(Root#tree_node.right, Root#tree_node.val, 0).
sum_even_grandparent(null, _, _) -> 0;
sum_even_grandparent(Node, Parent, GrandParent) ->
    sum_even_grandparent(Node#tree_node.left, Node#tree_node.val, Parent) +
    sum_even_grandparent(Node#tree_node.right, Node#tree_node.val, Parent) +
    case GrandParent rem 2 of
        0 when GrandParent > 0 -> Node#tree_node.val;
        _ -> 0
    end.
```