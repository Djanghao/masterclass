# pandas || xor, with explanation || T/S: 98% / 97%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/employees-with-missing-information/solutions/4208867/](https://leetcode.com/problems/employees-with-missing-information/solutions/4208867/)

---

Here's the plan:

- We convert the two series `employees.employee_id`and `salaries.employee_id` to sets.

- The employees with missing information are exactly those in one set but not both. Thus, we take the `xor` of the two sets, convert that set to a sorted list, and return that set in a frame.
```
import pandas as pd

def find_employees(employees: pd.DataFrame, salaries: pd.DataFrame) -> pd.DataFrame:

    return pd.DataFrame({'employee_id':sorted(set(employees.employee_id) ^
                                              set(salaries .employee_id))})
```
[https://leetcode.com/problems/employees-with-missing-information/submissions/1084180417/](http://)

Python 3 || xor, with explanation || T/S: 98% / 97%

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ the greater of the number of rows in the two given frames.