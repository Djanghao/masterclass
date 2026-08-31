# Intuitive simple solution for the given and follow-up question

**Author:** chand_karishma
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-line/solutions/4242092/](https://leetcode.com/problems/shortest-distance-in-a-line/solutions/4242092/)

---

# Intuition
## Solution 1 (Follow-up question)
As the table is sorted in ascending order, we can get the difference between the consecutive rows using LAG().

## Solution 2
Join the table with itself with the condition of calculating the distance between a point and its right hand side points.


# Approach
## Solution 1 (Follow-up question)
1. Find the difference between consecutive rows using LAG()
2. Then, find the minimum difference which is the shortest distance as well.

## Solution 2
1. Self join the point table with the condition T1.X < T2.X (to check only the distance between a point and the other points lying right to it). We are ignoring the left side points to avoid calculating repetitive distances.
2. Then, find the minimum difference between T2.X and T1.X which is the shortest distance as well.


# Code 1 (Follow-up question)
```
# Write your MySQL query statement below
SELECT MIN(T1.LAGGED_DIFF) AS SHORTEST
FROM
(SELECT X-LAG(X, 1) OVER(ORDER BY X) AS LAGGED_DIFF
FROM POINT) T1;
```

# Code 2
```
# Write your MySQL query statement below
SELECT MIN(T2.X - T1.X) AS SHORTEST
FROM POINT T1
INNER JOIN
POINT T2
ON T1.X < T2.X;
```