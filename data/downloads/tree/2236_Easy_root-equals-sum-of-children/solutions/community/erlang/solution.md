# Recursive correct solution

**Author:** noobsenslaver
**Votes:** 0
**Link:** [https://leetcode.com/problems/root-equals-sum-of-children/solutions/5873747/](https://leetcode.com/problems/root-equals-sum-of-children/solutions/5873747/)

---

# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec check_tree(Root :: #tree_node{} | null) -> boolean().
check_tree(#tree_node{left = L, right = R, val = V}) ->
  V == (sum(L) + sum(R));
check_tree(_) ->
  false.

sum(#tree_node{left = L, right = R, val = V}) ->
    V + sum(L) + sum(R);
sum(_) ->
    0.
```