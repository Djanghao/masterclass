# Kotlin easy recursive

**Author:** firzagustama
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/1732265/](https://leetcode.com/problems/reverse-nodes-in-even-length-groups/solutions/1732265/)

---

Shortly this solution uses backtracking reverse groups from last group

```
class Solution {
    fun reverseEvenLengthGroups(head: ListNode?): ListNode? {
        return reverse(head, arrayOf(null), intArrayOf(1), 1)
    }
    
    private fun reverse(head: ListNode?, tail: Array<ListNode?>, k: IntArray, g: Int): ListNode? {
        if (head == null || head.next == null) return head
        if (k[0] == g) {
            tail[0] = reverse(head.next, tail, intArrayOf(1), g + 1)
            return head.apply { this.next = tail[0] }
        }
        val rest = reverse(head.next, tail, k.apply { this[0]++ }, g)
        if ((k[0] and 1) == 0) {
            head.next.next = head
            head.next = tail[0]  
            return rest
        }
        return head
    }
}
```