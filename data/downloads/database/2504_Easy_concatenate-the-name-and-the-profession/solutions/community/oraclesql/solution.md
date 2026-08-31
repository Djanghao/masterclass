# Using substr function and concatenation - beats 100%

**Author:** padhyechinmay2
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/2927053/](https://leetcode.com/problems/concatenate-the-name-and-the-profession/solutions/2927053/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Used substr function to find first letter of profession and then concatenated name + ( + first letter of profession + )

# Complexity
- Time complexity:
730 ms beats 100%
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
select
    person_id,
    name || '(' || substr(profession,1,1) ||')' as name
from
    Person
order by 1 desc
```