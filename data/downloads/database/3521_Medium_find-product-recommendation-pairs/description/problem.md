# [3521. Find Product Recommendation Pairs](https://leetcode.com/problems/find-product-recommendation-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 64 | 4 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `ProductPurchases`

```

+-------------+------+
| Column Name | Type | 
+-------------+------+
| user_id     | int  |
| product_id  | int  |
| quantity    | int  |
+-------------+------+
(user_id, product_id) is the unique key for this table.
Each row represents a purchase of a product by a user in a specific quantity.

```

Table: `ProductInfo`

```

+-------------+---------+
| Column Name | Type    | 
+-------------+---------+
| product_id  | int     |
| category    | varchar |
| price       | decimal |
+-------------+---------+
product_id is the primary key for this table.
Each row assigns a category and price to a product.

```

Amazon wants to implement the **Customers who bought this also bought...** feature based on **co-purchase patterns**. Write a solution to :

	- Identify **distinct** product pairs frequently **purchased together by the same customers** (where `product1_id` 

ProductInfo table:

+------------+-------------+-------+
| product_id | category    | price |
+------------+-------------+-------+
| 101        | Electronics | 100   |
| 102        | Books       | 20    |
| 103        | Clothing    | 35    |
| 104        | Kitchen     | 50    |
| 105        | Sports      | 75    |
+------------+-------------+-------+

**Output:**

+-------------+-------------+-------------------+-------------------+----------------+
| product1_id | product2_id | product1_category | product2_category | customer_count |
+-------------+-------------+-------------------+-------------------+----------------+
| 101         | 102         | Electronics       | Books             | 3              |
| 101         | 103         | Electronics       | Clothing          | 3              |
| 102         | 104         | Books             | Kitchen           | 3              |
+-------------+-------------+-------------------+-------------------+----------------+

**Explanation:**

	- **Product pair (101, 102):**

	
		Purchased by users 1, 2, and 4 (3 customers)

		- Product 101 is in Electronics category

		- Product 102 is in Books category

	
	
	- **Product pair (101, 103):**
	
		Purchased by users 1, 3, and 4 (3 customers)

		- Product 101 is in Electronics category

		- Product 103 is in Clothing category

	
	
	- **Product pair (102, 104):**
	
		Purchased by users 2, 4, and 5 (3 customers)

		- Product 102 is in Books category

		- Product 104 is in Kitchen category

	
	

The result is ordered by customer_count in descending order. For pairs with the same customer_count, they are ordered by product1_id and then product2_id in ascending order.

---

**Links:** [Submissions](https://leetcode.com/problems/find-product-recommendation-pairs/) | [Solutions](https://leetcode.com/problems/find-product-recommendation-pairs/)
