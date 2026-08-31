# [Kotlin] Simple Frequency Map Solution

**Author:** devle79
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-frequency/solutions/4840013/](https://leetcode.com/problems/linked-list-frequency/solutions/4840013/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Simply, count frequency of all nodes in linked list and construct frequency linked list by frequency map.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun frequenciesOfElements(head: ListNode?): ListNode? {
        val frequencyMap = hashMapOf<Int, Int>()

        var headPointer = head

        while (headPointer != null) {
            frequencyMap.merge(headPointer.`val`, 1) { a, b -> a + b }
            headPointer = headPointer.next
        }

        val frequencyNode = ListNode(-1)
        var pointer = frequencyNode

        frequencyMap.values.forEach { frequency ->
            pointer.next = ListNode(frequency)
            pointer = pointer.next!!
        }

        return frequencyNode.next
    }
}
```