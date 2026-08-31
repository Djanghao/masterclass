# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/reorder-list/solutions/6115927/](https://leetcode.com/problems/reorder-list/solutions/6115927/)

---

![image.png](./images/0.png)

---



# Intuition
To reorder a linked list, the goal is to place the last node after the first, then the second-to-last node after the second, and so on. This can be done by splitting the list into two halves, reversing the second half, and merging them alternately. The key insight is that we only need pointers to reorder the list without creating additional structures.

---

# Approach
1. **Find the middle of the list:**  
   Using the slow and fast pointer technique, find the midpoint of the linked list.
   
2. **Reverse the second half:**  
   Reverse the second half of the list starting from the node after the midpoint.
   
3. **Merge the two halves:**  
   Merge the first half and the reversed second half alternately.

4. **Ensure correctness in edge cases:**  
   Handle cases like an empty list or a list with only one node, which don\u2019t require reordering.

---

# Complexity
- **Time complexity:**  
  $$O(n)$$ where \\(n\\) is the number of nodes in the linked list. Finding the middle, reversing the second half, and merging are all linear operations.
  
- **Space complexity:**  
  $$O(1)$$ as the reordering is done in-place with no additional data structures.

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
  void reorderList(ListNode? head) {
    if (head == null || head.next == null) return;

    // Step 1: Find the middle of the list
    ListNode? slow = head, fast = head;
    while (fast != null && fast?.next != null) {
      slow = slow?.next;
      fast = fast?.next?.next;
    }

    // Step 2: Disconnect the first and second halves
    ListNode? secondHalf = slow?.next;
    slow?.next = null;

    // Step 3: Reverse the second half
    secondHalf = _reverse(secondHalf);

    // Step 4: Merge the two halves
    ListNode? firstHalf = head;
    while (firstHalf != null && secondHalf != null) {
      ListNode? temp1 = firstHalf.next;
      ListNode? temp2 = secondHalf.next;

      firstHalf.next = secondHalf;
      secondHalf.next = temp1;

      firstHalf = temp1;
      secondHalf = temp2;
    }
  }

  // Helper function to reverse a linked list
  ListNode? _reverse(ListNode? head) {
    ListNode? prev = null;
    while (head != null) {
      ListNode? next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }
}
```


```python []
class Solution:
    def reorderList(self, head):
        if not head or not head.next:
            return
        
        # Step 1: Find the middle of the list
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # Step 2: Reverse the second half
        prev, curr = None, slow.next
        slow.next = None  # Disconnect the two halves
        while curr:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        
        # Step 3: Merge the two halves
        first, second = head, prev
        while second:
            temp1, temp2 = first.next, second.next
            first.next = second
            second.next = temp1
            first, second = temp1, temp2
```


```javascript []
var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let secondHalf = slow.next;
    slow.next = null; // Disconnect the two halves
    let prev = null;
    while (secondHalf) {
        let temp = secondHalf.next;
        secondHalf.next = prev;
        prev = secondHalf;
        secondHalf = temp;
    }

    // Step 3: Merge the two halves
    let firstHalf = head;
    while (prev) {
        let temp1 = firstHalf.next;
        let temp2 = prev.next;
        firstHalf.next = prev;
        prev.next = temp1;
        firstHalf = temp1;
        prev = temp2;
    }
};
```


```java []
class Solution {
    public void reorderList(ListNode head) {
        if (head == null || head.next == null) return;

        // Step 1: Find the middle of the list
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Step 2: Reverse the second half
        ListNode secondHalf = slow.next;
        slow.next = null;
        ListNode prev = null;
        while (secondHalf != null) {
            ListNode temp = secondHalf.next;
            secondHalf.next = prev;
            prev = secondHalf;
            secondHalf = temp;
        }

        // Step 3: Merge the two halves
        ListNode firstHalf = head;
        while (prev != null) {
            ListNode temp1 = firstHalf.next;
            ListNode temp2 = prev.next;
            firstHalf.next = prev;
            prev.next = temp1;
            firstHalf = temp1;
            prev = temp2;
        }
    }
}
```


```cpp []
class Solution {
public:
    void reorderList(ListNode* head) {
        if (!head || !head->next) return;

        // Step 1: Find the middle of the list
        ListNode* slow = head, *fast = head;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        // Step 2: Reverse the second half
        ListNode* secondHalf = slow->next;
        slow->next = nullptr;
        ListNode* prev = nullptr;
        while (secondHalf) {
            ListNode* temp = secondHalf->next;
            secondHalf->next = prev;
            prev = secondHalf;
            secondHalf = temp;
        }

        // Step 3: Merge the two halves
        ListNode* firstHalf = head;
        while (prev) {
            ListNode* temp1 = firstHalf->next;
            ListNode* temp2 = prev->next;
            firstHalf->next = prev;
            prev->next = temp1;
            firstHalf = temp1;
            prev = temp2;
        }
    }
};
```


```go []
func reorderList(head *ListNode) {
    if head == nil || head.Next == nil {
        return
    }

    // Step 1: Find the middle of the list
    slow, fast := head, head
    for fast != nil && fast.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }

    // Step 2: Reverse the second half
    secondHalf := slow.Next
    slow.Next = nil
    var prev *ListNode
    for secondHalf != nil {
        temp := secondHalf.Next
        secondHalf.Next = prev
        prev = secondHalf
        secondHalf = temp
    }

    // Step 3: Merge the two halves
    firstHalf := head
    for prev != nil {
        temp1 := firstHalf.Next
        temp2 := prev.Next
        firstHalf.Next = prev
        prev.Next = temp1
        firstHalf = temp1
        prev = temp2
    }
}
```

---

![image.png](./images/1.png) {:style='width:250px'}