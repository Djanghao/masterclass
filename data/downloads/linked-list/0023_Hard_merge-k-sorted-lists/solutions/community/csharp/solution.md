# Merge k sorted lists

**Author:** r9n
**Votes:** 9
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/5637335/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/5637335/)

---


```
public class Solution {
    public ListNode MergeKLists(ListNode[] lists) {
        if (lists == null || lists.Length == 0) return null;

        return Merge(lists, 0, lists.Length - 1);
    }

    private ListNode Merge(ListNode[] lists, int left, int right) {
        if (left == right) return lists[left];

        int mid = left + (right - left) / 2;
        ListNode l1 = Merge(lists, left, mid);
        ListNode l2 = Merge(lists, mid + 1, right);

        return MergeTwoLists(l1, l2);
    }

    private ListNode MergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode();
        ListNode current = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1 != null) current.next = l1;
        if (l2 != null) current.next = l2;

        return dummy.next;
    }
}

```