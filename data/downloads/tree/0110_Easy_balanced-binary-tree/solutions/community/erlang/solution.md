# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/3934450/](https://leetcode.com/problems/balanced-binary-tree/solutions/3934450/)

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
-spec height(#tree_node{} | 'null') -> non_neg_integer().
height(null) ->
    %% An empty tree has height 0
    0;
height(#tree_node{left = Left, right = Right}) ->
    %% The height of a node is the maximum height of its two children, plus 1
    1 + max(height(Left), height(Right)).

%% The main function to check if a tree is height-balanced.
-spec is_balanced(#tree_node{} | 'null') -> boolean().
is_balanced(null) ->
    %% An empty tree is height-balanced
    true;
is_balanced(#tree_node{left = Left, right = Right}) ->
    %% A tree is height-balanced if the absolute height difference of its two children is at most 1,
    %% and the subtrees of its two children are also height-balanced
    abs(height(Left) - height(Right)) =< 1 andalso is_balanced(Left) andalso is_balanced(Right).

```