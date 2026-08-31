# Erlang Solution

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5127427/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5127427/)

---

```erlang
-spec double_it(Head :: #list_node{} | null) -> #list_node{} | null.
double_it(Head) ->
    NewHead = reverse(Head, null),
    double(NewHead, 0, null).

double(null, 0, Prev) ->
    Prev;
double(null, N, Prev) ->
    #list_node{ val = N, next = Prev};
double(Cur = #list_node{ val = Val, next = Next }, Carry, Prev) ->
    NewVal = Val * 2 + Carry,
    {Final, NewCarry} = case NewVal > 9 of
        true ->
            {NewVal - 10, 1};
        false ->
            {NewVal, 0}
    end,
    NewNode = #list_node{ val = Final, next = Prev },
    double(Next, NewCarry, NewNode).

reverse(null, Prev) ->
    Prev;
reverse(Node = #list_node{ val = Val, next = Next }, Prev) ->
    reverse(Next, #list_node{ val = Val, next = Prev }).
```