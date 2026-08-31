# [1757. Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 3204 | 128 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `google`, `amazon`, `microsoft`, `facebook`, `bloomberg`

## Description

Table: `Products`

```

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| low_fats    | enum    |
| recyclable  | enum    |
+-------------+---------+
product_id is the primary key (column with unique values) for this table.
low_fats is an ENUM (category) of type (&#39;Y&#39;, &#39;N&#39;) where &#39;Y&#39; means this product is low fat and &#39;N&#39; means it is not.
recyclable is an ENUM (category) of types (&#39;Y&#39;, &#39;N&#39;) where &#39;Y&#39; means this product is recyclable and &#39;N&#39; means it is not.
```

 

Write a solution to find the ids of products that are both low fat and recyclable.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Products table:
+-------------+----------+------------+
| product_id  | low_fats | recyclable |
+-------------+----------+------------+
| 0           | Y        | N          |
| 1           | Y        | Y          |
| 2           | N        | Y          |
| 3           | Y        | Y          |
| 4           | N        | N          |
+-------------+----------+------------+
Output: 
+-------------+
| product_id  |
+-------------+
| 1           |
| 3           |
+-------------+
Explanation: Only products 1 and 3 are both low fat and recyclable.

```

---

**Links:** [Submissions](https://leetcode.com/problems/recyclable-and-low-fat-products/) | [Solutions](https://leetcode.com/problems/recyclable-and-low-fat-products/)
