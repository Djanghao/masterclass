# 4-character solution in Erlang

**Author:** Yboviko
**Votes:** 0
**Link:** [https://leetcode.com/problems/same-tree/solutions/4236747/](https://leetcode.com/problems/same-tree/solutions/4236747/)

---

Meaning `P==Q`, since the function is part of the question.
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec is_same_tree(P :: #tree_node{} | null, Q :: #tree_node{} | null) -> boolean().
is_same_tree(P, Q) ->
    P == Q.
```