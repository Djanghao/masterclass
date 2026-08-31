# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/3938623/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/3938623/)

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

-spec generate_trees(N :: integer()) -> [#tree_node{} | null].
generate_trees(N) ->
    generate_trees(1, N).

% Helper function to recursively generate trees for a range
-spec generate_trees(Start :: integer(), End :: integer()) -> [#tree_node{} | null].
generate_trees(Start, End) when Start > End ->
    [null];  % Base case: no valid tree
generate_trees(Start, End) ->
    lists:flatmap(fun(I) ->
        % Generate all possible left and right subtrees
        LeftSubtrees = generate_trees(Start, I - 1),
        RightSubtrees = generate_trees(I + 1, End),
        % For each combination of a left and a right subtree, create a new tree
        lists:foldl(fun(Left, Acc1) ->
            lists:foldl(fun(Right, Acc2) ->
                [#tree_node{val = I, left = Left, right = Right} | Acc2]
            end, Acc1, RightSubtrees)
        end, [], LeftSubtrees)
    end, lists:seq(Start, End)).
```