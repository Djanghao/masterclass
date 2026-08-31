# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3941161/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3941161/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec max_depth(Root :: #tree_node{} | null) -> integer().
max_depth(null) ->
    0;  % If the tree is empty, its depth is 0.
max_depth(#tree_node{left = Left, right = Right}) ->
    % Find the maximum depth of the left and right subtrees, then add 1.
    1 + max(max_depth(Left), max_depth(Right)).
```