# Oracle | Case | Rank | Count | Partition By

**Author:** kunalc_14
**Votes:** 1
**Link:** [https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5632273/](https://leetcode.com/problems/compute-the-rank-as-a-percentage/solutions/5632273/)

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
/* Write your PL/SQL query statement below */
select
    student_id,
    department_id, 
    (case
        when (count(student_id) over (partition by department_id) - 1) = 0 then 0
        else round((rank() over (partition by department_id order by mark desc) - 1)*100/ (count(student_id) over (partition by department_id) - 1),2)
    end) as percentage
from
    students

```