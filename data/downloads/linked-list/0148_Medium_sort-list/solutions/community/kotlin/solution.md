# KOTLIN and JAVA solution using Dive and Conquer and merge sort

**Author:** anlk
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-list/solutions/6049085/](https://leetcode.com/problems/sort-list/solutions/6049085/)

---

# Intuition

Sorting a linked list efficiently requires leveraging the divide-and-conquer strategy. Since arrays are not inherently used here, Merge Sort becomes an ideal choice due to its O(nlogn) time complexity. 

We recursively split the list into halves, sort each half, and then merge them back into a sorted list.

# Approach
- Divide: Use the slow and fast pointer technique to find the middle of the list and split it into two halves.
- Conquer: Recursively sort the left and right halves of the list.
- Merge: Merge the two sorted halves back together using a helper function.
- Optimize space by performing operations directly on the list without additional storage for nodes.


# Code
```Kotlin []
class Solution {
    fun sortList(head: ListNode?): ListNode? {
        if (head == null || head.next == null) return head

        val mid = getMid(head)
        val left = sortList(head)
        val right = sortList(mid)

        return merge(left, right)
    }

    private fun getMid(head: ListNode?): ListNode? {
        var slow = head
        var fast = head
        var prev: ListNode? = null
        while (fast?.next != null) {
            prev = slow
            slow = slow?.next
            fast = fast.next?.next
        }
        prev?.next = null // split the list
        return slow
    }

    private fun merge(l1: ListNode?, l2: ListNode?): ListNode? {
        val dummy = ListNode(0)
        var tail = dummy

        var p1 = l1
        var p2 = l2

        while (p1 != null && p2 != null) {
            if (p1.`val` < p2.`val`) {
                tail.next = p1
                p1 = p1.next
            } else {
                tail.next = p2
                p2 = p2.next
            }
            tail = tail.next!!
        }
        tail.next = p1 ?: p2

        return dummy.next
    }
}
```

```Java []
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
        if (prev != null) prev.next = null; // split the list
        return slow;
    }

    private ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode tail = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = (l1 != null) ? l1 : l2;

        return dummy.next;
    }
}
```