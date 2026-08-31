# PHP solution

**Author:** punkundead
**Votes:** 0
**Link:** [https://leetcode.com/problems/shifting-letters/solutions/1451740/](https://leetcode.com/problems/shifting-letters/solutions/1451740/)

---

```php
class Solution
{

    /**
     * @param String    $s
     * @param Integer[] $shifts
     *
     * @return String
     */
    function shiftingLetters($s, $shifts)
    {
        $shift = 0;
        $ordA = ord('a');
        for ($i = count($shifts) - 1; $i >= 0; $i--) {
            $shift += $shifts[$i];
            $s[$i] = chr($ordA + (ord($s[$i]) - $ordA + $shift) % 26);
        }

        return $s;
    }
}
php