# ✅☑️ Best Pandas Solution with simple meaning of every line

**Author:** sgupta99299
**Votes:** 41
**Link:** [https://leetcode.com/problems/modify-columns/solutions/4920081/](https://leetcode.com/problems/modify-columns/solutions/4920081/)

---


```python
import pandas as pd
```
- `import pandas as pd`: This line imports the Pandas library and assigns it the alias `pd`, allowing us to refer to Pandas functions and classes using `pd`.

```python
def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
```
- `def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame`: This line defines a function named `modifySalaryColumn`. It takes one argument `employees`, which is expected to be a Pandas DataFrame. The function specifies that it returns a Pandas DataFrame.

```python
    employees.salary *= 2
```
- `employees.salary *= 2`: This line modifies the values in the `'salary'` column of the DataFrame `employees`. It multiplies each value in the `'salary'` column by 2, effectively doubling the salary for each employee.

```python
    return employees
```
- `return employees`: This line returns the modified DataFrame `employees` with the updated salary values.



# Code
```
import pandas as pd

def modifySalaryColumn(employees: pd.DataFrame) -> pd.DataFrame:
    employees.salary *= 2
    return employees
```