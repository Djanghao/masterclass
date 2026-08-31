# Easy and Simple Solution in Dart | JavaScript | Java | C#

**Author:** Isko21
**Votes:** 1
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/3521560/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/3521560/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
    List<int> nextLargerNodes(ListNode? head) {
        List<int> list = [];
        while(head != null){
            int val = nextGreater(head);
            list.add(val);
            head = head.next;
        }
        
        return list;
    }
    int nextGreater(ListNode? node){
        ListNode? temp = node;

        while (temp != null) {
            if (temp.val > node!.val) {
                return temp.val;
            }
            temp = temp.next;
        }
        return 0;
    }
}

```