# Erlang - Pure functional solution

**Author:** aozeritsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/1551198/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/1551198/)

---

```
%% Definition for a binary tree node.
%%
%% -record(tree_node, {val = 0 :: integer(),
%%                     left = null  :: 'null' | #tree_node{},
%%                     right = null :: 'null' | #tree_node{}}).

-spec delete_node(Root :: #tree_node{} | null, Key :: integer()) -> #tree_node{} | null.

right_most({tree_node, Val, _, null}) ->
    Val;
right_most({tree_node, Val, Left, Right}) ->
    right_most(Right).

delete_node(null, _) -> null;
delete_node({tree_node, Key, null, null}, Key) ->
    null;
delete_node({tree_node, Key, null, Right}, Key) ->
    Right;
delete_node({tree_node, Key, Left, null}, Key) ->
    Left;
delete_node({tree_node, Key, Left, Right}, Key) ->
    Val=right_most(Left),
    NewLeft=delete_node(Left, Val),
    {tree_node, Val, NewLeft, Right};
delete_node({tree_node, Val, Left, Right}, Key) when Val<Key->
    {tree_node, Val, Left, delete_node(Right, Key)};
delete_node({tree_node, Val, Left, Right}, Key) when Val>Key->
    {tree_node, Val, delete_node(Left, Key), Right}.
```