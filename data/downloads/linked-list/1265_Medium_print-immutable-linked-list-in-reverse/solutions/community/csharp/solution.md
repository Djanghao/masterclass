# C# clean code solution, O(1) space challenge

**Author:** n1l
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/3098280/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/3098280/)

---

# Intuition
The penult node should be printed.

# Approach
Traverse the linked from head to penult node. When rich the penalt node, print the node value, go back to head. Do that until the penult node and the head point to the same node.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * class ImmutableListNode {
 *     public void PrintValue(); // print the value of this node.
 *     public ImmutableListNode GetNext(); // return the next node.
 * }
 */

public class Solution {
    public void PrintLinkedListInReverse(ImmutableListNode head) {
        ImmutableListNode lastNode = null, currentNode = head;
        while (currentNode != lastNode) {
            ImmutableListNode firstNode = head;
            while (currentNode.GetNext() != lastNode) {
                currentNode = currentNode.GetNext();
            }

            currentNode.PrintValue();
            lastNode = currentNode;
            currentNode = head;
        }
    }
}
```