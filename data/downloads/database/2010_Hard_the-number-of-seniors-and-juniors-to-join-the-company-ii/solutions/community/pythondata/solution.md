# Solution with windows func

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/6096121/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company-ii/solutions/6096121/)

---

# Code on Python
```python
import pandas as pd
import numpy as np

def number_of_joiners(candidates: pd.DataFrame) -> pd.DataFrame:
    budget = 70_000
    seniors = candidates.loc[candidates["experience"] == "Senior"].sort_values(by="salary", ascending=True)
    seniors = seniors.assign(cum_salary = seniors["salary"].transform("cumsum")).query(f"cum_salary <= {budget}")
    left_budget = budget - ((np.nan_to_num(seniors["cum_salary"].max())) if not seniors.empty else 0)
    juniors = candidates.loc[candidates["experience"] == "Junior"].sort_values(by="salary", ascending=True)
    juniors = juniors.assign(cum_salary = juniors["salary"].transform("cumsum")).query(f"cum_salary <= {left_budget}")
    result = pd.concat([
        seniors[["employee_id"]],
        juniors[["employee_id"]]
    ])
    return result
```
---
# Code on PostgreSQL
```postgresql []
-- Write your PostgreSQL query statement below
WITH windows AS (
    SELECT
        *,
        SUM(salary) OVER(PARTITION BY experience ORDER BY salary ASC) AS cum_salary
    FROM Candidates
    WHERE experience = 'Senior' OR experience = 'Junior'
),
filtering AS (
    SELECT
        main.*,
        (
            CASE
                WHEN main.experience = 'Senior' THEN main.cum_salary
                ELSE (70000 - COALESCE(sub.cum_salary, 0)) - main.cum_salary
            END
        ) AS second_cum
    FROM windows AS main

    LEFT JOIN windows AS sub
        ON sub.cum_salary = (SELECT MAX(cum_salary) FROM windows WHERE experience = 'Senior' AND cum_salary <= 70000)

    WHERE main.cum_salary <= 70000
)
SELECT DISTINCT
    employee_id
FROM filtering
WHERE second_cum >= 0
```