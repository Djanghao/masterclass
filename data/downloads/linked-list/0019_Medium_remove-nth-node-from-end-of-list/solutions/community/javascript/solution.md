# JS, Python, Java, C++ | Easy Two-Pointer Solution w/ Explanation

**Author:** sgallivan
**Votes:** 1447
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

With a singly linked list, the _only_ way to find the end of the list, and thus the **n**'th node from the end, is to actually iterate all the way to the end. The challenge here is attemping to find the solution in only one pass. A naive approach here might be to store pointers to each node in an array, allowing us to calculate the **n**'th from the end once we reach the end, but that would take **O(M) extra space**, where **M** is the length of the linked list.

A slightly less naive approach would be to only store only the last **n+1** node pointers in the array. This could be achieved by overwriting the elements of the storage array in circlular fashion as we iterate through the list. This would lower the **space complexity** to **O(N+1)**.

In order to solve this problem in only one pass and **O(1) extra space**, however, we would need to find a way to _both_ reach the end of the list with one pointer _and also_ reach the **n**'th node from the end simultaneously with a second pointer.

To do that, we can simply stagger our two pointers by **n** nodes by giving the first pointer (**fast**) a head start before starting the second pointer (**slow**). Doing this will cause **slow** to reach the **n**'th node from the end at the same time that **fast** reaches the end.

![Visual 1](https://i.imgur.com/BSiLKj0.png)

Since we will need access to the node _before_ the target node in order to remove the target node, we can use **fast.next == null** as our exit condition, rather than **fast == null**, so that we stop one node earlier.

This will unfortunately cause a problem when **n** is the same as the length of the list, which would make the first node the target node, and thus make it impossible to find the node _before_ the target node. If that's the case, however, we can just **return head.next** without needing to stitch together the two sides of the target node.

Otherwise, once we succesfully find the node _before_ the target, we can then stitch it together with the node _after_ the target, and then **return head**.

---

#### ***Implementation:***

There are only minor differences between the code of all four languages.

---

#### ***Javascript Code:***

The best result for the code below is **60ms / 40.6MB** (beats 100% / 13%).
```javascript
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};
```

---

#### ***Python Code:***

The best result for the code below is **28ms / 13.9MB** (beats 92% / 99%).
```python
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        fast, slow = head, head
        for _ in range(n): fast = fast.next
        if not fast: return head.next
        while fast.next: fast, slow = fast.next, slow.next
        slow.next = slow.next.next
        return head
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 36.5MB** (beats 100% / 97%).
```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fast = head, slow = head;
        for (int i = 0; i < n; i++) fast = fast.next;
        if (fast == null) return head.next;
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 10.6MB** (beats 100% / 93%).
```c++
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *fast = head, *slow = head;
        for (int i = 0; i < n; i++) fast = fast->next;
        if (!fast) return head->next;
        while (fast->next) fast = fast->next, slow = slow->next;
        slow->next = slow->next->next;
        return head;
    }
};
```