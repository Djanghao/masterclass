# beats 100% memory

**Author:** grapefruit_enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/3355705/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/3355705/)

---

# Code
```
function minOperationsMaxProfit(customers: number[], boardingCost: number, runningCost: number): number {
  let profit = 0;
  let maxProfitRound = -1;
  let maxProfit = -Infinity;
  let round = 1
  while (true) {
    let toBoard = 0
    const maybeBoard = customers.shift()
    if (maybeBoard) {
      toBoard = Math.min(maybeBoard, 4)
      const rest = maybeBoard - toBoard
      if (rest > 0) {
        if (typeof customers[0] == "number") {
          customers[0] += rest
        } else {
          customers.push(rest)
        }
      }
      profit += boardingCost * toBoard
    }
    profit -= runningCost
    if (profit > 0 && maxProfit < profit) {
      maxProfit = profit
      maxProfitRound = round
    }
    round++
    if (customers.length === 0) break;
  }
  return maxProfitRound
};

```