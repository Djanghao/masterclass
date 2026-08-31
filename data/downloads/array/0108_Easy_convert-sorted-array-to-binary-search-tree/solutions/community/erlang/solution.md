# Erlang solution

**Author:** rusiecki
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/3549703/](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/solutions/3549703/)

---

# Intuition
We should be able to achieve balanced subtrees if we feed the same number of approximately equally long lists to both subtrees when creating the node.

# Approach
The plan is simple, for we consider 5 cases
1. the list is empty -> we do nothing
2. the list has one element -> we create a node with no subtrees
3. the list has two elements -> we create a node with only one subtree
4. the list has three elements -> we create a node with two subtrees
5. the list has more than three elements -> we create a node with subtrees created recursively

# Complexity
- Time complexity: O(nlog(n))
- Space complexity: O(n)

# Code
```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec sorted_array_to_bst(Nums :: [integer()]) -> #tree_node{} | null.
    
sorted_array_to_bst([]) -> 
    null;
sorted_array_to_bst([Mid]) ->
    #tree_node{
        val=Mid,
        left=null,
        right=null
    };
sorted_array_to_bst([[Left | Mid]]) ->
    #tree_node{
        val=Mid,
        left=Left,
        right=null
    };
sorted_array_to_bst([[Left | [Mid | Right]]]) ->
    #tree_node{
        val=Mid,
        left=Left,
        right=Right
    };
sorted_array_to_bst(List) -> 
    N = lists:flatlength(List),
    {Left, Rest} = lists:split(N div 2, List),
    [Mid | Right] = Rest,
    #tree_node{
        val=Mid,
        left=sorted_array_to_bst(Left),
        right=sorted_array_to_bst(Right)
    }.

```