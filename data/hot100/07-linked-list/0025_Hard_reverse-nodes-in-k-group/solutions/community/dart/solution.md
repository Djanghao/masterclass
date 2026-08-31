# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/6116359/](https://leetcode.com/problems/reverse-nodes-in-k-group/solutions/6116359/)

---

![image.png](./images/0.png)



---

# Intuition
The goal is to reverse nodes in groups of size \\(k\\), but only if the group contains exactly \\(k\\) nodes. If fewer than \\(k\\) nodes remain, leave them as they are. The key observation is that this can be achieved iteratively by reversing one group at a time and keeping track of the connections between groups.

---

# Approach
1. **Check for Valid Group:**  
   For each group, verify if there are at least \\(k\\) nodes to reverse. If not, leave the remaining nodes untouched.

2. **Reverse the Group:**  
   Reverse the \\(k\\) nodes using a standard reversal technique. Maintain pointers for:
   - The start and end of the group being reversed.
   - The previous group's tail to reconnect it to the reversed group.

3. **Move to the Next Group:**  
   After reversing the current group, move the pointer to the next set of \\(k\\) nodes.

4. **Handle Edge Cases:**  
   Use a dummy node to simplify edge cases (e.g., reversing the first group).

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ where \\(n\\) is the number of nodes in the list. Each node is visited once for reversal.

- **Space complexity:**  
  $$O(1)$$ since the reversal is done in-place without additional data structures.

---


```dart []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? reverseKGroup(ListNode? head, int k) {
    if (head == null || k == 1) return head;

    // Dummy node to simplify edge cases
    ListNode? dummy = ListNode(0);
    dummy.next = head;

    ListNode? prevGroupTail = dummy; // Tracks the tail of the previous group
    ListNode? curr = head;

    while (true) {
      // Check if there are at least k nodes left to reverse
      ListNode? groupEnd = curr;
      int count = 0;
      while (count < k && groupEnd != null) {
        groupEnd = groupEnd.next;
        count++;
      }

      // If there are fewer than k nodes left, stop reversing
      if (count < k) break;

      // Reverse the current group
      ListNode? prev = groupEnd;
      ListNode? groupStart = curr;

      for (int i = 0; i < k; i++) {
        ListNode? next = curr?.next;
        curr?.next = prev;
        prev = curr;
        curr = next;
      }

      // Connect the previous group to the reversed group
      prevGroupTail?.next = prev;
      prevGroupTail = groupStart;
    }

    return dummy.next;
  }
}
```


```python []
class Solution:
    def reverseKGroup(self, head, k):
        if not head or k == 1:
            return head

        # Dummy node to simplify edge cases
        dummy = ListNode(0)
        dummy.next = head
        prev_group_tail = dummy
        curr = head

        while True:
            # Check if there are at least k nodes left
            group_end = curr
            count = 0
            while count < k and group_end:
                group_end = group_end.next
                count += 1

            if count < k:  # Less than k nodes left
                break

            # Reverse the current group
            prev = group_end
            group_start = curr
            for _ in range(k):
                next_node = curr.next
                curr.next = prev
                prev = curr
                curr = next_node

            # Connect the previous group to the reversed group
            prev_group_tail.next = prev
            prev_group_tail = group_start

        return dummy.next
```


```javascript []
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupTail = dummy, curr = head;

    while (true) {
        // Check if there are at least k nodes left
        let groupEnd = curr, count = 0;
        while (count < k && groupEnd) {
            groupEnd = groupEnd.next;
            count++;
        }
        if (count < k) break;

        // Reverse the current group
        let prev = groupEnd, groupStart = curr;
        for (let i = 0; i < k; i++) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect the previous group to the reversed group
        prevGroupTail.next = prev;
        prevGroupTail = groupStart;
    }

    return dummy.next;
};
```


```java []
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) return head;

        // Dummy node to simplify edge cases
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode prevGroupTail = dummy, curr = head;

        while (true) {
            // Check if there are at least k nodes left
            ListNode groupEnd = curr;
            int count = 0;
            while (count < k && groupEnd != null) {
                groupEnd = groupEnd.next;
                count++;
            }
            if (count < k) break;

            // Reverse the current group
            ListNode prev = groupEnd, groupStart = curr;
            for (int i = 0; i < k; i++) {
                ListNode next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }

            // Connect the previous group to the reversed group
            prevGroupTail.next = prev;
            prevGroupTail = groupStart;
        }

        return dummy.next;
    }
}
```


```cpp []
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        if (!head || k == 1) return head;

        ListNode dummy(0);
        dummy.next = head;
        ListNode* prevGroupTail = &dummy;
        ListNode* curr = head;

        while (true) {
            // Check if there are at least k nodes left
            ListNode* groupEnd = curr;
            int count = 0;
            while (count < k && groupEnd) {
                groupEnd = groupEnd->next;
                count++;
            }
            if (count < k) break;

            // Reverse the current group
            ListNode* prev = groupEnd;
            ListNode* groupStart = curr;
            for (int i = 0; i < k; i++) {
                ListNode* next = curr->next;
                curr->next = prev;
                prev = curr;
                curr = next;
            }

            // Connect the previous group to the reversed group
            prevGroupTail->next = prev;
            prevGroupTail = groupStart;
        }

        return dummy.next;
    }
};
```


```go []
func reverseKGroup(head *ListNode, k int) *ListNode {
    if head == nil || k == 1 {
        return head
    }

    dummy := &ListNode{Next: head}
    prevGroupTail := dummy
    curr := head

    for {
        // Check if there are at least k nodes left
        groupEnd := curr
        count := 0
        for count < k && groupEnd != nil {
            groupEnd = groupEnd.Next
            count++
        }
        if count < k {
            break
        }

        // Reverse the current group
        prev := groupEnd
        groupStart := curr
        for i := 0; i < k; i++ {
            next := curr.Next
            curr.Next = prev
            prev = curr
            curr = next
        }

        // Connect the previous group to the reversed group
        prevGroupTail.Next = prev
        prevGroupTail = groupStart
    }

    return dummy.Next
}
```

---

![image.png](./images/1.png) {:style='width:250px'}