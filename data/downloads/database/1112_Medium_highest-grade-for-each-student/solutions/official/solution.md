# Official Solution

**Link:** [https://leetcode.com/problems/highest-grade-for-each-student/solution/](https://leetcode.com/problems/highest-grade-for-each-student/solution/)

---

[TOC]

# Solution

---

### Overview

The primary goal is to find the highest grade for each student from the `enrollments` table, and in the case of ties, select the record with the smallest `course_id`. 

The provided bar chart visually depicts our objective: it displays the grades of each student across different courses, with a star highlighting the highest grade for every student.

![fig](../Figures/1112/1112.png)

We will explore three different approaches to solve this problem.

## Pandas

### Approach 1: Prioritized Ranking with Grouping

#### Intuition

To determine each student's highest grade, we first prioritize based on the grade. In case of tied grades, we further prioritize based on the `course_id`. This is achieved by first sorting the data based on our prioritization, then grouping by the `student_id` and taking the top record for each.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - Rank the records within each student's data based on `grade` (in descending order) and `course_id` (in ascending order).
```python
sorted_df = enrollments.sort_values(
    by=["student_id", "grade", "course_id"], ascending=[True, False, True]
)
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
    <th>rank</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
    <td>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
    <td>3</td>
  </tr>
</table>
<br>

**Step 3** - Filter out only the top-ranked records for each student.
```python
result = sorted_df.groupby("student_id").head(1).reset_index(drop=True)
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 

```python
import pandas as pd

def highest_grade(enrollments: pd.DataFrame) -> pd.DataFrame:
    sorted_df = enrollments.sort_values(
        by=["student_id", "grade", "course_id"], ascending=[True, False, True]
    )
    result = sorted_df.groupby("student_id").head(1).reset_index(drop=True)
    return result
```

---

### Approach 2: Max Grade Extraction with Join

#### Intuition

The idea here is to first determine the highest grade for each student. This "highest grade" dataset can then be merged with the original enrollments dataset, effectively filtering for only those records where students achieved their top grades. If there are multiple records (i.e., courses) where a student achieved the same highest grade, we then select the course with the smallest `course_id` to break the tie.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - For each student, find their highest grade.
```python
max_grades = enrollments.groupby("student_id")["grade"].max().reset_index()
```

<table>
  <tr>
    <th>student_id</th>
    <th>max_grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 3** - Join this information with the original table on `student_id` and `grade`.
```python
merged = pd.merge(enrollments, max_grades, on=["student_id", "grade"])
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 4** - In case of a tie on the grade, select the smallest `course_id`.
```python
result = (
    merged.groupby("student_id")
    .apply(lambda x: x.nsmallest(1, "course_id"))
    .reset_index(drop=True)
)
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 


```python
import pandas as pd


def highest_grade(enrollments: pd.DataFrame) -> pd.DataFrame:
    max_grades = enrollments.groupby("student_id")["grade"].max().reset_index()
    merged = pd.merge(enrollments, max_grades, on=["student_id", "grade"])
    result = (
        merged.groupby("student_id")
        .apply(lambda x: x.nsmallest(1, "course_id"))
        .reset_index(drop=True)
    )
    return result[["student_id", "course_id", "grade"]]

```

---

### Approach 3: Transform & Filter with Aggregation

#### Intuition

This approach utilizes the pandas `.transform()` method, which allows us to generate a Series that matches the original DataFrame's length but with values transformed by an aggregation function. Specifically, we compute the maximum grade for each student, yielding a Series of highest grades parallel to the original `enrollments`. Using this Series, we can swiftly filter the records in the main DataFrame to retain only those with the highest grades for each student. In the event of tied grades, the tie is broken by selecting the record with the smallest `course_id`.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - Identify the maximum grade for each student.
```python
max_grades = enrollments.groupby("student_id")["grade"].transform("max")
```

<table>
  <tr>
    <th>student_id</th>
    <th>max_grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 3** - Filter the records that have these maximum grades.
```python
filtered = enrollments[enrollments["grade"] == max_grades]
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 4** - For ties, choose records with the smallest `course_id`.
```python
result = (
    filtered.groupby("student_id")
    .apply(lambda group: group.nsmallest(1, "course_id"))
    .reset_index(drop=True)
)
```

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 

```python
import pandas as pd


def highest_grade(enrollments: pd.DataFrame) -> pd.DataFrame:
    max_grades = enrollments.groupby("student_id")["grade"].transform("max")
    filtered = enrollments[enrollments["grade"] == max_grades]
    result = (
        filtered.groupby("student_id")
        .apply(lambda group: group.nsmallest(1, "course_id"))
        .reset_index(drop=True)
    )
    return result[["student_id", "course_id", "grade"]]

```

## Database

### Approach 1: Window Function

#### Intuition

Use a window function to rank the grades of each student. The window function allows us to perform calculations across a set of rows related to the current row. This approach leverages the capability of the window function to rank each student's grades, and if there's a tie, prioritize the row with the smallest `course_id`.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - Rank the records within each student's data based on `grade` (in descending order) and `course_id` (in ascending order). 

For this, we can use the `DENSE_RANK()` function in SQL, where we rank data within each student's partition based on grade and course ID.

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
    <th>rnk</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
    <td>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
    <td>1</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
    <td>3</td>
  </tr>
</table>
<br>

**Step 3** - Filter out only the top-ranked records for each student.

For this, we use the `WHERE` function in SQL.

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 

```sql
SELECT 
  student_id, 
  course_id, 
  grade 
FROM 
  (
    SELECT 
      student_id, 
      course_id, 
      grade, 
      DENSE_RANK() OVER (
        PARTITION BY student_id 
        ORDER BY 
          grade DESC, 
          course_id ASC
      ) AS rnk 
    FROM 
      Enrollments
  ) AS ranked 
WHERE 
  rnk = 1 
ORDER BY 
  student_id;

```

---

### Approach 2: Aggregation & Self-Join

#### Intuition

First, aggregate to find the highest grade for each student. Next, join the original data with this aggregated data to filter out the records that match the highest grade. This method essentially compares each student's grades with their respective highest grade.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - For each student, find their highest grade. 

We use `GROUP BY` & `MAX()` within SQL.

<table>
  <tr>
    <th>student_id</th>
    <th>max_grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 3** - Join this information with the original table on `student_id` and `grade` using a SQL `JOIN`.

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 4** - In case of a tie on the grade, select the smallest `course_id`.

We use SQL `GROUP BY` and `MIN()` to resolve ties. 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 


```sql
SELECT 
  e1.student_id, 
  MIN(e1.course_id) AS course_id, 
  e1.grade 
FROM 
  Enrollments e1 
  JOIN (
    SELECT 
      student_id, 
      MAX(grade) AS max_grade 
    FROM 
      Enrollments 
    GROUP BY 
      student_id
  ) e2 ON e1.student_id = e2.student_id 
  AND e1.grade = e2.max_grade 
GROUP BY 
  e1.student_id, 
  e1.grade 
ORDER BY 
  e1.student_id;

```

---

### Approach 3: Subquery with Aggregation

#### Intuition

Find the highest grade for each student using a subquery. Then, filter the main table using this information. If there are ties in grades, pick the one with the smallest `course_id`.

#### Algorithm

**Step 1** - Given: 

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>3</td>
    <td>1</td>
    <td>80</td>
  </tr>
  <tr>
    <td>3</td>
    <td>2</td>
    <td>75</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 2** - Identify the maximum grade for each student.

In a subquery, identify the maximum grade for each student using SQL `GROUP BY` and `MAX()`.

<table>
  <tr>
    <th>student_id</th>
    <th>max_grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 3** - Filter the records that have these maximum grades.

Use SQL `IN` to filter the original table using the result of the subquery.

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>2</td>
    <td>3</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

**Step 4** - For ties, choose records with the smallest `course_id`.

We use SQL `GROUP BY` and `MIN()` to resolve ties.

<table>
  <tr>
    <th>student_id</th>
    <th>course_id</th>
    <th>grade</th>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>99</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2</td>
    <td>95</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
    <td>82</td>
  </tr>
</table>
<br>

#### Implementation 


```sql
SELECT 
  student_id, 
  MIN(course_id) AS course_id, 
  grade 
FROM 
  Enrollments 
WHERE 
  (student_id, grade) IN (
    SELECT 
      student_id, 
      MAX(grade) 
    FROM 
      Enrollments 
    GROUP BY 
      student_id
  ) 
GROUP BY 
  student_id, 
  grade 
ORDER BY 
  student_id;

```