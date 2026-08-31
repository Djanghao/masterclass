# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/5319063/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/5319063/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space com$$O(n)$$plexity here, e.g. $$O(n)$$ -->

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
    public ListNode mergeTwoLists(final ListNode l1,  final ListNode l2) {
        if (l1 == null && l2 == null) return null;
        else if (l2 == null) return l1;
        else if (l1 == null) return l2;
        else {
            if (l1.val < l2.val){
                l1.next = mergeTwoLists(l1.next, l2);
                return l1;
            }else {
                l2.next = mergeTwoLists(l1, l2.next);
                return l2;
            }
        }
    }
}


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
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        final ListNode prehead = new ListNode(-1);
        var curr = prehead;
        while(l1 != null && l2 != null)
            if (l1.val < l2.val){
                curr.next = l1;
                curr = curr.next;
                l1 = curr.next; 
            }else {
                curr.next = l2;
                curr = curr.next;
                l2 = curr.next; 
            }
        if (l1 == null) curr.next = l2;
        else curr.next = l1;
        return prehead.next;
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
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        match (l1, l2): 
            case (None, None):
                return None
            case (x, None) | (None, x):
                return x
            case (ListNode() as x, ListNode() as y):
                if x.val < y.val:
                    x.next = self.mergeTwoLists(x.next, y)
                    return x
                else:
                    y.next = self.mergeTwoLists(x, y.next)
                    return y
        
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
    pub fn merge_two_lists(mut l1: T, mut l2: T) -> T {
        let mut prehead = ListNode::new(-1);
        let mut curr = &mut prehead;

        while let (Some(n1), Some(n2)) = (&l1, &l2) {
            if n1.val < n2.val {
                curr.next = l1.take();
                curr = curr.next.as_mut().unwrap();
                l1 = curr.next.take();
            }else {
                curr.next = l2.take();
                curr = curr.next.as_mut().unwrap();
                l2 = curr.next.take();
            }
        }

        curr.next = l1.or(l2);
        prehead.next
    }
}
```
``` Erlang []
%% Definition for singly-linked list.
%%
%% -record(list_node, {val = 0 :: integer(),
%%                     next = null :: 'null' | #list_node{}}).

-spec merge_two_lists(L1 :: #list_node{} | null, L2 :: #list_node{} | null) -> #list_node{} | null.
merge_two_lists(null, null) -> null;
merge_two_lists(L1, null) -> L1;
merge_two_lists(null, L2) -> L2;
merge_two_lists(#list_node{val=V1, next=Next1} = L1, #list_node{val=V2, next=Next2} = L2) when V1 < V2 ->
    #list_node{val = V1,  next = merge_two_lists(Next1, L2)};
merge_two_lists(#list_node{val=V1, next=Next1} = L1, #list_node{val=V2, next=Next2} = L2) ->
    #list_node{val = V2,  next = merge_two_lists(L1, Next2)}.
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
  @spec merge_two_lists(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil) :: ListNode.t | nil
  def merge_two_lists(nil, nil), do: nil
  def merge_two_lists(l1, nil), do: l1
  def merge_two_lists(nil, l2), do: l2
  def merge_two_lists(%ListNode{val: v1, next: n1} = l1, %ListNode{val: v2, next: n2} = l2) when v1 < v2 do
    %ListNode{val: v1, next: merge_two_lists(n1, l2)}
  end
  def merge_two_lists(%ListNode{val: v1, next: n1} = l1, %ListNode{val: v2, next: n2} = l2) do
    %ListNode{val: v2, next: merge_two_lists(l1, n2)}
  end    
end
```
