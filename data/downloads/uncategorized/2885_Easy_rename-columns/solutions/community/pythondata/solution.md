# ✅☑️ Best Pandas Solution with simple meaning of every line

**Author:** sgupta99299
**Votes:** 90
**Link:** [https://leetcode.com/problems/rename-columns/solutions/4920099/](https://leetcode.com/problems/rename-columns/solutions/4920099/)

---


```python
import pandas as pd
```
- `import pandas as pd`: Imports the Pandas library and assigns it the alias `pd`, allowing us to refer to Pandas functions and classes using `pd`.

```python
def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
```
- `def renameColumns(students: pd.DataFrame) -> pd.DataFrame`: Defines a function named `renameColumns` that takes one argument, `students`, which is expected to be a Pandas DataFrame. It specifies that the function returns a Pandas DataFrame. This function seems to rename specific columns in the input DataFrame `students` based on a mapping of old column names to new column names.

```python
    students.rename(columns={'id': 'student_id', 'first': 'first_name', 'last': 'last_name', 'age': 'age_in_years'}, inplace=True)
```
- `students.rename(columns={'id': 'student_id', 'first': 'first_name', 'last': 'last_name', 'age': 'age_in_years'}, inplace=True)`: Renames the columns in the DataFrame `students` according to the provided mapping. The `'id'` column is renamed to `'student_id'`, the `'first'` column is renamed to `'first_name'`, the `'last'` column is renamed to `'last_name'`, and the `'age'` column is renamed to `'age_in_years'`. The `inplace=True` parameter ensures that the changes are made directly to the original DataFrame `students`.

```python
    return students
```
- `return students`: Returns the modified DataFrame `students` with the columns renamed according to the specified mapping.



# Code
```
import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    students.rename(columns={'id': 'student_id', 'first': 'first_name', 'last': 'last_name', 'age': 'age_in_years'}, inplace=True)
    return students
```