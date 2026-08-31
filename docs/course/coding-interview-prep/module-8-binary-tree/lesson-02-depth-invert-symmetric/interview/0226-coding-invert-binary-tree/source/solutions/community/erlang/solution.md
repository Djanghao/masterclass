# Simple approach

**Author:** noobsenslaver
**Votes:** 0
**Link:** [https://leetcode.com/problems/invert-binary-tree/solutions/5869725/](https://leetcode.com/problems/invert-binary-tree/solutions/5869725/)

---

# Code
```erlang []
-spec invert_tree(Root :: #tree_node{} | null) -> #tree_node{} | null.
invert_tree(#tree_node{left = L, right = R} = Root) ->
    Root#tree_node{left = invert_tree(R), right = invert_tree(L)};
invert_tree(Else) ->
    Else.
```