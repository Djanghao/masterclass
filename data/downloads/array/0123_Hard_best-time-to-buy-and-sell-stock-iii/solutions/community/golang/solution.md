# Go solution with thought process - Beats 100%

**Author:** lauragalbraith
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/3784346/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/3784346/)

---

# Ideas and Approach
- check max profit if we complete one transaction
    - two dynamic programming passes, to find the maximum in front of every given index, and then calculate the biggest difference between that index's value and that maximum
- AND check max profit if we complete two transactions, and then compare the two
    - second transation must take place entirely before or after the first, however, and the first might not be optimal if it's the best single transaction (i.e. can't use result from first)

- like the subarray DP problems, we could choose a spot where we split the array into front and back to choose from
    - for every potential split point (which has >=2 elements in front of it and >=2 elements behind it), find the max profit from each half
- could we store something like a 2D array of [start_idx][end_idx] that holds the maximum value in front of start_idx that comes before or at end_idx? that would reduce our calculation time

First implementation in $$O(n^2)$$ time complexity:
```
// my 2D array takes n^2 time to fill so is O(n^2) and I'm pretty sure I can do it in O(n)
    // used like max_in_range[start_idx][end_idx]
    // store the maximum value exclusively in front start_idx, inclusive range ending at end_idx
    max_in_range := make([][]int, len(prices))
    for i := range prices {
        max_in_range[i] = make([]int, len(prices))  // contents will default to 0
    }

    // calculate this memoization
    // any range length (since inital array is 0, indicating no good options)
    for range_len := 1; range_len < len(prices); range_len++ {
        for start_idx := 0; start_idx+range_len < len(prices); start_idx++ {
            // assume best answer is the new element included into the range starting here
            max_in_range[start_idx][start_idx+range_len] = prices[start_idx+range_len]
            // check if our previous range still beats it
            if max_in_range[start_idx][start_idx+range_len-1] > prices[start_idx+range_len] {
                max_in_range[start_idx][start_idx+range_len] = max_in_range[start_idx][start_idx+range_len-1]
            }
        }
    }
    
    // find the max profit if just one transaction is made
    max_profit := 0
    for start_idx := 0; start_idx < len(prices); start_idx++ {
        for end_idx := start_idx+1; end_idx < len(prices); end_idx++ {
            profit_here := max_in_range[start_idx][end_idx] - prices[start_idx]
            if profit_here > max_profit {
                max_profit = profit_here
            }
        }
    }
```

# Improved Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$


# Test Cases Considered (beyond given examples)
- input array with only 1 element


# Code
```
func maxProfit(prices []int) int {
    // Time: O(n)
    // Space: O(n)
    // calculate the maximum value in front of every index
    max_ahead := make([]int, len(prices)) // every cell defaults to 0
    max_seen := 0
    for i := len(prices)-1; i >= 0; i-- {
        max_ahead[i] = max_seen
        if prices[i] > max_seen {
            max_seen = prices[i]
        }
    }

    // calculate the max profit if we only perform a single transaction
    // in the meantime, saving what the maximum profit is starting at any point in the array
    max_profit_of_array_starting_at := make([]int, len(prices))  // all cells default to 0
    for start_idx := len(prices)-2; start_idx >= 0; start_idx-- {
        max_profit_of_array_starting_at[start_idx] = max_profit_of_array_starting_at[start_idx+1]
        if max_ahead[start_idx] - prices[start_idx] > max_profit_of_array_starting_at[start_idx] {
            max_profit_of_array_starting_at[start_idx] = max_ahead[start_idx] - prices[start_idx]
        }
    }

    // calculate the max profit if we have an ever-expanding beginning transaction range
    // as part of this, remember the smallest stock price we could have bought at in the beginning transaction range
    min_behind := make([]int, len(prices))  // defaults to 0, which may not be accurate, so be careful
    min_behind[0] = prices[0] // technically not true, but we should never be examining this anyway

    // keep track of the "best beginning transaction" which will only be updated if we reveal a better profit with a new sell at the end of the range
    max_t1_profit := 0
    if len(prices) > 1 {
        max_t1_profit = prices[1] - prices[0]
    }

    max_profit_with_one_or_two_transactions := max_profit_of_array_starting_at[0]
    for t1_range_end := 1; t1_range_end < len(prices)-2; t1_range_end++ {
        // expand our previous memoization
        // : determine the minimum value behind the range end
        min_behind[t1_range_end] = min_behind[t1_range_end-1]
        if prices[t1_range_end-1] < min_behind[t1_range_end-1] {
            min_behind[t1_range_end] = prices[t1_range_end-1]
        }

        // : determine if selling at the range end results in a better transaction than what's saved
        if prices[t1_range_end] - min_behind[t1_range_end] > max_t1_profit {
            max_t1_profit = prices[t1_range_end] - min_behind[t1_range_end]
        }

        // determine the best ending transaction
        max_t2_profit := max_profit_of_array_starting_at[t1_range_end+1]

        // update answer if this beats it
        if max_t1_profit + max_t2_profit > max_profit_with_one_or_two_transactions {
            max_profit_with_one_or_two_transactions = max_t1_profit + max_t2_profit
        }
    }

    return max_profit_with_one_or_two_transactions
}
```