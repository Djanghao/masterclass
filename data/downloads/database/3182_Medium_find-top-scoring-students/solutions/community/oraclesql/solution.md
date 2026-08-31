# 100% A Major-Centric Approach MySQL, MS SQL Server, PostgreSQL, Oracle, Pandas

**Author:** d_sushkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-top-scoring-students/solutions/5285192/](https://leetcode.com/problems/find-top-scoring-students/solutions/5285192/)

---

# SQL Solution
# Intuition
To identify the top-scoring students, we need to determine which students have taken all the courses required for their major and received an 'A' in each. This involves matching students' enrollments with their major requirements and filtering those who have excelled in all courses.

# Approach
1. Identify the total number of courses for each major.
2. Determine the courses each student has taken and the grades received.
3. Calculate the number of 'A' grades each student received in their major courses.
4. Filter students who have taken all required courses for their major and received an 'A' in all.
5. Return the list of student IDs who meet these criteria, ordered by student_id in ascending order.

# Complexity
- Time complexity: the time complexity is primarily driven by the joins and group by operations. Assuming n is the number of enrollments, m is the number of courses, and p is the number of students, the complexity is approximately O(nlogn+m+p).

- Space complexity: O(n+m+p) due to the temporary storage used for the CTEs and intermediate results.
# Pandas Solution
# Intuition
To solve this problem using Pandas, we need to determine which students have taken all courses required for their major and received an 'A' in each. This involves data manipulation and filtering to match students' enrollments with their major requirements.

# Approach
1. Merge the enrollments with courses to get the major for each course.
2. Merge the result with students to get the student's major.
3. Filter enrollments where the student's major matches the course's major.
4. Filter enrollments with grade 'A'.
5. Calculate the number of courses in each major.
6. Calculate the number of 'A' grades each student received in their major courses.
7. Merge the counts to compare the number of 'A' grades with the total number of courses for each major.
8. Filter students who have received 'A' in all courses of their major.
9. Sort by student_id and return the result.

# Complexity
- Time complexity: the time complexity is primarily driven by the merge and group by operations. Assuming n is the number of enrollments, m is the number of courses, and p is the number of students, the complexity is approximately O(nlogn+m+p).

- Space complexity: O(n+m+p) due to the temporary DataFrames used for merging and intermediate results.
# Code
**MySQL**
```
# Write your MySQL query statement below
-- Step 1: Identify all courses for each major
WITH major_courses AS (
    SELECT major, COUNT(course_id) AS total_courses
    FROM courses
    GROUP BY major
),

-- Step 2: Determine the courses each student has taken and the grades received
student_grades AS (
    SELECT s.student_id, s.major, e.course_id, e.grade
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    WHERE s.major = c.major
),

-- Step 3: Calculate the number of 'A' grades each student received in their major courses
student_a_grades AS (
    SELECT student_id, major, COUNT(course_id) AS a_courses
    FROM student_grades
    WHERE grade = 'A'
    GROUP BY student_id, major
)

-- Step 4: Check if students have taken all required courses for their major and received an 'A' in all
SELECT sa.student_id
FROM student_a_grades sa
JOIN major_courses mc ON sa.major = mc.major
WHERE sa.a_courses = mc.total_courses
ORDER BY sa.student_id;
```
**MS SQL Server**
```
# Write your MySQL query statement below
WITH major_courses AS (
    SELECT major, COUNT(course_id) AS total_courses
    FROM courses
    GROUP BY major
),
student_grades AS (
    SELECT s.student_id, s.major, e.course_id, e.grade
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    WHERE s.major = c.major
),
student_a_grades AS (
    SELECT student_id, major, COUNT(course_id) AS a_courses
    FROM student_grades
    WHERE grade = 'A'
    GROUP BY student_id, major
)
SELECT sa.student_id
FROM student_a_grades sa
JOIN major_courses mc ON sa.major = mc.major
WHERE sa.a_courses = mc.total_courses
ORDER BY sa.student_id;
```
**Oracle**
```
# Write your MySQL query statement below
WITH major_courses AS (
    SELECT major, COUNT(course_id) AS total_courses
    FROM courses
    GROUP BY major
),
student_grades AS (
    SELECT s.student_id, s.major, e.course_id, e.grade
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    WHERE s.major = c.major
),
student_a_grades AS (
    SELECT student_id, major, COUNT(course_id) AS a_courses
    FROM student_grades
    WHERE grade = 'A'
    GROUP BY student_id, major
)
SELECT sa.student_id
FROM student_a_grades sa
JOIN major_courses mc ON sa.major = mc.major
WHERE sa.a_courses = mc.total_courses
ORDER BY sa.student_id;
```
**PostgreSQL**
```
# Write your MySQL query statement below
WITH major_courses AS (
    SELECT major, COUNT(course_id) AS total_courses
    FROM courses
    GROUP BY major
),
student_grades AS (
    SELECT s.student_id, s.major, e.course_id, e.grade
    FROM students s
    JOIN enrollments e ON s.student_id = e.student_id
    JOIN courses c ON e.course_id = c.course_id
    WHERE s.major = c.major
),
student_a_grades AS (
    SELECT student_id, major, COUNT(course_id) AS a_courses
    FROM student_grades
    WHERE grade = 'A'
    GROUP BY student_id, major
)
SELECT sa.student_id
FROM student_a_grades sa
JOIN major_courses mc ON sa.major = mc.major
WHERE sa.a_courses = mc.total_courses
ORDER BY sa.student_id;
```
**Pandas**
```
import pandas as pd

def find_top_scoring_students(enrollments: pd.DataFrame, students: pd.DataFrame, courses: pd.DataFrame) -> pd.DataFrame:
    # Merge enrollments with courses to get the major for each course
    enrollments = enrollments.merge(courses[['course_id', 'major']], on='course_id', how='left')

    # Merge with students to get the student's major
    enrollments = enrollments.merge(students[['student_id', 'major']], on='student_id', suffixes=('_course', '_student'))

    # Filter to keep only the enrollments where the student's major matches the course's major
    enrollments = enrollments[enrollments['major_course'] == enrollments['major_student']]

    # Filter to keep only the enrollments with grade 'A'
    enrollments_a = enrollments[enrollments['grade'] == 'A']

    # Calculate the number of courses in each major
    major_courses_count = courses.groupby('major').size().reset_index(name='total_courses')

    # Calculate the number of 'A' grades each student received in their major courses
    student_a_grades_count = enrollments_a.groupby(['student_id', 'major_student']).size().reset_index(name='a_courses')

    # Merge to compare the number of 'A' grades with the total number of courses for each major
    merged = student_a_grades_count.merge(major_courses_count, left_on='major_student', right_on='major')

    # Filter students who have received 'A' in all courses of their major
    top_students = merged[merged['a_courses'] == merged['total_courses']][['student_id']]

    # Sort by student_id
    top_students = top_students.sort_values(by='student_id').reset_index(drop=True)

    return top_students    
```