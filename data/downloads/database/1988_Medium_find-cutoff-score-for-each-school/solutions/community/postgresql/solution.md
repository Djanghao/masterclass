# Cross join

**Author:** Y26K
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/5876668/](https://leetcode.com/problems/find-cutoff-score-for-each-school/solutions/5876668/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
-- Write your PostgreSQL query statement below


Select a.school_id, coalesce(min(case when b.student_count <= a.capacity then score end),-1) as score
from Schools a 
cross join  Exam b
group by 1
```