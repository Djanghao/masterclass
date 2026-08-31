# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/6097195/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/solutions/6097195/)

---

```php []
class Solution {

    /**
     * @param Integer $k
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($k, $prices) {
        // Very similar to https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/6097096/vm/ (second attempt). Highly recommended to check that solution first.
        // Only difference is that we must generalize the number of transaction pairs.

        // INTUITION:
        // There will be 2*K possible states: 2*(invested > divested).
        // Given a specific day (specific price), we will keep maxProfit of each state in an array.
        //
        // ALGO EXPLANATION:
        // To reach KthInvested value, we will get the max between:
        //      - KthInvested value on the previous day (didn't sell)
        //      - (K-1)thDivested value on the previous day (bought)
        // To reach KthDivested value, we will get the max between:
        //      - KthDivested value on the previous day (didn't buy)
        //      - (K-1)thInvested value on the previous day (sold)
        //
        // Visually, it is a matrix:
        //.        day1.       day2    .....  dayN
        // Inv1  -prices[0]
        // Div1      0
        // Inv2  -prices[0]
        // ...
        // DivK      0

        $numPrices = count($prices);
        $maxProfitsLastDay = array_fill(0, $k, [
            'inv' => -$prices[0],
            'div' => 0,
        ]);

        for ($i=1; $i<$numPrices; $i++) {
            $maxProfitsCurDay = [];
            for ($j=0; $j<$k; $j++) {
                $maxProfitsIfInvested = max(    // Ways to reach KthInvested status:
                    $maxProfitsLastDay[$j]['inv'],                          // Yesterday was in KthInvested: do nothing
                    ($maxProfitsLastDay[$j-1]['div'] ?? 0) - $prices[$i]    // Yesterday was in (K-1)thDivested state (or never bought): buy
                );
                $maxProfitsIfDivested = max(    // Ways to reach KthDivested status:
                    $maxProfitsLastDay[$j]['div'],                  // Yesterday was in KthDivested: do nothing
                    $maxProfitsLastDay[$j]['inv'] + $prices[$i]     // Yesterday was in KthInvested: sell
                );
                $maxProfitsCurDay[$j] = [
                    'inv' => $maxProfitsIfInvested,
                    'div' => $maxProfitsIfDivested
                ]; 
            }
            $maxProfitsLastDay = $maxProfitsCurDay;
        }

        // Max profit may be in any "divested" number of transactions.
        $maxProfit = array_reduce(
            $maxProfitsLastDay,
            fn ($curMax, $kthTransaction) => max($curMax, $kthTransaction['div']),
            0
        );

        return $maxProfit;
    }
}
```