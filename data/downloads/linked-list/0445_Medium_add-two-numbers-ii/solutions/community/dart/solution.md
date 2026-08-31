# Beat's100% Time and Space using Stack || Simple Solution

**Author:** m3n99
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3779488/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3779488/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using two stacks to make calculation easy, and to avoid reverse LinkedList


# Approach
<!-- Describe your approach to solving the problem. -->
push all data on the 2 Stack,then pop number by number and sum it, take mod and div for carry and the value of node as the examples.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(max(m, n)).
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(max(m, n)).
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
  ListNode? addTwoNumbers(ListNode? l1, ListNode? l2) {
    Stack s1 = Stack();
    Stack s2 = Stack();
    int carry = 0;
    ListNode? result = null;

    while (l1 != null) {
      s1.push(l1.val);
      l1 = l1.next;
    }

    while (l2 != null) {
      s2.push(l2.val);
      l2 = l2.next;
    }

    while (s1.isNotEmpty || s2.isNotEmpty || carry != 0) {
      num sum = carry;

      if (s1.isNotEmpty) sum += s1.pop();
      if (s2.isNotEmpty) sum += s2.pop();

      carry = sum ~/ 10;
      ListNode newNode = ListNode(sum % 10 as int);
      newNode.next = result;
      result = newNode;
    }

    return result;
  }
}
class Stack<E> {
  final _list = <E>[];

  void push(E value) => _list.add(value);

  E pop() => _list.removeLast();

  E get peek => _list.last;

  bool get isEmpty => _list.isEmpty;
  bool get isNotEmpty => _list.isNotEmpty;

  @override
  String toString() => _list.toString();
}
```