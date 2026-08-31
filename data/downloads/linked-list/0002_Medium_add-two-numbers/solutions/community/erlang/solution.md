# Simple recursion ToInt -> FromInt

**Author:** noobsenslaver
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/5873719/](https://leetcode.com/problems/add-two-numbers/solutions/5873719/)

---

# Code
```erlang []
-spec add_two_numbers(L1 :: #list_node{} | null, L2 :: #list_node{} | null) -> #list_node{} | null.
add_two_numbers(L1, L2) ->
    int_to_tree(tree_to_int(L1)+tree_to_int(L2)).

int_to_tree(N) ->
    Next = case N div 10 of
               0 -> null;
               Rest -> int_to_tree(Rest)
           end,
    #list_node{val = N rem 10, next = Next}.

tree_to_int(Tree) ->
    tree_to_int(Tree, 1).
tree_to_int(#list_node{val = V, next = Tree}, Base) ->
    V * Base + tree_to_int(Tree, Base * 10);
tree_to_int(_, _) ->
    0.

```