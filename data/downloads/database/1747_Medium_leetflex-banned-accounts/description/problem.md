# [1747. Leetflex Banned Accounts](https://leetcode.com/problems/leetflex-banned-accounts/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 199 | 17 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `audible`

## Description

Table: `LogInfo`

```

+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| account_id  | int      |
| ip_address  | int      |
| login       | datetime |
| logout      | datetime |
+-------------+----------+
This table may contain duplicate rows.
The table contains information about the login and logout dates of Leetflex accounts. It also contains the IP address from which the account was logged in and out.
It is guaranteed that the logout time is after the login time.

```

 

Write a solution to find the `account_id` of the accounts that should be banned from Leetflex. An account should be banned if it was logged in at some moment from two different IP addresses.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
LogInfo table:
+------------+------------+---------------------+---------------------+
| account_id | ip_address | login               | logout              |
+------------+------------+---------------------+---------------------+
| 1          | 1          | 2021-02-01 09:00:00 | 2021-02-01 09:30:00 |
| 1          | 2          | 2021-02-01 08:00:00 | 2021-02-01 11:30:00 |
| 2          | 6          | 2021-02-01 20:30:00 | 2021-02-01 22:00:00 |
| 2          | 7          | 2021-02-02 20:30:00 | 2021-02-02 22:00:00 |
| 3          | 9          | 2021-02-01 16:00:00 | 2021-02-01 16:59:59 |
| 3          | 13         | 2021-02-01 17:00:00 | 2021-02-01 17:59:59 |
| 4          | 10         | 2021-02-01 16:00:00 | 2021-02-01 17:00:00 |
| 4          | 11         | 2021-02-01 17:00:00 | 2021-02-01 17:59:59 |
+------------+------------+---------------------+---------------------+
Output: 
+------------+
| account_id |
+------------+
| 1          |
| 4          |
+------------+
Explanation: 
Account ID 1 --&gt; The account was active from &quot;2021-02-01 09:00:00&quot; to &quot;2021-02-01 09:30:00&quot; with two different IP addresses (1 and 2). It should be banned.
Account ID 2 --&gt; The account was active from two different addresses (6, 7) but in two different times.
Account ID 3 --&gt; The account was active from two different addresses (9, 13) on the same day but they do not intersect at any moment.
Account ID 4 --&gt; The account was active from &quot;2021-02-01 17:00:00&quot; to &quot;2021-02-01 17:00:00&quot; with two different IP addresses (10 and 11). It should be banned.

```

---

**Links:** [Submissions](https://leetcode.com/problems/leetflex-banned-accounts/) | [Solutions](https://leetcode.com/problems/leetflex-banned-accounts/)
