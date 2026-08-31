# 3 methods to solve the same question

**Author:** HardikaGanatra24
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5131394/](https://leetcode.com/problems/find-candidates-for-data-scientist-position/solutions/5131394/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This method handles duplicate records as well.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
SELECT candidate_id
FROM Candidates
WHERE skill IN ('Python', 'Tableau', 'PostgreSQL')
GROUP BY candidate_id
HAVING COUNT(DISTINCT skill) = 3
ORDER BY candidate_id;

```

If no duplicates are present

```
SELECT candidate_id
FROM Candidates
GROUP BY candidate_id
HAVING SUM(CASE WHEN skill = 'Python' THEN 1
                WHEN skill = 'Tableau' THEN 2
                WHEN skill = 'PostgreSQL' THEN 3
                ELSE 0 END) = 6
ORDER BY candidate_id;

```


Most efficient way to solve this


```
SELECT candidate_id
FROM Candidates
GROUP BY candidate_id
HAVING SUM(CASE WHEN skill = 'Python' THEN 1 ELSE 0 END) = 1
   AND SUM(CASE WHEN skill = 'Tableau' THEN 1 ELSE 0 END) = 1
   AND SUM(CASE WHEN skill = 'PostgreSQL' THEN 1 ELSE 0 END) = 1
ORDER BY candidate_id;



```