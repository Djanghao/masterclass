# 🔥Easy Solution in PosgreSQL || Detailed explanation🔥

**Author:** CppExplorer
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-customer-referee/solutions/4980845/](https://leetcode.com/problems/find-customer-referee/solutions/4980845/)

---

# Explanation
`SELECT name`: This part selects the name column from the `Customer` table.

`FROM Customer`: Specifies the table from which to retrieve the data, which is the Customer table.

`WHERE COALESCE(referee_id, 0) <> 2`: This is the filtering condition. It filters out the customers who are not referred by customer with ID 2.

- `COALESCE(referee_id, 0)` returns `referee_id` if it's not NULL, otherwise, it returns 0. This ensures that customers who don't have a referee are still considered.

- `<> 2` checks if the `referee_id` is not equal to 2. This condition ensures that only customers who are not referred by customer with ID 2 are included in the result.

---


# Code
```
-- Write your PostgreSQL query statement below
SELECT name
FROM Customer
WHERE COALESCE(referee_id, 0) <> 2;
```

---


![meme.jpg](./images/0.jpeg)
