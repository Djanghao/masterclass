# Easy solution

**Author:** user0919Ie
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/5027689/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/5027689/)

---


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
     * @return Integer
     */
    function getDecimalValue($head) {
        $current = $head;
        $binaryNumberDigits = [];

        while($current !== null) {
            $binaryNumberDigits[] = $current->val;
            $current = $current->next;
        }
        $binaryNumber = implode(',', $binaryNumberDigits);

        return bindec($binaryNumber);
    }
}
```