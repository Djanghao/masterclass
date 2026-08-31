# [0ms][1LINER][100%][Fastest Solution Explained] O(n)time complexity O(n)space complexity

**Author:** darian-catalin-cucer
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/2127566/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/2127566/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Kotlin ***

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
      fun removeNthFromEnd(head: ListNode?, n: Int): ListNode? {
    if (head == null) return null
    
    var nodeCount = 0
    var current = head
    
    while (current != null) {
      nodeCount++
      current = current.next
    }
    
    if (nodeCount == n) return head.next
    
    var prev: ListNode? = null
    current = head
    val dummy = ListNode(-1)
    dummy.next = current
    
    var step = nodeCount - n
    while (step-- > 0) {
      prev = current
      current = current?.next
    }
    
    prev?.next = current?.next
    
    return dummy.next
  }
}

```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***