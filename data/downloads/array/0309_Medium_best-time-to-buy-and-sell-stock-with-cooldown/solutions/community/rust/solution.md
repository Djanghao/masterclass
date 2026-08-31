# Rust | DP Solution Evolution | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2520407/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/solutions/2520407/)

---

Solutions to this problem become so much easier to understand if we take a litte time to define data types for the the state. I solved this as a part of the DP explore card, and I think that the methodology taught there is excellent. Let's begin by the top-down solution, since it's the easiest to come up with, and gives us hints on how we should proceed to a bottom-up solution. We see that we have two state variables, the number of `day`s passed so far, and the investment state `invested`, that tells whether we are invested in the stock or not, or are cooling down. From one day to the next, we can transition the state according to the following:

* If we are invested, we can hold our investment, or we can sell for a profit of `prices[day]` and transition to cooldown
* If we are not invested, we can stay non-invested, or we can buy for a cost of `prices[day]` and transition to invested
* If we are cooling down, we will transition to not invested

The top-down solution then becomes a straightforward implementation of these transitions. As the interpretation of the result of a function call to `Solution::dp(...)` is the additional maximal profit possible given the provided state, the base case of `prices.len()` days passed is that the additional profit possible is zero. Our desired result is the maximal profit possible given that no days have passed and we are not invested, and that is what we compute in `Solution::max_profit(...)`. The enum that we define for the investment state makes it a lot clearer what we are doing.

```
use std::collections::HashMap;

#[derive(PartialEq, Eq, Hash, Copy, Clone)]
enum Invested {
    Yes,
    No,
    Cooldown,
}

impl Solution {
    fn dp(prices: &[i32], day: usize, invested: Invested, memo: &mut HashMap<(usize, Invested), i32>) -> i32 {
        if day == prices.len() {
            0
        } else if let Some(profit) = memo.get(&(day, invested)) {
            *profit
        } else {
            let rez = match invested {
                Invested::Yes => Self::dp(prices, day + 1, invested, memo).max(prices[day] + Self::dp(prices, day + 1, Invested::Cooldown, memo)),
                Invested::No => Self::dp(prices, day + 1, invested, memo).max(-prices[day] + Self::dp(prices, day + 1, Invested::Yes, memo)),
                Invested::Cooldown => Self::dp(prices, day + 1, Invested::No, memo),
            };
            memo.insert((day, invested), rez);
            rez
        }
    }

    pub fn max_profit(prices: Vec<i32>) -> i32 {
        Self::dp(&prices, 0, Invested::No, &mut HashMap::new())
    }
}
```

From this implementation, it is now easier to see how to make a bottom-up solution. We need to compute the profit for all possible combinations of the state values, iterating in such a way that the computation builds on previously computed values. With our parameterization, the correct order is to iterate over the days in reverse. Again, defining a datatype for the DP state really helps in making the solution readable:

```
#[derive(Default, Clone)]
struct Profit {
    invested: i32,
    uninvested: i32,
    cooldown: i32,
}

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let n = prices.len();
        let mut dp = vec![Profit::default(); n + 1];
        for day in (0..n).rev() {
            dp[day] = Profit{
                invested: dp[day + 1].invested.max(prices[day] + dp[day + 1].cooldown),
                uninvested: dp[day + 1].uninvested.max(-prices[day] + dp[day + 1].invested),
                cooldown: dp[day + 1].uninvested,
            };
        }
        dp[0].uninvested
    }
}
```

Since we only use the results from the next day to compute the current, we can simplify this and keep only a single state value, that we use as the source and destination of each transition:

```
#[derive(Default, Clone)]
struct Profit {
    invested: i32,
    uninvested: i32,
    cooldown: i32,
}

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        let mut dp = Profit::default();
        for price in prices.into_iter().rev() {
            dp = Profit{
                invested: dp.invested.max(price + dp.cooldown),
                uninvested: dp.uninvested.max(-price + dp.invested),
                cooldown: dp.uninvested,
            };
        }
        dp.uninvested
    }
}
```

From there, we can see that we can further simplify the implementation by a functional-style `fold` instead of the imperative for loop:

```
#[derive(Default, Clone)]
struct Profit {
    invested: i32,
    uninvested: i32,
    cooldown: i32,
}

impl Solution {
    pub fn max_profit(prices: Vec<i32>) -> i32 {
        prices.into_iter().rev().fold(Profit::default(), |dp, price| Profit {
            invested: dp.invested.max(price + dp.cooldown),
            uninvested: dp.uninvested.max(-price + dp.invested),
            cooldown: dp.uninvested,
        }).uninvested
    }
}
```