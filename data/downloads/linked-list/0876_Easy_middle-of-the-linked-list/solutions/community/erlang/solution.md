# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/3938666/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/3938666/)

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
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec middle_node(#list_node{} | 'null') -> #list_node{} | 'null'.
middle_node(Head) ->
    middle_node(Head, Head).

-spec middle_node(#list_node{} | 'null', #list_node{} | 'null') -> #list_node{} | 'null'.
middle_node('null', Slow) -> 
    Slow;
middle_node(#list_node{next = 'null'}, Slow) -> 
    Slow;
middle_node(#list_node{next = NextFast}, #list_node{next = NextSlow}) -> 
    middle_node(NextFast#list_node.next, NextSlow).
```