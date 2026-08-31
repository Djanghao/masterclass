# Very Easy MS SQL Server Solution using CTEs + CROSS JOIN

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/form-a-chemical-bond/solutions/4032892/](https://leetcode.com/problems/form-a-chemical-bond/solutions/4032892/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Make separate CTEs for type = 'Metal' and type = 'Nonmetal', and in order to form a bond we need all possible combinations of Metal - Nonmetal elements.
Considering CTE_METAL has "M" rows and CTE_NON_METAL has "N" rows so as per problem we need (MxN) rows as output i.e. CROSS JOIN scenario

# Code
```
WITH CTE_METAL AS (
    select symbol  as "metal" from Elements
    where type = 'Metal'
),
CTE_NON_METAL AS (
    select symbol  as "nonmetal" from Elements
    where type = 'Nonmetal'
)
select M.metal , NM.nonmetal
from CTE_METAL M CROSS JOIN CTE_NON_METAL NM
```