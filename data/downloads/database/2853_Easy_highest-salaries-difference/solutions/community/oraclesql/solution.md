# no subquery

**Author:** AbhiTryingAgain
**Votes:** 2
**Link:** [https://leetcode.com/problems/highest-salaries-difference/solutions/4085714/](https://leetcode.com/problems/highest-salaries-difference/solutions/4085714/)

---



# Code
```
/* Write your PL/SQL query statement below */
select abs(max(case when department='Engineering' then salary else 0 end)-max(case when department='Marketing' then salary else 0 end)) salary_difference from salaries
```