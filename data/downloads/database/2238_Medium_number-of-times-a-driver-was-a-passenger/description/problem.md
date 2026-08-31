# [2238. Number of Times a Driver Was a Passenger](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/)

| Category | Difficulty | Likes | Dislikes |
| :------: | :--------: | :---: | :------: |
| Database | Medium | 72 | 5 |

**Tags:** [`database`](https://leetcode.com/tag/database)

**Companies:** `amazon`

## Description

Table: `Rides`

```

+--------------+------+
| Column Name  | Type |
+--------------+------+
| ride_id      | int  |
| driver_id    | int  |
| passenger_id | int  |
+--------------+------+
ride_id is the column with unique values for this table.
Each row of this table contains the ID of the driver and the ID of the passenger that rode in ride_id.
Note that driver_id != passenger_id.

```

 

Write a solution to report the ID of each driver and the number of times they were a passenger.

Return the result table in **any order**.

The result format is in the following example.

 

**Example 1:**

```

Input: 
Rides table:
+---------+-----------+--------------+
| ride_id | driver_id | passenger_id |
+---------+-----------+--------------+
| 1       | 7         | 1            |
| 2       | 7         | 2            |
| 3       | 11        | 1            |
| 4       | 11        | 7            |
| 5       | 11        | 7            |
| 6       | 11        | 3            |
+---------+-----------+--------------+
Output: 
+-----------+-----+
| driver_id | cnt |
+-----------+-----+
| 7         | 2   |
| 11        | 0   |
+-----------+-----+
Explanation: 
There are two drivers in all the given rides: 7 and 11.
The driver with ID = 7 was a passenger two times.
The driver with ID = 11 was never a passenger.

```

---

**Links:** [Submissions](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/) | [Solutions](https://leetcode.com/problems/number-of-times-a-driver-was-a-passenger/)
