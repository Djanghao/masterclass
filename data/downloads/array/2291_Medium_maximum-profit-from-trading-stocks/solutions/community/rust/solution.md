# 0/1 Knapsack solution using Rust and Dynamic Programming

**Author:** sh11066
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3576717/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3576717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is similar to a 0/1 knapsack problem, where our constraint is the budget and we want to maximize profit (future value - present value). We must decide whether to buy a stock or not, which impacts our budget value.

# Approach
<!-- Describe your approach to solving the problem. -->
We can approach this by building out a 2D table. One dimension represents all numbers from 0 -> budget value, and the 2nd dimension represents the stock we are processing. One more row is added the 2nd dimension to ensure we do not go out of bounds for simplicity in our loop (hence why we use `present.len() + 1`).

After initializing our table, we loop over the stocks as well as from 0 to budget value (inclusive). Our first row will be all 0, since when we process no stocks, we will never have any profit.

For the following rows we have two cases; when our remaining budget is negative and when our remaining budget is 0 or greater. If our remaining budget is negative, we cannot buy this stock and our max profit will be the same as the previous value (we are forced not to buy). When our remaining budget is greater than 0, we compare the buy and no-buy cases. Our max profit will be the maximum of the previous row with no change in budget (no-buy case) compared to the current stock profit (future - present) + value of the previous row at the remaining budget value - purchase price (since our remaining budget decreases in the buy case).

Our overall maximum profit will occur in the last cell of our table `table[present.len()][budget]`. The reason for this is because the columns in the last row will represent the maximum value we can obtain if we were to start with the corresponding budget value. Since we always start with `budget`, which is the length of the dimension, this cell will represent the max value obtained by this budget amount.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(b*n)$$ where b is the value of budget and n is the number of stocks.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(b*n)$$ where b is the value of budget and n is the number of stocks.

# Code
```
impl Solution {
    pub fn maximum_profit(present: Vec<i32>, future: Vec<i32>, budget: i32) -> i32 {
        let mut table: Vec<Vec<i32>> = vec![vec![0; budget as usize + 1]; present.len() + 1];

        for i in 0..present.len() + 1 {
            for j in 0..budget as usize + 1 {
                if i == 0 {
                    table[i][j] = 0;
                }
                else if j as i32 - present[i - 1] < 0 {
                    table[i][j] = table[i - 1][j];
                }
                else {
                    table[i][j] = std::cmp::max(table[i - 1][j], future[i - 1] - present[i - 1] + table[i - 1][j - (present[i - 1] as usize)]);
                }
            }
        }
        return table[present.len()][budget as usize];
    }
}
```