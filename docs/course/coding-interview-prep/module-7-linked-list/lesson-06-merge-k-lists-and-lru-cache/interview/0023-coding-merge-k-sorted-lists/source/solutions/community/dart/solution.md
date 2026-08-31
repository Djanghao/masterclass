# First Dart Code Ever

**Author:** jakejet64
**Votes:** 1
**Link:** [https://leetcode.com/problems/merge-k-sorted-lists/solutions/2943844/](https://leetcode.com/problems/merge-k-sorted-lists/solutions/2943844/)

---

# Intuition

Before today, I had not touched dart.

I have a decent amount of experience, but all of my recent projects have been in JS.

I know. I know this is terrible. Please help.

I saw nobody had a solution yet, so I had to submit my terrible code and be #1.

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? mergeKLists(List<ListNode?> lists) {

    // convert to non-nullable list
    lists = lists.where((node) => node != null)
                 .map((node) => node as ListNode)
                 .toList();

    if(lists.length == 0) return null;
    if(lists.length == 1) return lists.single;

    ListNode smallest = lists.reduce((a, b) => (a!.val < b!.val) ? a : b) as ListNode;
    lists.remove(smallest);
    if(smallest.next != null) lists.add(smallest.next);

    ListNode ret = new ListNode(smallest.val);
    ListNode pointer = ret;

    while(lists.length > 1) {
      smallest = lists.reduce((a, b) => (a!.val < b!.val) ? a : b) as ListNode;
      lists.remove(smallest);
      if(smallest.next != null) lists.add(smallest.next);
      pointer.next = new ListNode(smallest.val);
      pointer = pointer.next as ListNode;
    }

    pointer.next = lists.single;

    return ret;
  }
}
```