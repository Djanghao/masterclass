# php solution

**Author:** fatemebesharat766
**Votes:** 2
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/3686807/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/3686807/)

---

# Complexity
- Time complexity:
O(n) where n is the length of prices array.
- Space complexity:
O(1)
# Code
```
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        $maxProfit = 0;
        for ($i=1; $i < count($prices); $i++) {
            if ($prices[$i] > $prices[$i-1]) {
                $maxProfit += $prices[$i] - $prices[$i - 1];
            }
        }
        return $maxProfit;
    }
}
```