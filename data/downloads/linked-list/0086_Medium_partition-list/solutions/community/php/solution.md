# Low Memory highly readable approach

**Author:** cshaun775
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-list/solutions/3913086/](https://leetcode.com/problems/partition-list/solutions/3913086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
 - Split the nodes into lower, and higher.
 - You can them combine these arrays to get an array of what the solution should be 
 - reverse the array and generate ListNodes backwards

# Complexity
- Time complexity: N/A
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: N/A
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @param Integer $x
     * @return ListNode
     */
    function partition($head, $x) {
        $lower = [];
        $higher = [];

        while($head) {
        // Split values into lower and higher arrays ($x goes into higher)
            $head->val < $x ? $lower[] = $head->val : $higher[] = $head->val;
            $head = $head->next;
        }
        // combine lower and higher arrays
        return $this->generateListNodes([
            ...$lower,
            ...$higher,
        ]);
    }

    private function generateListNodes($array) {
        $nodes = null;
        // reverse the array and generate the nodes backwards
        foreach(array_reverse($array) as $item) {
            $nodes = new ListNode($item, $nodes);
        }
        return $nodes;
    }
}
```