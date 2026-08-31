# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/4664168/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/4664168/)

---

# Code
```
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
    let res = {
        rotate: -1,
        profit: 0
    }
    let wait = profit = rotate = 0;
    for (let cust of customers) {
        wait += cust;
        runningWheel();
    }
    while (wait > 0) runningWheel();
    return res.rotate;

    function runningWheel() {
        rotate += 1;
        let currentProfit = wait >= 4 ? 4 * boardingCost - runningCost : wait * boardingCost - runningCost;
        profit += currentProfit;
        wait = Math.max(wait - 4, 0);
        if (profit > res.profit) {
            res.rotate = rotate;
            res.profit = profit;
        }
    }
};

```