# Fast and easy PostgreSQL solution using window function 🐘

**Author:** palina-krukovich
**Votes:** 10
**Link:** [https://leetcode.com/problems/nth-highest-salary/solutions/4879158/](https://leetcode.com/problems/nth-highest-salary/solutions/4879158/)

---

# Intuition
To solve the problem of finding the nth highest salary, my initial thought is to use ranking. Using the window function `DENSE_RANK()` makes sense because it assigns ranks to rows without gaps. This way, even if multiple employees have the same salary, they'll be assigned the same rank, allowing to identify the nth highest salary.


# Approach
I use a subquery to select salaries from the `Employee` table and apply the `DENSE_RANK()` function to assign a rank to each salary, ordered in descending order. This ranking is done in a way that salaries are considered from highest to lowest, with duplicates being ranked the same. By filtering the ranked salaries where the rank equals the input parameter `N`, we can pinpoint the nth highest salary. Limiting the results to 1 ensures that even if multiple salaries share the nth rank, only one is returned.

# Complexity
- **Time complexity:** $$O(n\\ log(n))$$ due to the sorting operation in the `DENSE_RANK()` window function. 

- **Space complexity:** $$O(n)$$ because window function needs to compute a rank for each of the $$n$$ rows in `Employee` table. 

# Code
```PostgreSQL []
CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $
BEGIN
  RETURN QUERY (
    select a.salary
    from (select e.salary, dense_rank() over (order by e.salary desc) r from Employee e) a
    where a.r = n
    limit 1
  );
END;
$ LANGUAGE plpgsql;
```

\uD83C\uDF40 Good luck everyone \uD83C\uDF40
