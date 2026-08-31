# PHP

**Author:** zhumabekov
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/260043/](https://leetcode.com/problems/sum-of-two-integers/solutions/260043/)

---

class Solution {

    /**
     * @param Integer $a
     * @param Integer $b
     * @return Integer
     */
    function getSum($a, $b) {
        while ($b != 0) {
            $carry = $a & $b;
            $a = $a ^ $b;
            $b = $carry <<1;
        }
        return $a;
    }
}