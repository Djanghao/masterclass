# Easy || 0 ms || 100% || Fully Explained || Java, C++, Python, JS, C, Python3 (Recursive & Iterative)

**Author:** PratikSen07
**Votes:** 396
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/2458632/](https://leetcode.com/problems/reverse-linked-list/solutions/2458632/)

---

# **Java Solution (Recursive Approach):**
Runtime: 0 ms, faster than 100.00% of Java online submissions for Reverse Linked List.
```
class Solution {
    public ListNode reverseList(ListNode head) {
        // Special case...
        if (head == null || head.next == null) return head;
        // Create a new node to call the function recursively and we get the reverse linked list...
        ListNode res = reverseList(head.next);
        // Set head node as head.next.next...
        head.next.next = head;
        //set head's next to be null...
        head.next = null;
        return res;     // Return the reverse linked list...
    }
}
```

# **C++ Solution (Iterative Approach):**
```
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Special case...
        if(head == NULL || head->next == NULL)  return head;
        // Initialize prev pointer as the head...
        ListNode* prev = head;
        // Initialize curr pointer as the next pointer of prev...
        ListNode* curr = prev->next;
        // Initialize next of head pointer as NULL...
        head->next = NULL;
        // Run a loop till curr and prev points to NULL...
        while(prev != NULL && curr != NULL){
            // Initialize next pointer as the next pointer of curr...
            ListNode* next = curr->next;
            // Now assign the prev pointer to curr\u2019s next pointer.
            curr->next = prev;
            // Assign curr to prev, next to curr...
            prev = curr;
            curr = next;
        }
        return prev;    // Return the prev pointer to get the reverse linked list...
    }
};
```

# **Python Solution (Iterative Approach):**
Runtime: 18 ms, faster than 97.75% of Python online submissions for Reverse Linked List.
```
class Solution(object):
    def reverseList(self, head):
        # Initialize prev pointer as NULL...
        prev = None
        # Initialize the curr pointer as the head...
        curr = head
        # Run a loop till curr points to NULL...
        while curr:
            # Initialize next pointer as the next pointer of curr...
            next = curr.next
            # Now assign the prev pointer to curr\u2019s next pointer.
            curr.next = prev
            # Assign curr to prev, next to curr...
            prev = curr
            curr = next
        return prev       # Return the prev pointer to get the reverse linked list...
```
                
# **JavaScript Solution (Recursive Approach):**
```
var reverseList = function(head) {
    // Special case...
    if (head == null || head.next == null) return head;
    // Create a new node to call the function recursively and we get the reverse linked list...
    var res = reverseList(head.next);
    // Set head node as head.next.next...
    head.next.next = head;
    //set head's next to be null...
    head.next = null;
    return res;     // Return the reverse linked list...
};
```

# **C Language (Iterative Approach):**
```
struct ListNode* reverseList(struct ListNode* head){
    // Special case...
    if(head == NULL || head->next == NULL)  return head;
    // Initialize prev pointer as the head...
    struct ListNode* prev = head;
    // Initialize curr pointer as the next pointer of prev...
    struct ListNode* curr = prev->next;
    // Initialize next of head pointer as NULL...
    head->next = NULL;
    // Run a loop till curr and prev points to NULL...
    while(prev != NULL && curr != NULL){
        // Initialize next pointer as the next pointer of curr...
        struct ListNode* next = curr->next;
        // Now assign the prev pointer to curr\u2019s next pointer.
        curr->next = prev;
        // Assign curr to prev, next to curr...
        prev = curr;
        curr = next;
    }
    return prev;    // Return the prev pointer to get the reverse linked list...
}
```

# **Python3 Solution (Iterative Approach):**
```
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Initialize prev pointer as NULL...
        prev = None
        # Initialize the curr pointer as the head...
        curr = head
        # Run a loop till curr points to NULL...
        while curr:
            # Initialize next pointer as the next pointer of curr...
            next = curr.next
            # Now assign the prev pointer to curr\u2019s next pointer.
            curr.next = prev
            # Assign curr to prev, next to curr...
            prev = curr
            curr = next
        return prev       # Return the prev pointer to get the reverse linked list...
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**