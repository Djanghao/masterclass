# Erlang recursion

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/3735628/](https://leetcode.com/problems/subtree-of-another-tree/solutions/3735628/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec is_subtree(Root :: #tree_node{} | null, SubRoot :: #tree_node{} | null) -> boolean().
is_subtree(SubRoot, SubRoot) ->
    true;
is_subtree(#tree_node{left=Left, right=Right}, SubRoot) ->
    is_subtree(Left, SubRoot) or is_subtree(Right, SubRoot);
is_subtree(_, _) ->
    false.



```