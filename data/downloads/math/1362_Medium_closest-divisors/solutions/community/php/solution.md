# Simple PHP Solution

**Author:** nishk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/5495159/](https://leetcode.com/problems/closest-divisors/solutions/5495159/)

---

# Code
```
class Solution {

    /**
     * @param Integer $num
     * @return Integer[]
     */
    function closestDivisors($num) {
        $findDivisors = function($x) {
            $val = intval(sqrt($x));

            for ($i = $val; $i > 0; $i--) {
                if ($x % $i == 0) {
                    return [$i, intval($x / $i)];
                }
            }

            return [];
        };

        $res = array_merge([$findDivisors($num + 1)], [$findDivisors($num + 2)]);

        usort($res, function ($a, $b) {
            return abs($a[0] - $a[1]) - abs($b[0] - $b[1]); 
        });

        return $res[0];
    }
}
```