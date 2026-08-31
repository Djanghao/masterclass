# C++/Java/Python/JavaScript || ✅🚀TC : O(n) || ✔️🔥Optimized Solution

**Author:** devanshupatel
**Votes:** 24
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/3517593/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/3517593/)

---

# Intuition:
We can use a two-pointer approach to reverse the linked list in groups of k nodes. We will maintain a `prevGroupTail` pointer that will point to the tail of the previous reversed group, and we will connect it to the head of the current group after reversing it. We will also use a `dummy` node as the head of the resulting list to avoid edge cases.

# Approach:
1. Create a dummy node and set its next to the head of the input list.
2. Initialize a `prevGroupTail` pointer to the dummy node.
3. Loop through the list until we reach the end.
4. In each iteration, set `groupStart` to the current `head`, and find `groupEnd` using the `getGroupEnd` function, which returns the end node of the current group (which is `k` nodes away from the `groupStart`). If `groupEnd` is null, then we don't need to reverse the remaining nodes because there are less than `k` nodes left in the list.
5. Set `nextGroupStart` to `groupEnd->next`, and then set `groupEnd->next` to null to separate the group to be reversed from the rest of the list.
6. Reverse the current group using the `reverseList` function and set `prevGroupTail->next` to the new head of the reversed group. Then set `groupStart->next` to `nextGroupStart`.
7. Update `prevGroupTail` to the `groupStart`.
8. Set `head` to `nextGroupStart`.
9. Return the head of the resulting list (which is the `dummy->next` node).

# Complexity
- Time Complexity:
The time complexity of the algorithm is O(n), where n is the number of nodes in the list, since we visit each node once.

- Space Complexity:
The space complexity of the algorithm is O(1), since we only use a constant amount of extra space for the `dummy` and `prevGroupTail` nodes, and we reverse the list in-place without using any additional data structures.

# Code
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
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* dummy = new ListNode(0);
        dummy->next = head;
        ListNode* prevGroupTail = dummy;
        
        while (head) {
            ListNode* groupStart = head;
            ListNode* groupEnd = getGroupEnd(head, k);
            
            if (!groupEnd) {
                break; // Remaining nodes are less than k, so no need to reverse
            }
            
            ListNode* nextGroupStart = groupEnd->next;
            groupEnd->next = nullptr; // Separate the group to be reversed
            
            // Reverse the group
            prevGroupTail->next = reverseList(groupStart);
            groupStart->next = nextGroupStart;
            
            prevGroupTail = groupStart;
            head = nextGroupStart;
        }
        
        ListNode* newHead = dummy->next;
        delete dummy;
        return newHead;
    }
    
private:
    ListNode* getGroupEnd(ListNode* head, int k) {
        while (head && k > 1) {
            head = head->next;
            k--;
        }
        return head;
    }
    
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        
        while (curr) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
};

```

---
# Java
```
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prevGroupTail = dummy;

        while (head != null) {
            ListNode groupStart = head;
            ListNode groupEnd = getGroupEnd(head, k);

            if (groupEnd == null)
                break;

            prevGroupTail.next = reverseList(groupStart, groupEnd.next);
            prevGroupTail = groupStart;
            head = prevGroupTail.next;
        }

        ListNode newHead = dummy.next;
        return newHead;
    }

    private ListNode getGroupEnd(ListNode head, int k) {
        while (head != null && --k > 0)
            head = head.next;
        return head;
    }

    private ListNode reverseList(ListNode head, ListNode stop) {
        ListNode prev = stop;
        while (head != stop) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev;
    }
}

```

---

# Python
```
class Solution(object):
    def reverseKGroup(self, head, k):
        dummy = ListNode(0)
        dummy.next = head
        prevGroupTail = dummy

        while head:
            groupStart = head
            groupEnd = self.getGroupEnd(head, k)

            if not groupEnd:
                break

            prevGroupTail.next = self.reverseList(groupStart, groupEnd.next)
            prevGroupTail = groupStart
            head = prevGroupTail.next

        newHead = dummy.next
        return newHead

    def getGroupEnd(self, head, k):
        while head and k > 1:
            head = head.next
            k -= 1
        return head

    def reverseList(self, head, stop):
        prev = stop
        while head != stop:
            next = head.next
            head.next = prev
            prev = head
            head = next
        return prev
```
---
# JavaScript
```
var reverseKGroup = function(head, k) {
    var dummy = new ListNode(0);
        dummy.next = head;
        var prevGroupTail = dummy;

        while (head) {
            var groupStart = head;
            var groupEnd = getGroupEnd(head, k);

            if (!groupEnd)
                break;

            prevGroupTail.next = reverseList(groupStart, groupEnd.next);
            prevGroupTail = groupStart;
            head = prevGroupTail.next;
        }
    var newHead = dummy.next;
    return newHead;
}

var getGroupEnd = function(head, k) {
    while (head && k > 1) {
        head = head.next;
        k--;
    }
    return head;
}

var reverseList = function(head, stop) {
    var prev = stop;
    while (head !== stop) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
```