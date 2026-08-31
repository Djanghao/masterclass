# PostgreSQL: Find Customers Not in Orders

**Author:** d_sushkov
**Votes:** 7
**Link:** [https://leetcode.com/problems/customers-who-never-order/solutions/5565630/](https://leetcode.com/problems/customers-who-never-order/solutions/5565630/)

---

# Intuition
You need to find the names of customers from the Customers table who are not in the Orders table.

# Approach
1. Select Statement: Choose the name column from the Customers table.
2. Alias: Rename the output column to Customers for clarity.
3. Subquery: Use a subquery to get the list of customer IDs from the Orders table.
4. Filtering: Use the `NOT IN` condition to exclude customers whose IDs are present in the list obtained from the subquery.

# Complexity
- Time complexity: $$O(m*n)$$ in the worst case, where $$m$$ is the number of rows in Customers and $$n$$ is the number of rows in Orders.

- Space complexity: $$O(n + m)$$, where: $$O(n)$$ is for storing the subquery results. $$O(m)$$ is for storing the final output.

# Code
```
-- Write your PostgreSQL query statement below
SELECT name AS "Customers"
FROM Customers
WHERE id NOT IN (
    SELECT customerId 
    FROM Orders
);
```