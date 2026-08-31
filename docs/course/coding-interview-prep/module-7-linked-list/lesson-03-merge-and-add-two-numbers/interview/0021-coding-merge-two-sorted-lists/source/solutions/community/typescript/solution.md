# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 47
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/1890572/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1890572/)

---

```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) { return l2 }
  if (l2 === null) { return l1 }

  if (l1.val < l2.val) 
       { l1.next = mergeTwoLists(l1.next, l2); return l1 } 
  else { l2.next = mergeTwoLists(l1, l2.next); return l2 }
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.