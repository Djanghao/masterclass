# Erlang solution! Only pattern matching!

**Author:** vadim2404
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3778320/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3778320/)

---

# Code
```erlang
-spec add_two_numbers(L1 :: #list_node{} | null, L2 :: #list_node{} | null) -> #list_node{} | null.
add_two_numbers(L1, L2) ->
  New_L1 = reverse_list(L1),
  New_L2 = reverse_list(L2),
  merge_lists(New_L1, New_L2).

-spec reverse_list(List :: #list_node{} | null) -> #list_node{} | null.
reverse_list(List) -> reverse_list(List, null).

-spec reverse_list(#list_node{} | null, Head :: #list_node{} | null) -> #list_node{} | null.
reverse_list(null, Head) -> Head;
reverse_list(#list_node{val = Value, next = Next}, Head) ->
    New_Head = #list_node{val = Value, next = Head},
    reverse_list(Next, New_Head).

-spec merge_lists(L1 :: #list_node{} | null, L2 :: #list_node{} | null) -> #list_node{} | null.
merge_lists(L1, L2) -> merge_lists(L1, L2, null, 0).

-spec merge_lists(#list_node{} | null, #list_node{} | null, Head :: #list_node{} | null, Value :: non_neg_integer()) -> #list_node{} | null.
merge_lists(null, null, Head, 0) -> Head;
merge_lists(null, null, Head, Value) -> #list_node{val = Value, next = Head};
merge_lists(null, #list_node{} = L2, Head, Value) -> merge_lists(L2, null, Head, Value);
merge_lists(#list_node{val = Value1, next = Next1}, null, Head, Value) ->
  Value2 = Value1 + Value,
  New_Value = Value2 div 10,
  Value3 = Value2 rem 10,
  Node = #list_node{val = Value3, next = Head},
  merge_lists(Next1, null, Node, New_Value);
merge_lists(#list_node{val = Value1, next = Next1}, #list_node{val = Value2, next = Next2}, Head, Value) ->
  Value3 = Value1 + Value2 + Value,
  New_Value = Value3 div 10,
  Value4 = Value3 rem 10,
  Node = #list_node{val = Value4, next = Head},
  merge_lists(Next1, Next2, Node, New_Value).
```
