# 🔥💻 Accepted 92.6%✅ || JavaScript & TS 🔊 || Easy solution

**Author:** SardorbekBahramov
**Votes:** 50
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4251707/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4251707/)

---

# Best Time To Buy and Sell Stock
### Firstly, from the question, we can easily realize that we need to have three different functions such as `maxProfit()`. Now, let's see the result, Sure! Here's the JavaScript code that solves the problem:

# 1. Traditional Function way:
> ###### A traditional function is defined using the function keyword. It can be a named function or an anonymous function assigned to a variable.
- In this code, the `maxProfit` function takes an array prices as input. It initializes the `maxProfit` variable to 0 and the `minPrice` variable to the maximum possible value. This ensures that any price encountered will be smaller than `minPrice` initially.

- Then, it iterates through the `prices` array using a loop. For each element, it checks if the current price is smaller than `minPrice`. If it is, the `minPrice` is updated to the current price.

- If the current price minus `minPrice` is greater than `maxProfit`, it updates `maxProfit` to the new value.

- After iterating through all the prices, the function returns the final `maxProfit`.
```
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
```
- In this example, the array `prices` represents the stock prices on different days. The function `maxProfit` is called with prices as an argument, and it returns the maximum profit that can be achieved by buying and selling the stock. The expected output is `5`.
```
    const prices = [7, 1, 5, 3, 6, 4];
    console.log(maxProfit(prices)); // Output: 5

```
![7abc56.jpg](./images/0.jpeg)

