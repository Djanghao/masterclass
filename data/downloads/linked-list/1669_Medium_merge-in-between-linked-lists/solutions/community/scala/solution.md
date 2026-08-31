# Easy solution in linear time, beats 100% of submissions

**Author:** stefancomanita
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4903576/](https://leetcode.com/problems/merge-in-between-linked-lists/solutions/4903576/)

---

# Intuition
We just cycle the first list to identify the nodes we must modify, and after finding the we alter them.

# Approach
First we cycle the first list to identify the start and and nodes, which are actualy the parent of the first node that we need to change and then the child of the end node.

After finding this nodes we must find the end of the second list.

Then we have all we need and just replace the appropiate children/next in nodes we find and return the initial list.

# Complexity
- Time complexity: O(n + m) -> O(N)

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode(_x: Int = 0, _next: ListNode = null) {
 *   var next: ListNode = _next
 *   var x: Int = _x
 * }
 */
object Solution {
    def mergeInBetween(list1: ListNode, a: Int, b: Int, list2: ListNode): ListNode = {

    var index = 0
    var start: ListNode = null
    var end: ListNode = null

    var current = list1
    var keepGoing = true

    while (current != null && keepGoing) {

      //we want the position before a
      if (index == a - 1) {
        start = current
      }

      //we want the position after b
      if (index == b + 1) {
        end = current
      }

      if (start != null && end != null) {
        keepGoing = false
      }

      current = current.next
      index += 1
    }

    var lastOfSecondList: ListNode = null
    current = list2

    while (current != null) {

      current = current.next

      if (current != null) {
        lastOfSecondList = current
      }
    }

    start.next = list2
    lastOfSecondList.next = end

    list1
  }
}
```