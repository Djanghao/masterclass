# EASY SOLUTION WITH COUNT(DISTINCT) | 85% beats

**Author:** ShakhDev
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-rich-customers/solutions/3074078/](https://leetcode.com/problems/the-number-of-rich-customers/solutions/3074078/)

---


# Code
```
/* Write your T-SQL query statement below */
SELECT COUNT(DISTINCT customer_id) AS rich_count
FROM Store
WHERE amount>500
```