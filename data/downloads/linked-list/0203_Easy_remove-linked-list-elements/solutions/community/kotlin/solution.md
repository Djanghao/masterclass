# Kotlin 2 Pointer, Dummy Head

**Author:** jschnall
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/3751643/](https://leetcode.com/problems/remove-linked-list-elements/solutions/3751643/)

---

# Intuition
Seems simple enough, The only edgecase is if the root node is removed. It should be possible to simplify this by adding a dummy head infront of the current one.

# Approach
Iterate through list keeping 2 pointers

# Complexity
- Time complexity:
$$O(n)$$ because you have to iterate through all n items of the list

- Space complexity:
$$O(1)$$ because the only additional storage is the dummy head, and the 2 pointers.

# Code
```
/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun removeElements(head: ListNode?, `val`: Int): ListNode? {
        val newHead = ListNode(0)
        newHead.next = head
        
        var front = head
        var back = newHead

        while (front != null) {
            if (front.`val` == `val`) {
                back.next = front.next
            } else {
                back = back.next
            }
            front = front.next
        }

        return newHead.next
    }
}
```