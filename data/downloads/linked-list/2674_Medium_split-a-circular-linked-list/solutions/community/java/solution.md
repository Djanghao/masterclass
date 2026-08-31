# Linear scan C++, java & python3

**Author:** cpcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/3509475/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/3509475/)

---

# Intuition
Linear scan to find the break point.

# Approach
(1) Calculate the length of the link list.
(2) Break down it into 2 parts from the middle point.
(3) For each part, link the last node's next to the head of the part.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code

C++
```
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<ListNode*> splitCircularLinkedList(ListNode* list) {
        ListNode* head = list;
        int len = 1;
        for (; list->next != head; list = list->next, ++len)
        ;
        ListNode* last = list;
        list = head;
        for (int i = (len + 1) >> 1; i > 1; --i, list = list->next)
        ;
        ListNode* head2 = list->next;
        last->next = head2;
        list->next = head;
        return {head, head2};
        
    }
};
```

Java
```
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
    public ListNode[] splitCircularLinkedList(ListNode list) {
        ListNode head = list;
        int len = 1;
        for (; list.next != head; list = list.next, ++len)
        ;
        ListNode last = list;
        list = head;
        for (int i = (len + 1) >> 1; i > 1; --i, list = list.next)
        ;
        ListNode head2 = list.next;
        last.next = head2;
        list.next = head;
        return new ListNode[]{head, head2};
        
    }
}
```

Python3
```
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def splitCircularLinkedList(self, list: Optional[ListNode]) -> List[Optional[ListNode]]:
        head = list
        len = 1
        while list.next != head:
            list = list.next
            len += 1
        last = list
        list = head
        for _ in range(1, (len + 1) >> 1):
            list = list.next
        head2 = list.next
        last.next = head2
        list.next = head
        return [head, head2]
```