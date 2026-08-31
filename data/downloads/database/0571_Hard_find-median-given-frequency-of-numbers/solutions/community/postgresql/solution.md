# Simple solution to 571. ||  Percentile_cont,  Generate_series

**Author:** ztt_09
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/5773377/](https://leetcode.com/problems/find-median-given-frequency-of-numbers/solutions/5773377/)

---

# Note
`percentile_cont() within group ()` could calculate a percentile based on a continuous distribution of the column.

# Code
```
select percentile_cont(0.5) within group (order by num) as median
from (select num
from numbers, generate_series(1, frequency))
```