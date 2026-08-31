# easy way to understand

**Author:** newbie919
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/5237503/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/5237503/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. sum the salary for each group, order by salary
2. get the ID for senior, and get the budget used by senior
(select max(total) from seniorcnt)
3. get the ID for junior:
    1. if we have senior hired, the budget left would be 70000-budget used by senior
    2. if there are no senior hired, the bugget will be 70000
    (select max(total) from seniorcnt will be null, that's why we add isnull here)
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
with cte as(
    select employee_id, experience, salary, 
    sum(salary) over (partition by experience order by salary) as total
    from candidates
),
seniorcnt as(
    select * from cte
    where experience='senior' and total<=70000
),
juniorcnt as(
    select employee_id from cte
    where experience='junior'
    and total<=(select 70000-isnull(max(total),0) as budgetleft from seniorcnt)
)

select employee_id from seniorcnt
union 
select employee_id from juniorcnt
```