# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/6097096/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/6097096/)

---

```php []
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {

        // First attempt: Divide and conquer approach. Unsuccessful.
        // return $this->divideAndConquer($prices);

        // Second attempt: DP + state machine. WORKING, but seems slow.
        // return $this->dpStateMachine($prices);
        //
        // Second attempt bis: remove arrays and keep just last values of each.
        // More difficult to write and understand in a first pass, but faster and less memory consuming.
        return $this->dpStateMachineBis($prices);

        // Third attempt: keep full array of invested/divested 1st time. ==> DIDN'T WORK.
        // Once finished, create array of "profit increases" between every two specific days.
        // Take two biggest "profit increases" and sum them. That should be the result.
        // return $this->dpStateMachineProfitIncreases($prices);
    }
    
    // First attempt
    function divideAndConquer(&$prices) {
        // Divide and conquer approach.
        $maxProfit = 0;
        for ($i=0; $i<count($prices); $i++) {
            $leftPrices = array_slice($prices, 0, $i);
            $rightPrices = array_slice($prices, $i);

            $maxLeft = $this->maxPartialProfit($leftPrices);
            $maxRight = $this->maxPartialProfit($rightPrices);

            $maxProfit = max(
                $maxProfit,
                $maxLeft + $maxRight
            );
        }
        return $maxProfit;
    }
    // From https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/6062289/vm
    function maxPartialProfit($prices) {
        $lowestPastPrice = $prices[0];
        $maxProfit = 0;

        for ($i=1; $i<count($prices); $i++) {
            $curProfit = $prices[$i] - $lowestPastPrice;
            if ($curProfit > $maxProfit) {
                $maxProfit = $curProfit;
            }
            if ($prices[$i] < $lowestPastPrice) {
                $lowestPastPrice = $prices[$i];
            }
        }

        return $maxProfit;
    }

    // Second attempt
    function dpStateMachine(&$prices) {
        // Possible states: invested1stTime > divested1stTime > invested2ndTime > divested2ndTime.
        $maxProfitIfInvested1stTime[0] = -$prices[0];
        $maxProfitIfDivested1stTime[0] = 0;
        $maxProfitIfInvested2ndTime[0] = -$prices[0];
        $maxProfitIfDivested2ndTime[0] = 0;

        $numPrices = count($prices);
        for ($i=1; $i<$numPrices; $i++) {
            $maxProfitIfInvested1stTime[$i] = max(  // Ways to reach Inv1st state:
                $maxProfitIfInvested1stTime[$i-1],      // Yesterday was in Inv1st state: do nothing
                -$prices[$i]                            // Never bought before: buy
            );
            $maxProfitIfDivested1stTime[$i] = max(  // Ways to reach Div1st state:
                $maxProfitIfDivested1stTime[$i-1],              // Yesterday was in Div1st state: do nothing
                $maxProfitIfInvested1stTime[$i-1] + $prices[$i] // Yesterday was in Inv1st state: sell
            );
            $maxProfitIfInvested2ndTime[$i] = max(  // Ways to reach Inv2nd state:
                $maxProfitIfInvested2ndTime[$i-1],                  // Yesterday was in Inv2nd state: do nothing
                $maxProfitIfDivested1stTime[$i-1] - $prices[$i],    // Yesterday was in Div1st state: buy
            );
            $maxProfitIfDivested2ndTime[$i] = max(  // Ways to reach Div2nd state:
                $maxProfitIfDivested2ndTime[$i-1],              // Yesterday was in Div2nd state: do nothing
                $maxProfitIfInvested2ndTime[$i-1] + $prices[$i] // Yesterday was in Inv2nd state: sell
            );
        }
        return max(
            $maxProfitIfDivested1stTime[$numPrices-1],
            $maxProfitIfDivested2ndTime[$numPrices-1]
        );
    }

    // Second attempt bis
    function dpStateMachineBis(&$prices) {
        // Possible states: invested1stTime > divested1stTime > invested2ndTime > divested2ndTime.
        $maxProfitIfInvested1stTime = -$prices[0];
        $maxProfitIfDivested1stTime = 0;
        $maxProfitIfInvested2ndTime = -$prices[0];
        $maxProfitIfDivested2ndTime = 0;

        $numPrices = count($prices);
        for ($i=1; $i<$numPrices; $i++) {
            $NEWmaxProfitIfInvested1stTime = max(  // Ways to reach Inv1st state:
                $maxProfitIfInvested1stTime,            // Yesterday was in Inv1st state: do nothing
                -$prices[$i]                            // Never bought before: buy
            );
            $NEWmaxProfitIfDivested1stTime = max(  // Ways to reach Div1st state:
                $maxProfitIfDivested1stTime,              // Yesterday was in Div1st state: do nothing
                $maxProfitIfInvested1stTime + $prices[$i] // Yesterday was in Inv1st state: sell
            );
            $NEWmaxProfitIfInvested2ndTime = max(  // Ways to reach Inv2nd state:
                $maxProfitIfInvested2ndTime,                  // Yesterday was in Inv2nd state: do nothing
                $maxProfitIfDivested1stTime - $prices[$i],    // Yesterday was in Div1st state: buy
            );
            $NEWmaxProfitIfDivested2ndTime = max(  // Ways to reach Div2nd state:
                $maxProfitIfDivested2ndTime,              // Yesterday was in Div2nd state: do nothing
                $maxProfitIfInvested2ndTime + $prices[$i] // Yesterday was in Inv2nd state: sell
            );

            $maxProfitIfInvested1stTime = $NEWmaxProfitIfInvested1stTime;
            $maxProfitIfDivested1stTime = $NEWmaxProfitIfDivested1stTime;
            $maxProfitIfInvested2ndTime = $NEWmaxProfitIfInvested2ndTime;
            $maxProfitIfDivested2ndTime = $NEWmaxProfitIfDivested2ndTime;
        }
        return max(
            $maxProfitIfDivested1stTime,
            $maxProfitIfDivested2ndTime
        );
    }

    // Third attempt
    function dpStateMachineProfitIncreases(&$prices) {
        // Possible states: invested > divested
        $maxProfitIfInvested[0] = -$prices[0];
        $maxProfitIfDivested[0] = 0;

        $numPrices = count($prices);
        for ($i=1; $i<$numPrices; $i++) {
            $maxProfitIfInvested[$i] = max(  // Ways to reach invested state:
                $maxProfitIfInvested[$i-1],      // Yesterday was in invested state: do nothing
                -$prices[$i]                     // Never bought before: buy
            );
            $maxProfitIfDivested[$i] = max(  // Ways to reach divested state:
                $maxProfitIfDivested[$i-1],              // Yesterday was in divested state: do nothing
                $maxProfitIfInvested[$i-1] + $prices[$i] // Yesterday was in invested state: sell
            );
        }

        // Now, calculate "max_profit increases" and keep biggest 2. Let's use a MinHeap for that
        $biggestIncreases = new SplMinHeap();
        for ($i=1; $i<$numPrices; $i++) {
            $increase = $maxProfitIfDivested[$i] - $maxProfitIfDivested[$i-1];
            if ($biggestIncreases->count() < 2) {
                $biggestIncreases->insert($increase);
            }
            elseif ($biggestIncreases->top() < $increase) {
                $biggestIncreases->extract();
                $biggestIncreases->insert($increase);
            }
        }

        $maxProfit = 0;
        while (!$biggestIncreases->isEmpty()) {
            $maxProfit += $biggestIncreases->extract();
        }

        return max(0, $maxProfit);
    }
}
```