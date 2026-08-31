# Rust simple

**Author:** maksimryndin
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/2032365/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/2032365/)

---

```
pub fn max_profit(prices: &Vec<i32>) -> i32 {
    let n = prices.len();
    let mut first = vec![0; n];
    let mut second = vec![0; n+1];

    let mut first_price = i32::MAX;
    let mut first_profit = i32::MIN;

    let mut second_price = i32::MIN;
    let mut second_profit = i32::MIN;

    // Let's call the break day the day, when we sell the first stock
    // Some day after the break day we buy the second stock

    // So we collect maximum profits up to i break day and maximum profits
    // from day i+1 till the last day
    for i in 0..n {
        first_price = first_price.min(prices[i]);
        first_profit = first_profit.max(prices[i]-first_price);
        first[i] = first_profit;

        second_price = second_price.max(prices[n-i-1]);
        second_profit = second_profit.max(second_price - prices[n-1-i]);
        second[n-1-i] = second_profit;
    }

    // So the maximum profit is searched by moving break day
    let mut max_profit = 0;
    for i in 0..n {
        max_profit = max_profit.max(first[i]+second[i+1])
    }
    max_profit
}
```