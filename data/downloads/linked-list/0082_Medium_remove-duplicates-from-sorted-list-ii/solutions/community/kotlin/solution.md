# KOLIN and JAVA solution - beats 100%

**Author:** anlk
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/6031933/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/6031933/)

---

\u2618\uFE0F\u2618\uFE0F\u2618\uFE0F If this solution was helpful, please consider upvoting! \u2705

# Intuition
To remove nodes with duplicate values, we need to detect when there are repeated values and then skip over all nodes with those values to retain only distinct elements.

# Complexity
- Time complexity: $$O(n)$$ where n is the number of nodes in the list.

- Space complexity: $$O(1)$$ as we are modifying the list in place

# Code
```Kotlin []
class Solution {
    fun deleteDuplicates(head: ListNode?): ListNode? {
        val dummy = ListNode(0).apply { next = head }

        var previous = dummy
        var current = head
        while (current != null) {
            if (current.next != null && current.`val` == current.next?.`val`) {
                while (current?.next != null && current.`val` == current.next?.`val`) {
                    current = current.next
                }
                previous.next = current?.next
            } else {
                previous = previous.next!!
            }
            current = current?.next
        }
        return dummy.next        
    }
}
```

```Java []
public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0, head);
        ListNode prev = dummy;
        while (head != null) {
            if (head.next != null && head.val == head.next.val) {
                while (head.next != null && head.val == head.next.val) {
                    head = head.next;
                }
                prev.next = head.next;
            } else {
                prev = prev.next;
            }
            head = head.next;
        }
        return dummy.next;
    }
}
```