# [578. Get Highest Answer Rate Question](https://leetcode.com/problems/get-highest-answer-rate-question/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 135 | 920 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `facebook`

## Description

Table: `SurveyLog`

```

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| action      | ENUM |
| question_id | int  |
| answer_id   | int  |
| q_num       | int  |
| timestamp   | int  |
+-------------+------+
This table may contain duplicate rows.
action is an ENUM (category) of the type: &quot;show&quot;, &quot;answer&quot;, or &quot;skip&quot;.
Each row of this table indicates the user with ID = id has taken an action with the question question_id at time timestamp.
If the action taken by the user is &quot;answer&quot;, answer_id will contain the id of that answer, otherwise, it will be null.
q_num is the numeral order of the question in the current session.

```

 

The **answer rate** for a question is the number of times a user answered the question by the number of times a user showed the question.

Write a solution to report the question that has the highest **answer rate**. If multiple questions have the same maximum **answer rate**, report the question with the smallest `question_id`.

The result format is in the following example.

 

**Example 1:**

```

Input: 
SurveyLog table:
+----+--------+-------------+-----------+-------+-----------+
| id | action | question_id | answer_id | q_num | timestamp |
+----+--------+-------------+-----------+-------+-----------+
| 5  | show   | 285         | null      | 1     | 123       |
| 5  | answer | 285         | 124124    | 1     | 124       |
| 5  | show   | 369         | null      | 2     | 125       |
| 5  | skip   | 369         | null      | 2     | 126       |
+----+--------+-------------+-----------+-------+-----------+
Output: 
+------------+
| survey_log |
+------------+
| 285        |
+------------+
Explanation: 
Question 285 was showed 1 time and answered 1 time. The answer rate of question 285 is 1.0
Question 369 was showed 1 time and was not answered. The answer rate of question 369 is 0.0
Question 285 has the highest answer rate.
```

---

**Links:** [Submissions](https://leetcode.com/problems/get-highest-answer-rate-question/) | [Solutions](https://leetcode.com/problems/get-highest-answer-rate-question/)
