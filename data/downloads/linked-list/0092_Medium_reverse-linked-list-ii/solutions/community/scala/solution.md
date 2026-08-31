# Scala efficient solution

**Author:** urbanclimatefr
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-linked-list-ii/solutions/3698250/](https://leetcode.com/problems/reverse-linked-list-ii/solutions/3698250/)

---


# Approach
1. Creates a dummy node and connects it to the head of the list.
2. Iterates to the node before the left-th node (represented by the pre variable).
3. Reverses the nodes from the left-th node to the right-th node.
4. Each time through the loop, the node at the current position (start) is connected to the part of the list before the left-th node, and the node at the position next to current (then) is moved to the current position.
5. After the loop, the list has been reversed from the left-th node to the right-th node.
6. Returns the list after the dummy node, thus returning the reversed list.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 

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
  def reverseBetween(head: ListNode, left: Int, right: Int): ListNode = {
    val dummy = new ListNode(0, head)
    var pre = dummy
    for (_ <- 0 until left - 1) {
      pre = pre.next
    }
    val start = pre.next
    var then = start.next
    for (_ <- 0 until right - left) {
      start.next = then.next
      then.next = pre.next
      pre.next = then
      then = start.next
    }
    dummy.next
  }
}
```