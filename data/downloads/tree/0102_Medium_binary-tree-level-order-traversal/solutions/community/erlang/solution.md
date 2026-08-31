# Recursive Erlang

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3623390/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/3623390/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)

- Space complexity: $$O(n)

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec level_order(Root :: #tree_node{} | null) -> [[integer()]].
level_order(Root) ->
  do({[Root], []}, {[], []}).

do({[], []}, {Last, []}) ->
    Last;
do({[], NextLevel}, {Last, Acc}) ->
    do({NextLevel, []}, {Last ++ [lists:reverse(Acc)], []});
do({[Node| Rest], NextLevel}, {Last, Acc}) ->
    case Node of 
        null ->
            do({Rest, NextLevel}, {Last, Acc});
        #tree_node{left = Left, val = Val, right=Right} ->
            do({Rest , NextLevel ++ [Left, Right]}, {Last, [Val| Acc]})
    end.
    
```