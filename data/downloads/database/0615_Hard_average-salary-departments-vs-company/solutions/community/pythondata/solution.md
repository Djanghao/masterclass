# Pandas simple solution, mean by group and np.where

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-salary-departments-vs-company/solutions/4088149/](https://leetcode.com/problems/average-salary-departments-vs-company/solutions/4088149/)

---

# Intuition
Create average company salary per month, then create average department salary per month. Compare both values and create column based on comparison.

# Approach
1. First, create `pay_month` column to get right format of date.
2. Join salary with employee, to get department information.
3. With `groupby('pay_month')` and `transform('mean')` create column with average pay in company per month - `comp_avg`.
4. With `groupby('pay_month, department_id')` and `transform('mean')` create column with average pay in department per month - `dep_avg`.
5. Create `comparison` column with np.where, compare `dep_avg` to `comp_avg`.
6. return required columns, drop duplicates, since new columns were created on the level on worker, not department.

# Code
```
import pandas as pd

def average_salary(salary: pd.DataFrame, employee: pd.DataFrame) -> pd.DataFrame:
    df = salary.assign(pay_month = salary.pay_date.dt.strftime("%Y-%m")).merge(employee, on = "employee_id")
    df["comp_avg"] = df.groupby(["pay_month"])["amount"].transform("mean")
    df["dep_avg"] = df.groupby(["pay_month","department_id"])["amount"].transform("mean")
    df["comparison"] =  np.where(df["dep_avg"] < df["comp_avg"],"lower", 
                        np.where(df["dep_avg"] > df["comp_avg"],"higher",
                                                                "same"))
    return df[["pay_month","department_id","comparison"]].drop_duplicates()
```