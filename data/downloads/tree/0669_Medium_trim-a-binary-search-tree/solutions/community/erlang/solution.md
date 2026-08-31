# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/3745052/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/3745052/)

---

re# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec trim_bst(Root :: #tree_node{} | null, Low :: integer(), High :: integer()) -> #tree_node{} | null.
trim_bst(Root, Low, High) ->
  do(Root, Low, High).

do(null, _, _) ->
    null;
do(#tree_node{val=Val, left=L, right=R}, Low, High) when Val < Low ->
    do(R, Low, High);
do(#tree_node{val=Val, left=L, right=R}, Low, High) when Val > High ->
    do(L, Low, High);
do(#tree_node{val=Val, left=L, right=R} = T, Low, High) ->
    T#tree_node{left = do(L, Low, High),
                right = do(R, Low, High)}.

```