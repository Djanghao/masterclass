# Beats 100% || Full Code Explained || [java/C++/C#/Python/JavaScript]

**Author:** Shivansu_7
**Votes:** 18
**Link:** [https://leetcode.com/problems/reorder-list/solutions/4913430/](https://leetcode.com/problems/reorder-list/solutions/4913430/)

---

# Intution
1. We just need to know how to find middle of the linkedList, and reverse the linkedList.
2. Now follow the visualization section, you will understand the whole process.

# Visualization.
1. ***Finding the middle of the LinkedList.***
![e78d2d3a-5217-49f8-87e3-bc59c19070fc_1597916232.8641367.png](./images/0.png)

2. ***Reverse The Second Half.***
![68bc80f5-630e-4c0a-a9da-605196a4e004_1597916252.5191195.png](./images/1.png)

3. ***Merge both the LinkedList.***
![391f41fb-ed1f-4d67-a2f9-4d6aaf119214_1597916282.3228247.png](./images/2.png)


# Approach
### Step 1: Finding the Middle Node
- The `midNode` function is used to locate the middle node of the linked list.
- It utilizes the slow and fast pointer technique.
- The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
- When the fast pointer reaches the end of the list, the slow pointer points to the middle node.

### Step 2: Reversing the Second Half
- After finding the middle node, the second half of the list starting from the node after the middle is reversed.
- This is achieved using the `reverseLinkedList` function, which reverses the direction of the nodes in the second half of the list.

### Step 3: Reordering the List
- Once the list is divided and the second half is reversed, the `reorderList` function merges the two halves alternately.
- Two pointers (`c1` and `c2`) are used to traverse the two halves simultaneously.
- While both pointers are not null, nodes from each half are linked alternately.
- Backup nodes are used to prevent losing the next nodes during reordering.
- This process continues until all nodes are reordered.

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public void reorderList(ListNode head) {
        if(head==null || head.next==null) {
            return;
        }

        ListNode middle = midNode(head);
        ListNode newHead = middle.next;
        middle.next = null;

        newHead = reverseLinkedList(newHead);

        ListNode c1 = head;
        ListNode c2 = newHead;
        ListNode f1 = null;
        ListNode f2 = null;

        while(c1 != null && c2 != null) {

            // Backup
            f1 = c1.next;
            f2 = c2.next;

            //Linking
            c1.next = c2;
            c2.next = f1;

            // Move
            c1 = f1;
            c2 = f2;
        }
    }

    private ListNode midNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(fast.next!=null && fast.next.next!=null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    private ListNode reverseLinkedList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode forw = null;

        while(curr != null) {
            forw = curr.next;
            curr.next = prev;
            prev = curr;
            curr = forw;
        }
        return prev;
    }
}
```
```C++ []
class Solution {
public:
    void reorderList(ListNode* head) {
        if (!head || !head->next) {
            return;
        }

        ListNode* middle = midNode(head);
        ListNode* newHead = middle->next;
        middle->next = nullptr;

        newHead = reverseLinkedList(newHead);

        ListNode* c1 = head;
        ListNode* c2 = newHead;
        ListNode* f1 = nullptr;
        ListNode* f2 = nullptr;

        while (c1 && c2) {
            // Backup
            f1 = c1->next;
            f2 = c2->next;

            // Linking
            c1->next = c2;
            c2->next = f1;

            // Move
            c1 = f1;
            c2 = f2;
        }
    }

private:
    ListNode* midNode(ListNode* head) {
        ListNode* slow = head;
        ListNode* fast = head;

        while (fast->next && fast->next->next) {
            slow = slow->next;
            fast = fast->next->next;
        }
        return slow;
    }

    ListNode* reverseLinkedList(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;
        ListNode* forw = nullptr;

        while (curr) {
            forw = curr->next;
            curr->next = prev;
            prev = curr;
            curr = forw;
        }
        return prev;
    }
};
```
```Python3 []
class Solution:
    def reorderList(self, head: ListNode) -> None:
        if not head or not head.next:
            return

        middle = self.midNode(head)
        new_head = middle.next
        middle.next = None

        new_head = self.reverseLinkedList(new_head)

        c1 = head
        c2 = new_head
        f1 = None
        f2 = None

        while c1 and c2:
            # Backup
            f1 = c1.next
            f2 = c2.next

            # Linking
            c1.next = c2
            c2.next = f1

            # Move
            c1 = f1
            c2 = f2

    def midNode(self, head: ListNode) -> ListNode:
        slow = head
        fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    def reverseLinkedList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head

        while curr:
            forw = curr.next
            curr.next = prev
            prev = curr
            curr = forw
        return prev
```
```Go []
func reorderList(head *ListNode) {
    if head == nil || head.Next == nil {
        return
    }

    middle := midNode(head)
    newHead := middle.Next
    middle.Next = nil

    newHead = reverseLinkedList(newHead)

    c1 := head
    c2 := newHead
    var f1, f2 *ListNode

    for c1 != nil && c2 != nil {
        // Backup
        f1 = c1.Next
        f2 = c2.Next

        // Linking
        c1.Next = c2
        c2.Next = f1

        // Move
        c1 = f1
        c2 = f2
    }
}

func midNode(head *ListNode) *ListNode {
    slow := head
    fast := head

    for fast.Next != nil && fast.Next.Next != nil {
        slow = slow.Next
        fast = fast.Next.Next
    }
    return slow
}

func reverseLinkedList(head *ListNode) *ListNode {
    var prev, curr, forw *ListNode = nil, head, nil

    for curr != nil {
        forw = curr.Next
        curr.Next = prev
        prev = curr
        curr = forw
    }
    return prev
}
```
```C# []
public class Solution {
    public void ReorderList(ListNode head) {
        if (head == null || head.next == null) {
            return;
        }

        ListNode middle = MidNode(head);
        ListNode newHead = middle.next;
        middle.next = null;

        newHead = ReverseLinkedList(newHead);

        ListNode c1 = head;
        ListNode c2 = newHead;
        ListNode f1 = null;
        ListNode f2 = null;

        while (c1 != null && c2 != null) {
            // Backup
            f1 = c1.next;
            f2 = c2.next;

            // Linking
            c1.next = c2;
            c2.next = f1;

            // Move
            c1 = f1;
            c2 = f2;
        }
    }

    private ListNode MidNode(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    private ListNode ReverseLinkedList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        ListNode forw = null;

        while (curr != null) {
            forw = curr.next;
            curr.next = prev;
            prev = curr;
            curr = forw;
        }
        return prev;
    }
}
```
```JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }

    const middle = midNode(head);
    let newHead = middle.next;
    middle.next = null;

    newHead = reverseLinkedList(newHead);

    let c1 = head;
    let c2 = newHead;
    let f1 = null;
    let f2 = null;

    while (c1 && c2) {
        // Backup
        f1 = c1.next;
        f2 = c2.next;

        // Linking
        c1.next = c2;
        c2.next = f1;

        // Move
        c1 = f1;
        c2 = f2;
    }
};

const midNode = function(head) {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverseLinkedList = function(head) {
    let prev = null;
    let curr = head;
    let forw = null;

    while (curr) {
        forw = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forw;
    }
    return prev;
};
```

---

### ***FEEL FREE TO GIVE SOME OTHER APROACHES, AND OPTIMIZE MY APPROACH***

---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/3.png)
