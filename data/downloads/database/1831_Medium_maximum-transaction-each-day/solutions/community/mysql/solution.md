# Fast and Simple Solution by using window func with description

**Author:** OnDecember
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-transaction-each-day/solutions/4451357/](https://leetcode.com/problems/maximum-transaction-each-day/solutions/4451357/)

---

# Problem Statement
Given a table `Transactions` with columns `transaction_id`, `day`, and `amount`, the task is to retrieve the transaction_id for each day with the highest amount.

## Intuition
The problem involves finding the transaction with the highest amount for each day.

## Approach
1. **Use of Window Function (`DENSE_RANK`):**
   - Utilize the window function `DENSE_RANK` along with the `OVER` clause to rank transactions within each day based on the amount.
   - Partition the data by `day` and order it by `amount` in descending order.
   - The resulting column, named `rnk`, will represent the dense ranking of transactions within each day based on the amount.

2. **Result Output:**
   - Select the column `transaction_id` for the final result.
   - Use a subquery (`t`) to represent the combined result set.

3. **Filtering Transactions with Highest Amount:**
   - Use the outer query to filter out rows where `rnk` is equal to 1, indicating the transaction with the highest amount for each day.

4. **Sorting Output:**
   - Order the final result by `transaction_id`.

## Complexity
- **Time complexity:**
  - The time complexity is primarily determined by the use of the window function `DENSE_RANK` and the sorting operation specified by the `ORDER BY` clause. It is generally efficient and can be considered as $$O(n \\log n)$$, where $$n$$ is the total number of rows in the `Transactions` table.

- **Space complexity:**
  - The space complexity is $$O(n)$$, where $$n$$ is the total number of rows in the `Transactions` table. This accounts for the storage of intermediate results during the calculation of the dense rank.
# Code
```
# Write your MySQL query statement below
SELECT transaction_id 
FROM (
    SELECT
        *,
        DENSE_RANK() OVER (PARTITION BY day ORDER BY amount DESC) AS rnk
    FROM Transactions
) AS t
WHERE rnk = 1
ORDER by 1;
```
![img.png](./images/0.png)
