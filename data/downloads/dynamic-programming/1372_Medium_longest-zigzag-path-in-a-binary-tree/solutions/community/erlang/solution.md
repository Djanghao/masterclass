# [Erlang] Mutual recursion made easy with mutual recursion

**Author:** lvsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3434633/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/3434633/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Descending left counts as a `zig`, descending right counts as a `zag`. Increment a counter while alternating between these.

# Approach
<!-- Describe your approach to solving the problem. -->
When zigging, call `zig` on the left node with a fresh counter, and `zag` on the right node with an incremented counter, return the max of both.

When zagging, call `zig` on the left node with an incremented counter, and `zag` on the right node with a fresh counter, return the max of both.


# Code
```erlang []
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec longest_zig_zag(#tree_node{}) -> non_neg_integer().
longest_zig_zag(#tree_node{left = L, right = R}) ->
    max(zig(L, 0), zag(R, 0)).

zig(#tree_node{left = L, right = R}, N) ->
    max(zig(L, 0), zag(R, N + 1));
zig(null, N) -> N.

zag(#tree_node{left = L, right = R}, N) ->
    max(zig(L, N + 1), zag(R, 0));
zag(null, N) -> N.
```


# Complexity
- Time complexity:
    $$O(n)$$, visits each node thrice: discovery, returning from `zig`, then returning from `zag`.

- Space complexity:
    $$O(n)$$, no tail recursion possible, so each call remains in the stack until it can return a result.