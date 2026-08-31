# ✔️ 100% Fastest TypeScript Solution

**Author:** sergeyleschev
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1893347/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/1893347/)

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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) { return null }
  if (!head.next) { return head }
  let fakeHead = new ListNode(undefined, head) // beginning of a returned linked list
  let prev = fakeHead // start of the group with same values
  let current = head // pointer

  while (current) { // move through the current group until new value is seen
    while (current.next && prev.next && prev.next.val === current.next.val) { current = current.next }

    if (prev.next === current) {
      prev = prev.next // if group has only one member, move prev to current
    } else {
      prev.next = current.next // otherwise, exclude the group
    }

    current = current.next as ListNode // Move to the next node
  }

  return fakeHead.next
}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.