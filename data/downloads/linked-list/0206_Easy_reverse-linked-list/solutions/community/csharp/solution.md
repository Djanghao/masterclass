# ✔️Full Explanation ✔️Python ✔️C++ ✔️Java ✔️C# ✔️Go

**Author:** otabek_kholmirzaev
**Votes:** 40
**Link:** [https://leetcode.com/problems/reverse-linked-list/solutions/4903870/](https://leetcode.com/problems/reverse-linked-list/solutions/4903870/)

---

# Explanation
- We initialize three pointers: **prev**, **current**, and **next**.
- **prev** will initially be **nullptr** because it will be the new tail of the reversed list.
- **current** starts from the head of the original list.
- Inside the loop, we:
    - Store the next node of **current** in the variable **next**.
    - Reverse the link of **current** to point it to **prev**.
    - Move **prev**, **current**, and **next** pointers one step ahead.
- After the loop, **prev** points to the new head of the reversed list.
- Return **prev**.

# Complexity
- Time complexity: O(n) - We traverse the list once.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) - We only use a constant amount of extra space for the three pointers, regardless of the size of the list.

# Code
``` cpp []
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *prev = nullptr;
        ListNode *current = head;
        ListNode *next = nullptr;
        
        while (current != nullptr) {
            next = current->next; // Save the next node
            current->next = prev; // Reverse the link
            prev = current; // Move pointers one position ahead
            current = next;
        }
        
        // 'prev' now points to the new head of the reversed list
        return prev;
    }
};
```
``` python []
class Solution:
    def reverseList(self, head):
        prev = None
        current = head
        
        while current:
            next_node = current.next # Save the next node
            current.next = prev # Reverse the link
            prev = current # Move pointers one position ahead
            current = next_node
        
        # 'prev' now points to the new head of the reversed list
        return prev
```
``` java []
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            ListNode nextNode = current.next; // Save the next node
            current.next = prev; // Reverse the link
            prev = current; // Move pointers one position ahead
            current = nextNode;
        }
        
        // 'prev' now points to the new head of the reversed list
        return prev;
    }
}
```
``` csharp []
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        ListNode nextNode = null;
        
        while (current != null) {
            nextNode = current.next; // Save the next node
            current.next = prev; // Reverse the link
            prev = current; // Move pointers one position ahead
            current = nextNode;
        }
        
        // 'prev' now points to the new head of the reversed list
        return prev;
    }
}
```
``` Go []
func reverseList(head *ListNode) *ListNode {
    var prev, current, nextNode *ListNode
    current = head
    
    for current != nil {
        nextNode = current.Next // Save the next node
        current.Next = prev // Reverse the link
        prev = current // Move pointers one position ahead
        current = nextNode
    }
    
    // 'prev' now points to the new head of the reversed list
    return prev
}
```
![upvote_new_cc82e8aa-dc98-4f10-af4c-64b1528c0fb6_1680844232.130332.png](./images/0.png)
