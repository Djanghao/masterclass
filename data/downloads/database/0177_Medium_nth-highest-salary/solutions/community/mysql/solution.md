# best simplest mysql solution - 177. Nth Highest Salary

**Author:** divyagoel1
**Votes:** 367
**Link:** [https://leetcode.com/problems/nth-highest-salary/solutions/1803647/](https://leetcode.com/problems/nth-highest-salary/solutions/1803647/)

---

```
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
SET N = N-1;
  RETURN (
      SELECT DISTINCT(salary) from Employee order by salary DESC
      LIMIT 1 OFFSET N
      
  );
END

#pls upvote if you find solution easy to undestand....!! Thanks..!!!
```