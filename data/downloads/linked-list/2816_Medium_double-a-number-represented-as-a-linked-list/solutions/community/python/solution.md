# [Java/C++/Python] One Pass, no Reverse, 8 lines

**Author:** lee215
**Votes:** 247
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/3901771/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/3901771/)

---

# **Intuition**
We double the value of every node,
If `node.next.val > 4`,
there will be carry from `node.next`.
<br>

# **Explanation**
Iterate every node,
double the value `node.val = (node.val * 2) % 10`,
and check if there is a carry from `node.next`.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public ListNode doubleIt(ListNode head) {
        if (head.val > 4)
            head = new ListNode(0, head);
        for(ListNode node = head; node != null; node = node.next) {
            node.val = (node.val * 2) % 10;
            if (node.next != null && node.next.val > 4)
                node.val++;
        }
        return head;
    }
```
**C++**
```cpp
    ListNode* doubleIt(ListNode* head) {
        if (head->val > 4)
            head = new ListNode(0, head);
        for(ListNode* node = head; node; node = node->next) {
            node->val = (node->val * 2) % 10;
            if (node->next && node->next->val > 4)
                node->val++;
        }
        return head;
    }
```
**Python**
```py
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.val > 4:
            head = ListNode(0, head)
        node = head
        while node:
            node.val = (node.val * 2) % 10
            if node.next and node.next.val > 4:
                node.val += 1
            node = node.next
        return head
```
