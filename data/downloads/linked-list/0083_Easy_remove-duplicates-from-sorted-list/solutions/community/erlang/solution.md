# Erlang recursive with pivot value

**Author:** melkyWay
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3065933/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3065933/)

---


# Code
```
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec delete_duplicates(Head :: #list_node{} | null) -> #list_node{} | null.

delete_duplicates(Head) when Head == null -> null;
delete_duplicates(Head) -> 
   delete_duplicates(Head, Head#list_node.val).

delete_duplicates(null, Pivot) -> #list_node{val = Pivot, next = null};
delete_duplicates(Llist, Pivot) ->
    {_, V, N} = Llist,
    if
        Pivot == V -> delete_duplicates(N, Pivot);
        true -> #list_node{val = Pivot, next = delete_duplicates(N, V)}
    end.




```