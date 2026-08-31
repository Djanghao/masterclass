# A solution with constant space complexity O(1) and linear time complexity O(N)

**Author:** liaison
**Votes:** 2018
**Link:** [https://leetcode.com/problems/copy-list-with-random-pointer/solutions/43491/](https://leetcode.com/problems/copy-list-with-random-pointer/solutions/43491/)

---

An intuitive solution is to keep a hash table for each node in the list, via which we just need to iterate the list in 2 rounds respectively to create nodes and assign the values for their random pointers. As a result, the space complexity of this solution is `O(N)`, although with a linear time complexity. 

*Note:  if we do not consider the space reversed for the output, then we could say that the algorithm does not consume any additional memory during the processing, i.e. O(1) space complexity*

As an optimised solution, we could reduce the space complexity into constant. ***The idea is to associate the original node with its copy node in a single linked list. In this way, we don't need extra space to keep track of the new nodes.***

The algorithm is composed of the follow three steps which are also 3 iteration rounds. 

 1. Iterate the original list and duplicate each node. The duplicate
    of each node follows its original immediately.
 2. Iterate the new list and assign the random pointer for each
    duplicated node.
 3. Restore the original list and extract the duplicated nodes.

The algorithm is implemented as follows:
```java
public RandomListNode copyRandomList(RandomListNode head) {
  RandomListNode iter = head, next;

  // First round: make copy of each node,
  // and link them together side-by-side in a single list.
  while (iter != null) {
    next = iter.next;

    RandomListNode copy = new RandomListNode(iter.label);
    iter.next = copy;
    copy.next = next;

    iter = next;
  }

  // Second round: assign random pointers for the copy nodes.
  iter = head;
  while (iter != null) {
    if (iter.random != null) {
      iter.next.random = iter.random.next;
    }
    iter = iter.next.next;
  }

  // Third round: restore the original list, and extract the copy list.
  iter = head;
  RandomListNode pseudoHead = new RandomListNode(0);
  RandomListNode copy, copyIter = pseudoHead;

  while (iter != null) {
    next = iter.next.next;

    // extract the copy
    copy = iter.next;
    copyIter.next = copy;
    copyIter = copy;

    // restore the original list
    iter.next = next;

    iter = next;
  }

  return pseudoHead.next;
}
```