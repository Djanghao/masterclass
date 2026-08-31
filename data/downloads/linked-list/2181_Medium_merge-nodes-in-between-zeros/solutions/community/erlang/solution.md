# Recursive pattern matching

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3172682/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3172682/)

---

# Intuition
Traverse and collapse nodes delimited with zeros.

# Approach
Used the recursion for use three options:
- if `nex = null` return the result;
- if `val == 0` start/stop the collapsing the values;
- else start to accumulate.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec merge_nodes(Head :: #list_node{} | null) -> #list_node{} | null.
merge_nodes(Head) ->
    End = #list_node{val = 0, next = null},
    traverse_collapse(End, Head#list_node.next).

traverse_collapse (Acc, Cur) when Cur#list_node.next =:= null ->
    Acc;
traverse_collapse (Acc, Cur) when Cur#list_node.val =:= 0 ->
    End = #list_node{val = 0, next = null},
    Next = Cur#list_node.next,
    Acc#list_node{next = traverse_collapse(End, Next)};
traverse_collapse (Acc, Cur) -> 
    Acc_val = Acc#list_node.val,
    Cur_val = Cur#list_node.val,
    Acc_updated_val = Acc#list_node{val = Acc_val  + Cur_val},
    Next = Cur#list_node.next,
    traverse_collapse(Acc_updated_val, Next).
```