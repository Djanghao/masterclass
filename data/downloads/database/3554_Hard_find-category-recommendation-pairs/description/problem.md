# [3554. Find Category Recommendation Pairs](https://leetcode.com/problems/find-category-recommendation-pairs/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 26 | 4 |

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
(user_id, product_id) is the unique identifier for this table. 
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
product_id is the unique identifier for this table.
Each row assigns a category and price to a product.

```

Amazon wants to understand shopping patterns across product categories. Write a solution to:

	- Find all **category pairs** (where `category1` 

ProductInfo table:

+------------+-------------+-------+
| product_id | category    | price |
+------------+-------------+-------+
| 101        | Electronics | 100   |
| 102        | Books       | 20    |
| 103        | Books       | 35    |
| 201        | Clothing    | 45    |
| 202        | Clothing    | 60    |
| 301        | Sports      | 75    |
| 401        | Kitchen     | 50    |
+------------+-------------+-------+

**Output:**

+-------------+-------------+----------------+
| category1   | category2   | customer_count |
+-------------+-------------+----------------+
| Books       | Clothing    | 3              |
| Books       | Electronics | 3              |
| Clothing    | Electronics | 3              |
| Electronics | Sports      | 3              |
+-------------+-------------+----------------+

**Explanation:**

	- **Books-Clothing**:

	
		User 1 purchased products from Books (102) and Clothing (201)

		- User 2 purchased products from Books (102, 103) and Clothing (201)

		- User 5 purchased products from Books (102, 103) and Clothing (201, 202)

		- Total: 3 customers purchased from both categories

	
	
	- **Books-Electronics**:
	
		User 1 purchased products from Books (102) and Electronics (101)

		- User 2 purchased products from Books (102, 103) and Electronics (101)

		- User 3 purchased products from Books (103) and Electronics (101)

		- Total: 3 customers purchased from both categories

	
	
	- **Clothing-Electronics**:
	
		User 1 purchased products from Clothing (201) and Electronics (101)

		- User 2 purchased products from Clothing (201) and Electronics (101)

		- User 4 purchased products from Clothing (201) and Electronics (101)

		- Total: 3 customers purchased from both categories

	
	
	- **Electronics-Sports**:
	
		User 1 purchased products from Electronics (101) and Sports (301)

		- User 3 purchased products from Electronics (101) and Sports (301)

		- User 4 purchased products from Electronics (101) and Sports (301)

		- Total: 3 customers purchased from both categories

	
	
	- Other category pairs like Clothing-Sports (only 2 customers: Users 1 and 4) and Books-Kitchen (only 1 customer: User 3) have fewer than 3 shared customers and are not included in the result.

The result is ordered by customer_count in descending order. Since all pairs have the same customer_count of 3, they are ordered by category1 (then category2) in ascending order.

---

**Links:** [Submissions](https://leetcode.com/problems/find-category-recommendation-pairs/) | [Solutions](https://leetcode.com/problems/find-category-recommendation-pairs/)
