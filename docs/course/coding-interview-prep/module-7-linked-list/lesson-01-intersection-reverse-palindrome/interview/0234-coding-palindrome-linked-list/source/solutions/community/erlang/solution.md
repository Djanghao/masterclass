# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/4324195/](https://leetcode.com/problems/palindrome-linked-list/solutions/4324195/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We have can check is linked list palindrome to compare list and reversed list is same

# Approach
<!-- Describe your approach to solving the problem. -->
Unpack singly-linked list and compare unpacked list is same to reversed unpacked list

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Unpacking: $$O(N)$$
Reversing: $$O(N/2) = O(N)$$
Total: $$O(N+N) = O(N)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Store unpacked list: $$O(N)$$
Total: $$O(N)$$

# Code
```
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec is_palindrome(Head :: #list_node{} | null) -> boolean().
-import(lists,[reverse/1]). 

list_to_seq(null) -> [];
list_to_seq(Head) ->
    [Head#list_node.val] ++ list_to_seq(Head#list_node.next).

is_palindrome(null) -> false;
is_palindrome(Head) ->
    Seq = list_to_seq(Head),
    Seq =:= reverse(Seq).
```