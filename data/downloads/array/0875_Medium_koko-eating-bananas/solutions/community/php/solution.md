# PHP - 50 ms / beats 100%

**Author:** tinghaolai
**Votes:** 1
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/3270818/](https://leetcode.com/problems/koko-eating-bananas/solutions/3270818/)

---


# Code
```
class Solution {

    /**
     * @param Integer[] $piles
     * @param Integer $h
     * @return Integer
     */
    function minEatingSpeed($piles, $h) {
        $sum = array_sum($piles);
        $length = count($piles);
        $maxVal = $sum - $length + 1;
        $right = ceil($maxVal / ($h - $length + 1));
        $left = ceil(array_sum($piles) / $h);

        while ($left < $right) {
            $middle = (int) (($right + $left) / 2);
            $valid = true;
            $currentHour = 0;
            foreach ($piles as $pile) {
                $currentHour += ceil($pile / $middle);
                if ($currentHour > $h) {
                    $valid = false;
                    break;
                }
            }

            if ($valid) {
                $right = $middle;
            } else {
                $left = $middle + 1;
            }
        }

        return (int) $left;
    }
}
```