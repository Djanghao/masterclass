# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 9
**Link:** [https://leetcode.com/problems/sort-list/solutions/6023826/](https://leetcode.com/problems/sort-list/solutions/6023826/)

---

![image.png](./images/0.png)

---

## Intuition
To sort a linked list, we can use a merge sort algorithm because it is efficient with a time complexity of \\(O(n \\log n)\\), which works well for linked lists. This algorithm uses a recursive divide-and-conquer approach, which is suitable for linked lists as splitting and merging nodes is simple and doesn\u2019t require additional array space.

---

## Approach
1. **Base Case**: If the linked list has only one node or is empty, it is already sorted.
2. **Divide**: Use a two-pointer approach to find the middle of the linked list. Split the list into two halves.
3. **Conquer**: Recursively sort each half of the list.
4. **Merge**: Combine the two sorted halves using a helper function that merges two sorted lists.

---

## Complexity
- **Time Complexity**: \\(O(n \\log n)\\) because we recursively divide the list and merge them.
- **Space Complexity**: \\(O(\\log n)\\) due to recursive stack space used by merge sort.

---

## Implementation

```dart []

// class ListNode {
//   int val;
//   ListNode? next;
//   ListNode(this.val, [this.next]);
// }
class Solution {
  ListNode? sortList(ListNode? head) {
    if (head == null || head.next == null) return head;

    ListNode? mid = getMid(head);
    ListNode? left = sortList(head);
    ListNode? right = sortList(mid);

    return merge(left, right);
  }

  ListNode? getMid(ListNode? head) {
    ListNode? slow = head;
    ListNode? fast = head;
    ListNode? prev = null;

    while (fast != null && fast.next != null) {
      prev = slow;
      slow = slow?.next;
      fast = fast.next?.next;
    }
    prev?.next = null;
    return slow;
  }

  ListNode? merge(ListNode? left, ListNode? right) {
    ListNode dummy = ListNode(0);
    ListNode? tail = dummy;

    while (left != null && right != null) {
      if (left.val < right.val) {
        tail?.next = left;
        left = left.next;
      } else {
        tail?.next = right;
        right = right.next;
      }
      tail = tail?.next;
    }

    tail?.next = left ?? right;
    return dummy.next;
  }
}
```

```java []
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;

        ListNode mid = getMid(head);
        ListNode left = sortList(head);
        ListNode right = sortList(mid);

        return merge(left, right);
    }

    private ListNode getMid(ListNode head) {
        ListNode slow = head, fast = head, prev = null;

        while (fast != null && fast.next != null) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null; // Disconnect the two halves

        return slow;
    }

    private ListNode merge(ListNode left, ListNode right) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (left != null && right != null) {
            if (left.val < right.val) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }
            tail = tail.next;
        }

        tail.next = (left != null) ? left : right;
        return dummy.next;
    }
}
```

```python []
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        mid = self.getMid(head)
        left = self.sortList(head)
        right = self.sortList(mid)

        return self.merge(left, right)

    def getMid(self, head: ListNode) -> ListNode:
        slow, fast = head, head
        prev = None
        while fast and fast.next:
            prev = slow
            slow = slow.next
            fast = fast.next.next
        prev.next = None
        return slow

    def merge(self, left: ListNode, right: ListNode) -> ListNode:
        dummy = ListNode(0)
        tail = dummy
        while left and right:
            if left.val < right.val:
                tail.next = left
                left = left.next
            else:
                tail.next = right
                right = right.next
            tail = tail.next

        tail.next = left if left else right
        return dummy.next
```

```javascript []
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var sortList = function(head) {
    if (!head || !head.next) return head;

    const mid = getMid(head);
    const left = sortList(head);
    const right = sortList(mid);

    return merge(left, right);
};

function getMid(head) {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return slow;
}

function merge(left, right) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (left && right) {
        if (left.val < right.val) {
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right;
            right = right.next;
        }
        tail = tail.next;
    }

    tail.next = left || right;
    return dummy.next;
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
    ListNode* sortList(ListNode* head) {
        if (!head || !head->next) return head;

        ListNode* mid = getMid(head);
        ListNode* left = sortList(head);
        ListNode* right = sortList(mid);

        return merge(left, right);
    }

private:
    ListNode* getMid(ListNode* head) {
        ListNode *slow = head, *fast = head, *prev = nullptr;
        while (fast && fast->next) {
            prev = slow;
            slow = slow->next;
            fast = fast->next->next;
        }
        prev->next = nullptr;
        return slow;
    }

    ListNode* merge(ListNode* left, ListNode* right) {
        ListNode dummy(0);
        ListNode* tail = &dummy;

        while (left && right) {
            if (left->val < right->val) {
                tail->next = left;
                left = left->next;
            } else {
                tail->next = right;
                right = right->next;
            }
            tail = tail->next;
        }

        tail->next = left ? left : right;
        return dummy.next;
    }
};
```

```go []
type ListNode struct {
    Val  int
    Next *ListNode
}

func sortList(head *ListNode) *ListNode {
    if head == nil || head.Next == nil {
        return head
    }

    mid := getMid(head)
    left := sortList(head)
    right := sortList(mid)

    return merge(left, right)
}

func getMid(head *ListNode) *ListNode {
    slow, fast := head, head
    var prev *ListNode

    for fast != nil && fast.Next != nil {
        prev = slow
        slow = slow.Next
        fast = fast.Next.Next
    }
    prev.Next = nil

    return slow
}

func merge(left, right *ListNode) *ListNode {
    dummy := &ListNode{}
    tail := dummy

    for left != nil && right != nil {
        if left.Val < right.Val {
            tail.Next = left
            left = left.Next
        } else {
            tail.Next = right
            right = right.Next
        }
        tail = tail.Next
    }

    if left != nil {
        tail.Next = left
    } else {
        tail.Next = right
    }

    return dummy.Next
}
```
---

![image.png](./images/1.png) {:style='width:250px'}