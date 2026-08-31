# [Java/C++/Python] 3-Line Recursion Solution

**Author:** lee215
**Votes:** 216
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/2852139/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/2852139/)

---

# **Explanation**
Recursively call `removeNodes` to handle the tail first.
Then `head.next` node should have the biggest value.
Compare `head.val` and `head.next.val`,
if `head.val < head.next.val`,
should remove the current node,
return `head.next`,
otherwise we return `head`.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)`
<br>

**Java**
```java
    public ListNode removeNodes(ListNode head) {
        if (head == null) return null;
        head.next = removeNodes(head.next);
        return head.next != null && head.val < head.next.val ? head.next : head;
    }
```

**C++**
```cpp
    ListNode* removeNodes(ListNode* head) {
        if (!head) return NULL;
        head->next = removeNodes(head->next);
        return head->next && head->val < head->next->val ?  head->next : head;
    }
```

**Python**
```py
    def removeNodes(self, head):
        if not head: return None
        head.next = self.removeNodes(head.next)
        if head.next and head.val < head.next.val:
            return head.next
        return head
```
