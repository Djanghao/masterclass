# [2072. The Winner University](https://leetcode.com/problems/the-winner-university/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Easy | 71 | 3 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `walmart-labs`

## Description

Table: `NewYork`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| student_id  | int  |
| score       | int  |
+-------------+------+
In SQL, student_id is the primary key for this table.
Each row contains information about the score of one student from New York University in an exam.

```

 

Table: `California`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| student_id  | int  |
| score       | int  |
+-------------+------+
In SQL, student_id is the primary key for this table.
Each row contains information about the score of one student from California University in an exam.

```

 

There is a competition between New York University and California University. The competition is held between the same number of students from both universities. The university that has more **excellent students** wins the competition. If the two universities have the same number of **excellent students**, the competition ends in a draw.

An **excellent student** is a student that scored `90%` or more in the exam.

Return:

	- **"New York University"** if New York University wins the competition.

	- **"California University"** if California University wins the competition.

	- **"No Winner"** if the competition ends in a draw.

The result format is in the following example.

 

**Example 1:**

```

Input: 
NewYork table:
+------------+-------+
| student_id | score |
+------------+-------+
| 1          | 90    |
| 2          | 87    |
+------------+-------+
California table:
+------------+-------+
| student_id | score |
+------------+-------+
| 2          | 89    |
| 3          | 88    |
+------------+-------+
Output: 
+---------------------+
| winner              |
+---------------------+
| New York University |
+---------------------+
Explanation:
New York University has 1 excellent student, and California University has 0 excellent students.

```

**Example 2:**

```

Input: 
NewYork table:
+------------+-------+
| student_id | score |
+------------+-------+
| 1          | 89    |
| 2          | 88    |
+------------+-------+
California table:
+------------+-------+
| student_id | score |
+------------+-------+
| 2          | 90    |
| 3          | 87    |
+------------+-------+
Output: 
+-----------------------+
| winner                |
+-----------------------+
| California University |
+-----------------------+
Explanation:
New York University has 0 excellent students, and California University has 1 excellent student.

```

**Example 3:**

```

Input: 
NewYork table:
+------------+-------+
| student_id | score |
+------------+-------+
| 1          | 89    |
| 2          | 90    |
+------------+-------+
California table:
+------------+-------+
| student_id | score |
+------------+-------+
| 2          | 87    |
| 3          | 99    |
+------------+-------+
Output: 
+-----------+
| winner    |
+-----------+
| No Winner |
+-----------+
Explanation:
Both New York University and California University have 1 excellent student.

```

---

**Links:** [Submissions](https://leetcode.com/problems/the-winner-university/) | [Solutions](https://leetcode.com/problems/the-winner-university/)
