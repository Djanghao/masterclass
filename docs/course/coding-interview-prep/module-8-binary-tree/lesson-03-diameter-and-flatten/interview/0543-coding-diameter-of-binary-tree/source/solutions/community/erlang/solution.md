# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/5831400/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/5831400/)

---

# Intuition
Calculate depth of each child and add it.
Get maximum of added value while access every node in tree.


# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec diameter_of_binary_tree(Root :: #tree_node{} | null) -> integer().

depth(null) -> 0;
depth(Root) -> 
    1 + max(depth(Root#tree_node.left), depth(Root#tree_node.right)).

diameter_of_binary_tree(null) -> 0;
diameter_of_binary_tree(Root) ->
    max(
        max(
            diameter_of_binary_tree(Root#tree_node.left), 
            diameter_of_binary_tree(Root#tree_node.right)
        ),
        depth(Root#tree_node.left) + depth(Root#tree_node.right)
    ).
```