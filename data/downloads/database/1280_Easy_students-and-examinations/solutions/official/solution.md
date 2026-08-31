# Official Solution

**Link:** [https://leetcode.com/problems/students-and-examinations/solution/](https://leetcode.com/problems/students-and-examinations/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group by and Cross join

#### Algorithm

This problem involves multiple DataFrames, so let's break it down into sub-problems to make it more straightforward and easy to understand. 

Firstly, the question requires us to find the number of exams each student attended for each subject. We can achieve this by using `groupby` method on each `(student_id, subject_name)` pair and then calculating the count of occurrences of each group. Note that we are adding two columns in `groupby`. As per the requirement, we will name this column with the statistics as `attended_exam`.

```python
grouped = examinations.groupby(['student_id', 'subject_name']).size().reset_index(name='attended_exams')
```

The resulting DataFrame `grouped` looks like this:

|   student_id  | subject_name | attended_exams |
|:------------:|:------------:|:-------------:|
|      1       |    Math      |       3       |
|      1       |   Physics    |       2       |
|      1       | Programming  |       1       |
|      2       |    Math      |       1       |
|      2       | Programming  |       1       |
|     13       |    Math      |       1       |
|     13       |   Physics    |       1       |
|     13       | Programming  |       1       |


<br>

However, this DataFrame is different from the expected output: 
- It lacks the columns `student_name`.
- It only counts combinations of `(student_id, subject_name)` that appeared **at least once**, but we need all possible combinations. 

Let's set this DataFrame aside and think about how we can get all the combinations: The `student` DataFrame contains all the IDs, and the `subjects` DataFrame contains all the subject names. Therefore, to obtain all the combinations of `(student_id, subject_name)`, we need to perform a cross join.

```python
all_id_subjects = pd.merge(students, subjects, how='cross')
```

The resulting DataFrame `all_id_subjects` now includes all possible combinations, but it does not contain the information about the number of exams.

| student_id | student_name | subject_name |
|:----------:|:------------:|:------------:|
|      1     |    Alice     |     Math     |
|      1     |    Alice     |   Physics    |
|      1     |    Alice     | Programming |
|      2     |     Bob      |     Math     |
|      2     |     Bob      |   Physics    |
|      2     |     Bob      | Programming |
|     13     |     John     |     Math     |
|     13     |     John     |   Physics    |
|     13     |     John     | Programming |
|      6     |     Alex     |     Math     |
|      6     |     Alex     |   Physics    |
|      6     |     Alex     | Programming |


<br>

Naturally, we can combine the DataFrame `all_id_subjects` with `grouped`, the one we obtained from the first step, which contains the count of exams each student attended for each subject. To do this, we can perform a left join on two DataFrames, which ensure that all the combinations of `student_id` and `subject_name` from the cross join are retained. 

If a combination is not present in the DataFrame `grouped` (i.e., no exams were counted for that specific combination), the `attended_exam` column will contain the value `NA` for that row, indicating that no exams were attended.

```python
id_subjects_count = pd.merge(all_id_subjects, grouped, on=['student_id', 'subject_name'], how='left')
```

We will obtain the DataFrame `id_subjects_count` as follows:

| student_id | student_name | subject_name | attended_exams |
|:----------:|:------------:|:------------:|:--------------:|
|      1     |    Alice     |     Math     |      3.0       |
|      1     |    Alice     |   Physics    |      2.0       |
|      1     |    Alice     | Programming |      1.0       |
|      2     |     Bob      |     Math     |      1.0       |
|      2     |     Bob      |   Physics    |      NaN       |
|      2     |     Bob      | Programming |      1.0       |
|     13     |     John     |     Math     |      1.0       |
|     13     |     John     |   Physics    |      1.0       |
|     13     |     John     | Programming |      1.0       |
|      6     |     Alex     |     Math     |      NaN       |
|      6     |     Alex     |   Physics    |      NaN       |
|      6     |     Alex     | Programming |      NaN       |


<br>


Note that the data type of the column `attended_exams` turns from integer to float, which is usually due to the nature of Pandas `NaN` (Not a Number). `NaN` is a special floating-point type, and in Pandas, if an integer column contains `NaN` values, the entire column's data type will be inferred as float. This is because integer columns in a DataFrame cannot contain `NaN` values, so the entire column is converted to a float data type to accommodate `NaN`. To address this issue, we can first fill the `NaN` values in this column with 0, and then convert the entire column's data type to integer via:

```
id_subjects_count['attended_exams'] = id_subjects_count['attended_exams'].fillna(0).astype(int)
```

| student_id | student_name | subject_name | attended_exams |
|------------|--------------|--------------|----------------|
| 1          | Alice        | Math         | 3              |
| 1          | Alice        | Physics      | 2              |
| 1          | Alice        | Programming  | 1              |
| 2          | Bob          | Math         | 1              |
| 2          | Bob          | Physics      | 0              |
| 2          | Bob          | Programming  | 1              |
| 6          | Alex         | Math         | 0              |
| 6          | Alex         | Physics      | 0              |
| 6          | Alex         | Programming  | 0              |
| 13         | John         | Math         | 1              |
| 13         | John         | Physics      | 1              |
| 13         | John         | Programming  | 1              |


<br>

Lastly, we need to sort `id_subjects_count` in ascending order base on the columns `studend_id` and `subject_name`, the complete code is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/UQUTTkTn/shared" frameBorder="0" width="100%" height="378" name="UQUTTkTn"></iframe>

<br>

---

## Database

### Approach: Group by and Cross join

#### Algorithm

We creat the table `grouped` by a subquery, which count the number of exams each student attended for each subject.

```
SELECT 
    student_id, subject_name, COUNT(*) AS attended_exams
FROM 
    Examinations
GROUP BY 
    student_id, subject_name
```

| student_id | subject_name | attended_exams |
|------------|--------------|----------------|
| 1          | Math         | 3              |
| 1          | Physics      | 2              |
| 1          | Programming  | 1              |
| 2          | Programming  | 1              |
| 13         | Math         | 1              |
| 13         | Programming  | 1              |
| 13         | Physics      | 1              |
| 2          | Math         | 1              |

<br>

To get all the combinations of `(student_id, subject_name)`, we use cross join to combine each row from table `Student` with each row from table `Subject`, resulting in every possible combination of `student_id` and `subject_name` from both tables.

```sql
SELECT 
    *
FROM
    Students s
CROSS JOIN
    Subjects sub
```

| student_id | student_name | subject_name |
|------------|--------------|--------------|
| 1          | Alice        | Programming  |
| 1          | Alice        | Physics      |
| 1          | Alice        | Math         |
| 2          | Bob          | Programming  |
| 2          | Bob          | Physics      |
| 2          | Bob          | Math         |
| 13         | John         | Programming  |
| 13         | John         | Physics      |
| 13         | John         | Math         |
| 6          | Alex         | Programming  |
| 6          | Alex         | Physics      |
| 6          | Alex         | Math         |

<br>

Next, we perform a left join on the table above with the table `grouped`, using the pair `(student_id, subject_name)` as the identifier, to retain all combinations while combining both tables. Similarly, after the left join, the column `grouped.attended_exams` may have `null` values, which we replace with 0 using `IFNULL()` function.

#### Implementation

```sql
SELECT 
    s.student_id, s.student_name, sub.subject_name, IFNULL(grouped.attended_exams, 0) AS attended_exams
FROM 
    Students s
CROSS JOIN 
    Subjects sub
LEFT JOIN (
    SELECT student_id, subject_name, COUNT(*) AS attended_exams
    FROM Examinations
    GROUP BY student_id, subject_name
) grouped 
ON s.student_id = grouped.student_id AND sub.subject_name = grouped.subject_name
ORDER BY s.student_id, sub.subject_name;
```