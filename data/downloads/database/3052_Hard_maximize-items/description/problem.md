# [3052. Maximize Items](https://leetcode.com/problems/maximize-items/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Hard | 7 | 11 |

**Tags:** [`database`](https://leetcode.com/tag/database)


## Description

Table: `Inventory`

```

+----------------+---------+ 
| Column Name    | Type    | 
+----------------+---------+ 
| item_id        | int     | 
| item_type      | varchar |
| item_category  | varchar |
| square_footage | decimal |
+----------------+---------+
item_id is the column of unique values for this table.
Each row includes item id, item type, item category and sqaure footage.

```

Leetcode warehouse wants to maximize the number of items it can stock in a `500,000` square feet warehouse. It wants to stock as many **prime** items as possible, and afterwards use the **remaining** square footage to stock the most number of **non-prime** items.

Write a solution to find the number of **prime** and **non-prime** items that can be **stored** in the `500,000` square feet warehouse. Output the item type with `prime_eligible` followed by `not_prime` and the maximum number of items that can be stocked.

**Note:**

	- Item **count** must be a whole number (integer).

	- If the count for the **not_prime** category is `0`, you should **output** `0` for that particular category.

Return *the result table ordered by item count in **descending order***.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Inventory table:
+---------+----------------+---------------+----------------+
| item_id | item_type      | item_category | square_footage | 
+---------+----------------+---------------+----------------+
| 1374    | prime_eligible | Watches       | 68.00          | 
| 4245    | not_prime      | Art           | 26.40          | 
| 5743    | prime_eligible | Software      | 325.00         | 
| 8543    | not_prime      | Clothing      | 64.50          |  
| 2556    | not_prime      | Shoes         | 15.00          |
| 2452    | prime_eligible | Scientific    | 85.00          |
| 3255    | not_prime      | Furniture     | 22.60          | 
| 1672    | prime_eligible | Beauty        | 8.50           |  
| 4256    | prime_eligible | Furniture     | 55.50          |
| 6325    | prime_eligible | Food          | 13.20          | 
+---------+----------------+---------------+----------------+
Output: 
+----------------+-------------+
| item_type      | item_count  | 
+----------------+-------------+
| prime_eligible | 5400        | 
| not_prime      | 8           | 
+----------------+-------------+
Explanation: 
- The prime-eligible category comprises a total of 6 items, amounting to a combined square footage of 555.20 (68 + 325 + 85 + 8.50 + 55.50 + 13.20). It is possible to store 900 combinations of these 6 items, totaling 5400 items and occupying 499,680 square footage.
- In the not_prime category, there are a total of 4 items with a combined square footage of 128.50. After deducting the storage used by prime-eligible items (500,000 - 499,680 = 320), there is room for 2 combinations of non-prime items, accommodating a total of 8 non-prime items within the available 320 square footage.
Output table is ordered by item count in descending order.
```

---

**Links:** [Submissions](https://leetcode.com/problems/maximize-items/) | [Solutions](https://leetcode.com/problems/maximize-items/)
