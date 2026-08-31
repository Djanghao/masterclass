# pandas ||| groupby and a median formula || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 2
**Link:** [https://leetcode.com/problems/median-employee-salary/solutions/4215779/](https://leetcode.com/problems/median-employee-salary/solutions/4215779/)

---


Note that for`len(x)` = 7, we have:
```
[(len(x)-1)//2: len(x)//2+1] = [(7-1)//2: 7//2+1] = [3: 4]
```
and for`len(x)`= 8, we have:
```
[(len(x)-1)//2: len(x)//2+1] = [(8-1)//2: 8//2+1] = [3: 5]
```
Here's the code:
```
import pandas as pd
def median_employee_salary(employee: pd.DataFrame) -> pd.DataFrame:

    return employee.sort_values(by=['salary', 'id']
                  ).groupby('company'
                  ).apply(lambda x: x.iloc[(len(x)-1)//2:len(x)//2+1])
```
[https://leetcode.com/problems/median-employee-salary/submissions/1085621011/](https://leetcode.com/problems/median-employee-salary/submissions/1085621011/)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(employee)`.