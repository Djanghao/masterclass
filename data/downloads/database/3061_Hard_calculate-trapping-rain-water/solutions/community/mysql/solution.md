# window() function + least() | detail comment explained

**Author:** zhangmanyuzmy
**Votes:** 10
**Link:** [https://leetcode.com/problems/calculate-trapping-rain-water/solutions/4806856/](https://leetcode.com/problems/calculate-trapping-rain-water/solutions/4806856/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is like DP rain trapping water, so the key is to create a DP table.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Find the `left highest bar` and `right highest bar` for each bar
2. The `SMALLEST` of these two determines the amount of water trapped.
3. smallest(left highest bar, right highest bar) - current bar height = water trapped in current bar

\u203C\uFE0F Function used to find the smallest left/ right highest bar:
`MIN()` operates on a column and returns the minimum value from that column.
`LEAST()` operates on a list of expressions and returns the smallest value among them.
So, we use LEAST() in this case.


# Code
```
WITH CTE AS (
    SELECT *,
        MAX(height) OVER(ORDER BY id ASC) AS left_highest_bar,
        MAX(height) OVER(ORDER BY id DESC) AS right_highest_bar
    FROM Heights
)
SELECT SUM(LEAST(left_highest_bar, right_highest_bar) - height) AS total_trapped_water -- MIN() get smallest in a column, LEAST() get smallest among X values put in the function
FROM CTE
```