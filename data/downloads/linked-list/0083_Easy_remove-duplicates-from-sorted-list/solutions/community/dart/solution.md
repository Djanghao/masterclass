# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 7
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5982346/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5982346/)

---

![image.png](./images/0.png)



---

### Intuition
The problem requires removing consecutive duplicate nodes from a sorted linked list. Since the list is sorted, we can solve the problem efficiently by comparing each node with its next node and removing it if they have the same value.

---

### Approach
1. Initialize a pointer (`current`) to the head of the list.
2. Traverse the list:
   - If the current node and the next node have the same value, skip the next node by linking `current.next` to `current.next.next`.
   - If the current node and the next node are different, move the pointer to the next node.
3. Return the modified list starting from `head`.

---

### Complexity
- **Time Complexity:** \\(O(n)\\), where \\(n\\) is the number of nodes in the list since we traverse the list once.
- **Space Complexity:** \\(O(1)\\) because no additional data structures are used.

---

### Code


```dart []
class ListNode {
  int val;
  ListNode? next;
  ListNode([this.val = 0, this.next]);
}

class Solution {
  ListNode? deleteDuplicates(ListNode? head) {
    if (head == null) return null;

    ListNode? current = head;

    while (current != null && current.next != null) {
      if (current.val == current.next!.val) {
        current.next = current.next!.next;
      } else {
        current = current.next;
      }
    }

    return head;
  }
}
```


```javascript []
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var deleteDuplicates = function(head) {
    if (!head) return null;

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};
```


```python []
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head):
        current = head

        while current and current.next:
            if current.val == current.next.val:
                current.next = current.next.next
            else:
                current = current.next

        return head
```


```java []
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; this.next = null; }
}

class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return null;

        ListNode current = head;

        while (current != null && current.next != null) {
            if (current.val == current.next.val) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return head;
    }
}
```


```cpp []
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* current = head;

        while (current && current->next) {
            if (current->val == current->next->val) {
                current->next = current->next->next;
            } else {
                current = current->next;
            }
        }

        return head;
    }
};
```


```go []
type ListNode struct {
    Val  int
    Next *ListNode
}

func deleteDuplicates(head *ListNode) *ListNode {
    current := head

    for current != nil && current.Next != nil {
        if current.Val == current.Next.Val {
            current.Next = current.Next.Next
        } else {
            current = current.Next
        }
    }

    return head
}
```
---

![image.png](./images/1.png) {:style='width:250px'}
