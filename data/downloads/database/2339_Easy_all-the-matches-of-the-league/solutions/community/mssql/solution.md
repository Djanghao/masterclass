# Cross Join Solution

**Author:** fiza_faiz
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-the-matches-of-the-league/solutions/3125467/](https://leetcode.com/problems/all-the-matches-of-the-league/solutions/3125467/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Cross Join
# Approach
<!-- Describe your approach to solving the problem. --> Cross Join

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ --> 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ --> 

# Code
```
/* Write your T-SQL query statement below */
SELECT T1.team_name AS home_team, T2.team_name AS away_team
FROM Teams T1, Teams T2
WHERE T1.team_name != T2.team_name
```