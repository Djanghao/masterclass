# C# solution using Merge sort algorithm and fast-and-slow pointer method

**Author:** TabrizGulmammadov
**Votes:** 4
**Link:** [https://leetcode.com/problems/sort-list/solutions/4163453/](https://leetcode.com/problems/sort-list/solutions/4163453/)

---

# Approach
Firstly, we can achieve the appropriate solution with `O(n*logn)` time complexity for this problem using `Merge sort` or `Quick sort` algorithms. But, `O(1)` space complexity is required for this problem, that's why, we will use `Merge sort`. And in each iteration, we have to find the middle of the linked list, and to achieve this, we can use the `Fast and Slow pointer` technique.

# Complexity
- Time complexity: O(n*logn)

- Space complexity: O(1)

# Code
```
public class Solution {
    public ListNode SortList(ListNode head) {
        if(head is null || head.next is null) {
            return head;
        }

        var left = head;
        var right = GetMiddle(head);

        // we divide head linked list into 2 sublists
        var temp = right.next;
        right.next = null;
        right = temp;

        left = SortList(left);
        right = SortList(right);

        return MergeLists(left, right);
    }

    private ListNode GetMiddle(ListNode head) {
        var slow = head;
        var fast = head.next;

        while(fast is not null && fast.next is not null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    private ListNode MergeLists(ListNode first, ListNode second) {
        var dummy = new ListNode();
        var tail = dummy;

        while(first is not null && second is not null) {
            if(first.val < second.val) {
                tail.next = first;
                first = first.next;
            } else {
                tail.next = second;
                second = second.next;
            }

            tail = tail.next;
        }

        if(first is not null) {
            tail.next = first;
        }

        if(second is not null) {
            tail.next = second;
        }

        return dummy.next;
    }
}
```