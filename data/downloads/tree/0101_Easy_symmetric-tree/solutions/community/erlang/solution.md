# Erlang solution

**Author:** melkyWay
**Votes:** 0
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/3070359/](https://leetcode.com/problems/symmetric-tree/solutions/3070359/)

---

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec is_symmetric(Root :: #tree_node{} | null) -> boolean().

is_symmetric(null) -> true;
is_symmetric(Root) -> is_symmetric(Root#tree_node.left, Root#tree_node.right).

is_symmetric(null, null) -> true;
is_symmetric(null, _) -> false;
is_symmetric(_, null) -> false;
is_symmetric(L, R) -> 
    is_symmetric(L#tree_node.left, R#tree_node.right)
     and (L#tree_node.val == R#tree_node.val) 
     and is_symmetric(R#tree_node.left, L#tree_node.right).

```