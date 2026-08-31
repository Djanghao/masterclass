# Pandas oneliner - sort, group and head(!)

**Author:** piocarz
**Votes:** 6
**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solutions/3945904/](https://leetcode.com/problems/highest-grade-for-each-student/solutions/3945904/)

---

# Intuition
Essentially, its just a sorting problem

# Few tricks:
1. Cool trick is, you can use head not only to get first 1/5/100 rows from dataframe, but also from any group you divide your dataframe to.
If like here, we want exactly one row for each student(group), we just have to sort dataframe in right order, and return its `.head(1)`.
2. Another neet trick is, you can use 1/0 instead of True/False.

# Code
```
import pandas as pd

def highest_grade(df: pd.DataFrame) -> pd.DataFrame:
  return df.sort_values(["student_id","grade","course_id"],ascending=[1,0,1]).groupby("student_id").head(1)
```