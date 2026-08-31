# Combinatorial recursion to enumerate subsets, with memoization

**Author:** bryanyee
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/6004301/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/6004301/)

---

# Intuition
Optimization problem: Find the subset of stocks that maximizes the profit, given a max budget in year 1.

# Approach
Use combinatorial recursion:
- Iterate through each stock at each recursive step, and choose to include/exclude the current stock
- When including a stock, decrement the remaining budget by the current stock price
- Return the max profit at i

Recurrence equation:
```
f(i, budget) = max(
  future[i] - present[i] + f(i-1, budget - present[i])
  f(i-1, budget)
)
```

# Complexity
- Time complexity:
  - Without memoization: O(2^n) for enumerating all combinations
  - With memoization: O(m * n) for calculating the results for budget (m) * number of stocks (n)

- Space complexity:
  - Without memoization: O(n) for the levels of the recursive call stack
  - With memoization: O(m * n) for storing the results for budget (m) * number of stocks (n)


# Code
```ruby []
def maximum_profit(present, future, budget)
  @present = present
  @future = future
  
  def helper(memo, i, budget)
    # Terminating case: processed all stocks or no remaining budget
    if i < 0 || budget < 0
      return 0
    end

    # Memoized case
    if !memo[i][budget].nil?
      return memo[i][budget]
    end

    # Recursive cases: include/exclude the current stock
    result1 = 0
    if @present[i] <= budget
      result1 = @future[i] - @present[i] + helper(memo, i - 1, budget - @present[i])
    end
    result2 = helper(memo, i - 1, budget)

    memo[i][budget] = [result1, result2].max
    return memo[i][budget]
  end

  memo = (0..@present.size).map { Array.new(budget+1) }
  return helper(memo, @present.size - 1, budget)
end
```