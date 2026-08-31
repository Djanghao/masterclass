# Erlang

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/3638021/](https://leetcode.com/problems/count-univalue-subtrees/solutions/3638021/)

---

# Intuition

Recursive appraoch
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 0(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 0(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec count_unival_subtrees(Root :: #tree_node{} | null) -> integer().
count_unival_subtrees(Root) ->
  {_, N} = do(Root),
  N.
do(null) ->
    {true, 0};

do(#tree_node{left=Left, right=Right, val=Val}=P) ->
    {BoolResultLeft, AccLeft} = do(Left),
    {BoolResultRight, AccRight} = do(Right),
    
    case (
        BoolResultLeft andalso 
        BoolResultRight andalso 
        equal(Val, Left) andalso 
        equal(Val, Right)
        ) of 
        true ->
            {true, AccRight+1+AccLeft};
        false ->
            {false, AccRight+AccLeft}
    end.


equal(Value, null) ->
    true;
equal(Value, #tree_node{val= Value}) ->
    true;
equal(_, _) ->
    false.
    
```