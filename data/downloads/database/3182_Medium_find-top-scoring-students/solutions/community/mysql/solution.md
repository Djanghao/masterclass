# MySQL:No CTE, no Window function, no Union

**Author:** BeansData
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-top-scoring-students/solutions/5551966/](https://leetcode.com/problems/find-top-scoring-students/solutions/5551966/)

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
select a.student_id
from students a
left join courses b on a.major = b.major
left join enrollments c on a.student_id = c.student_id and b.course_id = c.course_id
group by 1
having count(distinct b.course_id) = count(distinct c.course_id)
and max(c.grade) = 'A'
order by 1
```