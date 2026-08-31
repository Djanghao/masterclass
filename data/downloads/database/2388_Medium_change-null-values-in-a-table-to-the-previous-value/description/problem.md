# [2388. Change Null Values in a Table to the Previous Value](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 94 | 31 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `deloitte`

## Description

Table: `CoffeeShop`

```

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| drink       | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row in this table shows the order id and the name of the drink ordered. Some drink rows are nulls.

```

 

Write a solution to replace the `null` values of the drink with the name of the drink of the previous row that is not `null`. It is guaranteed that the drink on the first row of the table is not `null`.

Return the result table **in the same order as the input**.

The result format is shown in the following example.

 

**Example 1:**

```

Input: 
CoffeeShop table:
+----+-------------------+
| id | drink             |
+----+-------------------+
| 9  | Rum and Coke      |
| 6  | null              |
| 7  | null              |
| 3  | St Germain Spritz |
| 1  | Orange Margarita  |
| 2  | null              |
+----+-------------------+
Output: 
+----+-------------------+
| id | drink             |
+----+-------------------+
| 9  | Rum and Coke      |
| 6  | Rum and Coke      |
| 7  | Rum and Coke      |
| 3  | St Germain Spritz |
| 1  | Orange Margarita  |
| 2  | Orange Margarita  |
+----+-------------------+
Explanation: 
For ID 6, the previous value that is not null is from ID 9. We replace the null with &quot;Rum and Coke&quot;.
For ID 7, the previous value that is not null is from ID 9. We replace the null with &quot;Rum and Coke;.
For ID 2, the previous value that is not null is from ID 1. We replace the null with &quot;Orange Margarita&quot;.
Note that the rows in the output are the same as in the input.

```

---

**Links:** [Submissions](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/) | [Solutions](https://leetcode.com/problems/change-null-values-in-a-table-to-the-previous-value/)
