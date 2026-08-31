# MySQL: Simple + SUM() + LIKE + UNION ALL

**Author:** hjiangyeahp
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-occurrences-in-text/solutions/3969331/](https://leetcode.com/problems/count-occurrences-in-text/solutions/3969331/)

---

# Intuition
1. use `SUM(CONDITION)` to count the rows that meet the condition. 
2. ` LIKE '% bull %'` means find the standalone word 'bull' with space in the front and after
3. `UNION ALL` means combine two rows/tables together. `UNION ALL` is after than `UNION`, because it does not deal with duplication. Use `UNION ALL` when we knew that there will have no duplications between tables. 

# Code
```
# Write your MySQL query statement below
SELECT 'bull' AS word, SUM(content LIKE '% bull %') AS count
FROM Files
UNION ALL
SELECT 'bear' AS word, SUM(content LIKE '% bear %') AS count
FROM Files
```