# PHP - Solution beats 100% time + 100% memory

**Author:** hakan_akhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/4734143/](https://leetcode.com/problems/add-two-numbers-ii/solutions/4734143/)

---

![Screenshot 2024-02-16 at 01.25.39.png](./images/0.png)


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


    function objToArray($l){
        $n = [];
        while($l) {
            $n = array_merge([$l->val], $n);
            $l = $l->next;
        }
        return $n;
    }
    function arrayToObj($c){
        $next = null;
        for ($i = 0; $i < count($c); $i++) {
            $next = new ListNode($c[$i], $next);
        }
        return $next;
    }

    /**
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        $n1 = $this->objToArray($l1);
        $n2 = $this->objToArray($l2);
        $c = [];
        for($i=0; $i< max(count($n1), count($n2)); $i++) {
            $t = $n1[$i] + $n2[$i] + ($c[$i] ?? 0);
            $c[$i] = $t%10;
            if($t>9) $c[$i+1] = 1;
        }
       return $this->arrayToObj($c);
    }
}
```