# php solution

**Author:** Reverbere
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/5405660/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/5405660/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $costs
     * @param Integer $coins
     * @return Integer
     */
    function maxIceCream($costs, $coins) {
        $count = 0;
        sort($costs);
        for ($i = 0; $i <= count($costs)-1; $i++) {
            if ($costs[$i] + $total <= $coins) {
                $count++;
                $coins = $coins - $costs[$i];
            }
        }
        return $count;
    }
}
```