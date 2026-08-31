# [1398. Customers Who Bought Products A and B but Not C](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 324 | 18 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `facebook`

## Description

Table: `Customers`

```

+---------------------+---------+
| Column Name         | Type    |
+---------------------+---------+
| customer_id         | int     |
| customer_name       | varchar |
+---------------------+---------+
customer_id is the column with unique values for this table.
customer_name is the name of the customer.
```

 

Table: `Orders`

```

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| order_id      | int     |
| customer_id   | int     |
| product_name  | varchar |
+---------------+---------+
order_id is the column with unique values for this table.
customer_id is the id of the customer who bought the product &quot;product_name&quot;.

```

 

Write a solution to report the customer_id and customer_name of customers who bought products **"A"**, **"B"** but did not buy the product **"C"** since we want to recommend them to purchase this product.

Return the result table **ordered** by `customer_id`.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Customers table:
+-------------+---------------+
| customer_id | customer_name |
+-------------+---------------+
| 1           | Daniel        |
| 2           | Diana         |
| 3           | Elizabeth     |
| 4           | Jhon          |
+-------------+---------------+
Orders table:
+------------+--------------+---------------+
| order_id   | customer_id  | product_name  |
+------------+--------------+---------------+
| 10         |     1        |     A         |
| 20         |     1        |     B         |
| 30         |     1        |     D         |
| 40         |     1        |     C         |
| 50         |     2        |     A         |
| 60         |     3        |     A         |
| 70         |     3        |     B         |
| 80         |     3        |     D         |
| 90         |     4        |     C         |
+------------+--------------+---------------+
Output: 
+-------------+---------------+
| customer_id | customer_name |
+-------------+---------------+
| 3           | Elizabeth     |
+-------------+---------------+
Explanation: Only the customer_id with id 3 bought the product A and B but not the product C.

```

---

**Links:** [Submissions](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/) | [Solutions](https://leetcode.com/problems/customers-who-bought-products-a-and-b-but-not-c/)
