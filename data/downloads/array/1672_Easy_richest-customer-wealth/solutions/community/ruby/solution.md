# Ruby shorthand one-liner

**Author:** riley13ross
**Votes:** 11
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/3062081/](https://leetcode.com/problems/richest-customer-wealth/solutions/3062081/)

---

# Intuition
This grid is essentially an array of rows, so by mapping through the rows of the grid we get to analyze each customer individually in each iteration of the map. Find the sum of each of those and return it, and then return the max value of the array for wealth of the wealthiest customer.

# Approach
Map through the accounts returning the sum of each of the customers, and then return the `max` of the array.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
# @param {Integer[][]} accounts
# @return {Integer}
def maximum_wealth(accounts)
    accounts.map(&:sum).max
end
```