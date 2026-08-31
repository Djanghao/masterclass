# Easy solution with JOIN

**Author:** Inveterate_Enthusiast
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/solutions/5479955/](https://leetcode.com/problems/all-valid-triplets-that-can-represent-a-country/solutions/5479955/)

---

# Code on Python
```python
import pandas as pd

def find_valid_triplets(school_a: pd.DataFrame, school_b: pd.DataFrame, school_c: pd.DataFrame) -> pd.DataFrame:
    school_a.rename(columns={"student_id": "id_a", "student_name": "member_A"}, inplace=True)
    school_b.rename(columns={"student_id": "id_b", "student_name": "member_B"}, inplace=True)
    school_c.rename(columns={"student_id": "id_c", "student_name": "member_C"}, inplace=True)
    
    joined = (school_a
              .join(other=school_b, how="cross")
              .join(other=school_c, how="cross")
              )

    return joined.loc[
        (joined["id_a"] != joined["id_b"]) &
        (joined["id_a"] != joined["id_c"]) &
        (joined["id_b"] != joined["id_c"]) &
        (joined["member_A"] != joined["member_B"]) &
        (joined["member_A"] != joined["member_C"]) &
        (joined["member_B"] != joined["member_C"]),
        ["member_A", "member_B", "member_C"]
    ]
```
---
# Code on PostgreSQL
```sql
SELECT a.student_name AS member_A,
b.student_name AS member_B,
c.student_name AS member_C
FROM SchoolA AS a

INNER JOIN

SchoolB AS b
ON a.student_name != b.student_name 
AND a.student_id != b.student_id

INNER JOIN

SchoolC AS c
ON a.student_name != c.student_name 
AND b.student_name != c.student_name 
AND a.student_id != c.student_id 
AND b.student_id != c.student_id;
```