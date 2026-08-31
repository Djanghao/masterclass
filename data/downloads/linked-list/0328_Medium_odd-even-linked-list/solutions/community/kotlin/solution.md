# Kotlin step by step - O(n) time and O(1) space

**Author:** MohiFayden
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/5384514/](https://leetcode.com/problems/odd-even-linked-list/solutions/5384514/)

---

# Intuition
Check the comments inside the function

# Approach
Check the comments inside the function

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * Example usage:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list:
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun oddEvenList(head: ListNode?): ListNode? {

        // This function rearranges a singly-linked list such that all odd-indexed nodes
        // are grouped together followed by the even-indexed nodes. The goal is to achieve
        // this rearrangement in O(1) space complexity and O(n) time complexity.

        var odd = head // Pointer to track the odd indexed nodes
        var even = head?.next // Pointer to track the even indexed nodes
        val evenHead = even // Reference to the head of the even indexed list

        // Iterate through the list until there are no more even nodes
        while (even?.next != null) {
            odd?.next = odd?.next?.next // Link current odd node to the next odd node
            even.next = even.next?.next // Link current even node to the next even node
            odd = odd?.next // Move odd pointer to the next odd node
            even = even.next // Move even pointer to the next even node
        }

        // Connect the end of the odd indexed list to the head of the even indexed list
        odd?.next = evenHead

        // Return the modified list
        return head
    }
}
```