# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/5324251/](https://leetcode.com/problems/remove-linked-list-elements/solutions/5324251/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
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
    public ListNode removeElements(final ListNode head, final int val) {
        final ListNode dummy = new ListNode(val, head);
        var curr = dummy;
        while (curr.next != null)
            if (curr.next.val == val) curr.next = curr.next.next;
            else curr = curr.next;
        return dummy.next;
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
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy = ListNode(-1, head)
        curr = dummy 
        while curr.next:
            if curr.next.val == val: curr.next  = curr.next.next
            else: curr = curr.next
        return dummy.next
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
    pub fn remove_elements(head: T, val: i32) -> T {
        let mut dummy = Box::new(ListNode{next: head, val: -1});
        let mut curr = &mut dummy;
        while let Some(node) = curr.next.as_mut(){
            if node.val == val{
                curr.next = node.next.take();
            }else{
                curr = curr.next.as_mut().unwrap();
            }
        }
        dummy.next
    }
}
```
``` golang []
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    dummy := &ListNode{Next: head}
    curr := dummy
    for curr.Next != nil {
        if curr.Next.Val == val{
            curr.Next = curr.Next.Next
        }else {
            curr = curr.Next 
        }
    }
    return dummy.Next
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
 
typedef struct ListNode node;
node* removeElements(const node* head, const int val) {
    node* dummy = malloc(sizeof(node));
    dummy->next = head;    
    node *curr = dummy;
    while (curr->next != NULL)
        if (curr->next->val == val) curr->next = curr->next->next;
        else curr = curr->next;
    return dummy->next;
}
```
``` Erlang []
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec remove_elements(Head :: #list_node{} | null, Val :: integer()) -> #list_node{} | null.
remove_elements(null, _) -> null;
remove_elements(#list_node{val = Val, next = Next}, Val) -> remove_elements(Next, Val);
remove_elements(#list_node{val = V, next = Next}, Val) -> #list_node{val = V, next = remove_elements(Next, Val)}.
```
``` Elixir []
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
  @spec remove_elements(head :: ListNode.t | nil, val :: integer) :: ListNode.t | nil
  def remove_elements(nil, _), do: nil
  def remove_elements(%ListNode{val: val, next: next}, val), do: remove_elements(next, val)
  def remove_elements(%ListNode{val: v, next: next}, val), do: %ListNode{val: v, next: remove_elements(next, val)}
end
```
