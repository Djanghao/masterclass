# [2324. Product Sales Analysis IV](https://leetcode.com/problems/product-sales-analysis-iv/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 59 | 1 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `Sales`

```

+-------------+-------+
| Column Name | Type  |
+-------------+-------+
| sale_id     | int   |
| product_id  | int   |
| user_id     | int   |
| quantity    | int   |
+-------------+-------+
sale_id contains unique values.
product_id is a foreign key (reference column) to Product table.
Each row of this table shows the ID of the product and the quantity purchased by a user.

```

 

Table: `Product`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| product_id  | int  |
| price       | int  |
+-------------+------+
product_id contains unique values.
Each row of this table indicates the price of each product.

```

 

Write a solution that reports for each user the product id on which the user spent the most money. In case the same user spent the most money on two or more products, report all of them.

Return the resulting table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Sales table:
+---------+------------+---------+----------+
| sale_id | product_id | user_id | quantity |
+---------+------------+---------+----------+
| 1       | 1          | 101     | 10       |
| 2       | 3          | 101     | 7        |
| 3       | 1          | 102     | 9        |
| 4       | 2          | 102     | 6        |
| 5       | 3          | 102     | 10       |
| 6       | 1          | 102     | 6        |
+---------+------------+---------+----------+
Product table:
+------------+-------+
| product_id | price |
+------------+-------+
| 1          | 10    |
| 2          | 25    |
| 3          | 15    |
+------------+-------+
Output: 
+---------+------------+
| user_id | product_id |
+---------+------------+
| 101     | 3          |
| 102     | 1          |
| 102     | 2          |
| 102     | 3          |
+---------+------------+ 
Explanation: 
User 101:
    - Spent 10 * 10 = 100 on product 1.
    - Spent 7 * 15 = 105 on product 3.
User 101 spent the most money on product 3.
User 102:
    - Spent (9 + 6) * 10 = 150 on product 1.
    - Spent 6 * 25 = 150 on product 2.
    - Spent 10 * 15 = 150 on product 3.
User 102 spent the most money on products 1, 2, and 3.

```

---

**Links:** [Submissions](https://leetcode.com/problems/product-sales-analysis-iv/) | [Solutions](https://leetcode.com/problems/product-sales-analysis-iv/)
