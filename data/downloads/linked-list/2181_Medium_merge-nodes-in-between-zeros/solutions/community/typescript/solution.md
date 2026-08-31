# Simple Explanation with Dummy Node and Previous Pointer.

**Author:** darkhorse-91
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3561804/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/3561804/)

---

# Intuition
*The Intution here is just that you have to look for nodes with zeros and merge the other nodes into those zero node.
Here is one exception that needs to be handled the last node which is explained below.*

# Approach
1. Create a dummy node.
2. Point that dummy node to head.
3. Iterate from dummy node till end & check if next value is 0.
4. If next is 0 then simply go to next node else add the value from next node to current node and set pointer of current node to next to next node.
5. Store the cur node to a different variable before going to next node for skipping the last 0.
6. At last return the head.

# Complexity

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```python []
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        dummy = ListNode()  # dummy node
        dummy.next = head
        cur = dummy

        while cur.next:
            prev = cur      # prev node before cur to skip last 0
            if cur.next.val == 0:
                cur = cur.next
            if cur.next:
                cur.val += cur.next.val
                cur.next = cur.next.next
        prev.next = None    # setting last 0 node to none
        return head 
```
```javascript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let dummy = new ListNode();
    dummy.next = head;
    let cur = dummy;
    let prev;
    while (cur.next){
        prev = cur;
        if (cur.next.val === 0){
            cur = cur.next;
        }
        if (cur.next){
            cur.val += cur.next.val
            cur.next = cur.next.next
        }
    }
    prev.next = null;
    return head;
};
```
