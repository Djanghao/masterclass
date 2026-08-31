# MS SQL

**Author:** Para34
**Votes:** 7
**Link:** [https://leetcode.com/problems/low-quality-problems/solutions/1499691/](https://leetcode.com/problems/low-quality-problems/solutions/1499691/)

---

select problem_id
    from problems
where likes/cast((likes+dislikes) as float) < 0.6
    order by problem_id
