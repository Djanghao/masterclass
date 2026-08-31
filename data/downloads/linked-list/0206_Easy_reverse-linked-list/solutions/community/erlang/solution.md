# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/5314947/](https://leetcode.com/problems/reverse-linked-list/solutions/5314947/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

final class Solution {
    public ListNode reverseList(final ListNode head) {
        return rec(head, null);
    }

    private static ListNode rec (final ListNode head, final ListNode acc){
        return switch(head) {
            case null -> acc;
            default -> {
                final ListNode next = head.next;
                head.next = acc;
                yield rec(next, head);
            }
        };
    }
}
```
```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        def rev(head: Optional[ListNode], acc: Optional[ListNode] ) -> Optional[ListNode]:
            match head:
                case None:
                    return acc
                case _:
                    next = head.next
                    head.next = acc
                    return rev(next, head)
        return rev(head, None)
```
```rust []
// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
type T = Option<Box<ListNode>>;
impl Solution {
    pub fn reverse_list(head: T) -> T {
        fn rev(head: T, acc: T) -> T{
            match head {
                None => acc, 
                Some(mut node) => {
                    let next = node.next;
                    node.next = acc;
                    rev(next, Some(node))
                },
            }
        }
        rev(head, None)
    }
}
```
``` c []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode *prev = NULL, *temp = NULL;
    while(head != NULL){
        temp = head->next;
        head->next = prev;
        prev = head;
        head = temp;
    }return prev;
}
```
``` erlang []
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec reverse_list(Head :: #list_node{} | null) -> #list_node{} | null.
reverse_list(Head) -> reverse_list_tail(Head, null).

reverse_list_tail(null, Acc) -> Acc;
reverse_list_tail(#list_node{val = Val, next = Next}, Acc) -> reverse_list_tail(Next, #list_node{val = Val, next = Acc}).
```
``` elixir []
# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do
  @spec reverse_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def reverse_list(nil),                              do: nil
  def reverse_list(%ListNode{val: v, next: n}),       do: reverse_list(n, %ListNode{val: v, next: nil})
  def reverse_list(%ListNode{val: v, next: n}, acc),  do: reverse_list(n, %ListNode{val: v, next: acc})
  def reverse_list(nil, acc),                         do: acc
end
```