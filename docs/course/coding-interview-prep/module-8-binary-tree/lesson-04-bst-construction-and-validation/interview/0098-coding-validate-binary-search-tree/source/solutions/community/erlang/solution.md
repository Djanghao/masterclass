# Erlang O(n) Recursive

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/3620041/](https://leetcode.com/problems/validate-binary-search-tree/solutions/3620041/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec is_valid_bst(Root :: #tree_node{} | null) -> boolean().
is_valid_bst(Tree) ->
   is_valid_bst(null, Tree,  null).

in_range(null, Middle, null) ->
    true;

in_range(Min, Middle, null) ->
    Min < Middle;

in_range(null, Middle, Max) ->
    Middle < Max;

in_range(Min, Middle, Max) ->
    (Min < Middle) and (Middle < Max).

is_valid_bst(Min, null, Max) ->
    true;
is_valid_bst(Min, #tree_node{val = Val, left = Left, right = Right}, Max) ->
    in_range(Min, Val, Max) andalso
            is_valid_bst(Min, Left, Val) andalso 
                is_valid_bst(Val, Right, Max).
```