# Kotlin - Simple insertion loop

**Author:** Karim_Ibrahim
**Votes:** 2
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4520896/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/4520896/)

---

# Intuition
Just loop on each node and look for the correct gap. We have 2 corner cases to take care of:
1. An empty list: Create a new node/list.
2. The new value fits in the tail:head gap: Look for the gap, as we go, and check if the new value falls in between.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * Definition for a Node.
 * class Node(var `val`: Int) {
 *     var next: Node? = null
 * }
 */

class Solution {
    fun insert(head: Node?, insertVal: Int): Node? {
        // Basic corner case, single node.
        if(head == null) {
            val newHead = Node(insertVal)
            newHead.next = newHead
            return newHead
        }

        val newNode = Node(insertVal)
        var curr = head!!
        // Look for the correct gap to insert the new node.
        while(curr.next!! != head) {
            // The trivial use-case:
            // prev node <= new node < next node
            if(curr.`val` <= insertVal && curr.next!!.`val` > insertVal) {
                break
            }
            // Look for the tail:head gap.
            // Tail is the largest element in the list and it is where the 
            // order of the list is reversed, i.e.: prev node > next node
            if(curr.`val` > curr.next!!.`val`) {
                 // Check if the new node fits in the tail:head gap.
                 // The new node will fit only if:
                 // 1. The new node is larger than the largest element in the list, the tail.
                 // 2. The new node is smaller than the smallest element in the list, the head.
                 if(curr.`val` <= insertVal || insertVal < curr.next!!.`val`) {
                     break
                 }
            }
            curr = curr.next!!
        }

        // Link the new node in the correct gap.
        val next = curr.next!!
        curr.next = newNode
        newNode.next = next
        return head
    }
}
```