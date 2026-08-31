# recursive function in php 6ms

**Author:** spy_007
**Votes:** 0
**Link:** [https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/4173735/](https://leetcode.com/problems/print-immutable-linked-list-in-reverse/solutions/4173735/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * class ImmutableListNode {
 *     public function printValue() {} // print the value of this node.
 *     public function getNext() {} // return the next node.
 * };
 */

class Solution {

    /**
     * @param  ImmutableListNode  $head
     * @return void
     */
    function printLinkedListInReverse($head) {
        if ($head) {
            $this->printLinkedListInReverse($head->getNext());
            $head->printValue();
        }

    }
}
```