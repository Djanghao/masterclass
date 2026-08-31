# My accepted solution

**Author:** AlexWilsh
**Votes:** 10
**Link:** [https://leetcode.com/problems/nth-highest-salary/solutions/370799/](https://leetcode.com/problems/nth-highest-salary/solutions/370799/)

---

My first solution was with CTE query, but it gave me error - I guess it's not supported on LeetCode.
So, I modified it to subquery and that gave me 1807 ms since I used GROUP BY. After adding additional subquery I was able to speed up it to 686ms and that was faster than ~79%.

Here is the solution:

```
CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (
        /* Write your T-SQL query statement below. */
        SELECT Salary FROM 
        (
            SELECT
                row_number() OVER (ORDER BY salary DESC) AS row_num,            
                emp.salary
            FROM (SELECT DISTINCT Salary FROM Employee) emp
        ) result
        WHERE row_num = @N        
    );
END
```