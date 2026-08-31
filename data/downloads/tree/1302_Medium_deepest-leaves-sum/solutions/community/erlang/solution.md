# Using recursion and DFS

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/3164186/](https://leetcode.com/problems/deepest-leaves-sum/solutions/3164186/)

---

# Intuition
Caculate height and identify deepest level then DFS.

# Approach
Used recursive approach, preorder binary tree tranversal to catch up the deepest leaves at the level which were identified in `tree_height` function.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec deepest_leaves_sum(Root :: #tree_node{} | null) -> integer().
deepest_leaves_sum(Root) ->
    Height = tree_height(Root),
    sum(Root, Height).
         
tree_height('null') -> 0;
tree_height(Root) ->
    LHeight = 1 + tree_height(Root#tree_node.left),
    RHeight = 1 + tree_height(Root#tree_node.right),
    max(LHeight, RHeight).

sum('null', _) -> 0;   
sum(Root, Height) ->
    LLeaf = Root#tree_node.left,
    RLeaf = Root#tree_node.right,
    if Height =:= 1, LLeaf =:= 'null', RLeaf =:= 'null' ->
        Root#tree_node.val;
    true -> 
        sum(LLeaf, Height - 1) + sum(RLeaf, Height - 1) end.
```