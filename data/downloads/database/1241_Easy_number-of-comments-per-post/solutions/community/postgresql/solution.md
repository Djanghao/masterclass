# PostgreSQL beats 99%, with detailed explanation

**Author:** maquellet
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-comments-per-post/solutions/5232946/](https://leetcode.com/problems/number-of-comments-per-post/solutions/5232946/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First select the submissions that are posts, denoted by parent_id IS NULL:
```
SELECT 
    s1.sub_id AS post_id
FROM 
    Submissions AS s1
WHERE 
    s1.parent_id IS NULL
GROUP BY 
    s1.sub_id
ORDER BY 
    s1.sub_id
```
Then add in the additional information required. 
```
    COALESCE(COUNT(DISTINCT s2.sub_id), 0) AS number_of_comments
```
And a self join in order to get the comment rows.
```
LEFT JOIN 
    Submissions AS s2 ON s1.sub_id = s2.parent_id
```
# Code
```
-- Write your PostgreSQL query statement below
SELECT 
    s1.sub_id AS post_id, 
    COALESCE(COUNT(DISTINCT s2.sub_id), 0) AS number_of_comments
FROM 
    Submissions AS s1
LEFT JOIN 
    Submissions AS s2 ON s1.sub_id = s2.parent_id
WHERE 
    s1.parent_id IS NULL
GROUP BY 
    s1.sub_id
ORDER BY 
    s1.sub_id
```