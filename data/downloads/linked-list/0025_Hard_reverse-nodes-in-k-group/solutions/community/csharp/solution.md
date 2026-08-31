# ✅✅Short but recursive code with comments✅✅

**Author:** otabek_kholmirzaev
**Votes:** 20
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/4233359/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/4233359/)

---

Hi, guys!
Despite the fact that the approach is recursive, the code is less than 35 lines. :)
```python []
class Solution(object):
    def reverseKGroup(self, head, k):
        if not head or k == 1:
            return head

        # Check if there are at least k nodes remaining in the list
        count = 0
        current = head
        while current and count < k:
            current = current.next
            count += 1

        if count < k:
            return head  # Not enough nodes to reverse

        # Reverse the first k nodes in the current group
        prev = None
        next_node = None
        current = head
        for i in range(k):
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node

        # Recursively reverse the remaining part of the list
        head.next = self.reverseKGroup(current, k)

        return prev  # 'prev' is now the new head of this group
```
```java []
public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) {
            return head;
        }

        // Check if there are at least k nodes remaining in the list
        int count = 0;
        ListNode current = head;
        while (current != null && count < k) {
            current = current.next;
            count++;
        }

        if (count < k) {
            return head; // Not enough nodes to reverse
        }

        // Reverse the first k nodes in the current group
        ListNode prev = null;
        ListNode next = null;
        current = head;
        for (int i = 0; i < k; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Recursively reverse the remaining part of the list
        head.next = reverseKGroup(current, k);

        return prev; // 'prev' is now the new head of this group
    }
}
```
```cpp []
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        if (!head || k == 1) {
            return head;
        }

        int count = 0;
        ListNode* current = head;
        while (current && count < k) {
            current = current->next;
            count++;
        }

        if (count < k) {
            return head;
        }

        ListNode* prev = nullptr;
        ListNode* next = nullptr;
        current = head;
        for (int i = 0; i < k; i++) {
            next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }

        head->next = reverseKGroup(current, k);

        return prev;
    }
};
```
``` c []
struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    if (!head || k == 1) {
        return head;
    }

    // Check if there are at least k nodes remaining in the list
    int count = 0;
    struct ListNode* current = head;
    while (current && count < k) {
        current = current->next;
        count++;
    }

    if (count < k) {
        return head; // Not enough nodes to reverse
    }

    // Reverse the first k nodes in the current group
    struct ListNode* prev = NULL;
    struct ListNode* next = NULL;
    current = head;
    for (int i = 0; i < k; i++) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    // Recursively reverse the remaining part of the list
    head->next = reverseKGroup(current, k);

    return prev; // 'prev' is now the new head of this group
}
```
```csharp []
public class Solution {
    public ListNode ReverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) {
            return head;
        }
        
        // Check if there are at least k nodes remaining in the list
        int count = 0;
        ListNode current = head;
        while (current != null && count < k) {
            current = current.next;
            count++;
        }

        if (count < k) {
            return head; // Not enough nodes to reverse
        }

        // Reverse the first k nodes in the current group
        ListNode prev = null;
        ListNode next = null;
        current = head;
        for (int i = 0; i < k; i++) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        // Recursively reverse the remaining part of the list
        head.next = ReverseKGroup(current, k);

        return prev; // 'prev' is now the new head of this group
    }
}
```
```javascript []
var reverseKGroup = function(head, k) {
    if (!head || k === 1) {
        return head;
    }

    let count = 0;
    let current = head;
    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count < k) {
        return head;
    }

    let prev = null;
    let next = null;
    current = head;
    for (let i = 0; i < k; i++) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    head.next = reverseKGroup(current, k);

    return prev;
};
```
``` typescript []
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) {
        return head;
    }

    let count = 0;
    let current: ListNode | null = head;
    while (current && count < k) {
        current = current.next;
        count++;
    }

    if (count < k) {
        return head;
    }

    let prev: ListNode | null = null;
    let next: ListNode | null = null;
    current = head;
    for (let i = 0; i < k; i++) {
        next = current?.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    if (head) {
        head.next = reverseKGroup(current, k);
    }

    return prev;
};
```
```ruby []
def reverse_k_group(head, k)
  return head if !head || k == 1

  count = 0
  current = head
  while current && count < k
    current = current.next
    count += 1
  end

  return head if count < k

  prev = nil
  next_node = nil
  current = head
  k.times do
    next_node = current.next
    current.next = prev
    prev = current
    current = next_node
  end

  head.next = reverse_k_group(current, k)

  prev
end
```
```kotlin []
class Solution {
    fun reverseKGroup(head: ListNode?, k: Int): ListNode? {
        if (head == null || k == 1) {
            return head
        }

        var count = 0
        var current = head
        while (current != null && count < k) {
            current = current.next
            count++
        }

        if (count < k) {
            return head
        }

        var prev: ListNode? = null
        var next: ListNode?
        current = head
        repeat(k) {
            next = current?.next
            current?.next = prev
            prev = current
            current = next
        }

        head?.next = reverseKGroup(current, k)

        return prev
    }
}
```
Hope it helps!

![please upvote.png](./images/0.png)
