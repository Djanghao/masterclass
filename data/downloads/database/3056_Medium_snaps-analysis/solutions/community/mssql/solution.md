# Using SUM & IIF

**Author:** harsha54443
**Votes:** 0
**Link:** [https://leetcode.com/problems/snaps-analysis/solutions/5573819/](https://leetcode.com/problems/snaps-analysis/solutions/5573819/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/* Write your T-SQL query statement below */


SELECT age_bucket,
ROUND((SUM(IIF(activity_type = 'send',time_spent,0))/SUM(time_spent)) *100.0,2) AS send_perc ,
ROUND((SUM(IIF(activity_type = 'open',time_spent,0))/SUM(time_spent)) *100.0,2) AS open_perc 
FROM Activities AC
LEFT JOIN Age AG ON
AC.user_id =  AG.user_id
GROUP BY age_bucket
```