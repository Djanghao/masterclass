# 100% Comprehensive Student Eligibility Filtering MySQL, MS SQL Server, PostgreSQL, Oracle, Pandas

**Author:** d_sushkov
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-top-scoring-students-ii/solutions/5334311/](https://leetcode.com/problems/find-top-scoring-students-ii/solutions/5334311/)

---

# Intuition
The problem requires us to identify students who meet the following criteria:

- They have completed all mandatory courses with a grade of 'A' in their major.
- They have completed at least two elective courses with grades 'A' or 'B' in their major.
- They have an average GPA of at least 2.5 across all their courses.

We will use common table expressions (CTEs) to break down the problem and make it easier to manage.

# Approach
1. MandatoryCourses: Identify all mandatory courses for each major.
2. ElectiveCourses: Identify all elective courses for each major.
3. StudentMandatory: Find students who have completed all mandatory courses with a grade of 'A' for their major.
4. StudentElective: Find students who have completed at least two elective courses with grades 'A' or 'B' for their major.
5. AverageGPA: Calculate the average GPA for each student and filter those with an average GPA of 2.5 or higher.
6. Final Selection: Select students who satisfy all the above criteria.

# Complexity
- Time complexity:
The time complexity depends on the number of courses, enrollments, and students, but it can be considered O(n * m) where n is the number of students and m is the number of courses.

- Space complexity:
The space complexity is also dependent on the number of students and courses, primarily O(n + m).

# Code
**MySQL**
```
# Write your MySQL query statement below
WITH MandatoryCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'Yes'
),
ElectiveCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'No'
),
StudentMandatory AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN MandatoryCourses m ON e.course_id = m.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = m.major
    WHERE e.grade = 'A'
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM MandatoryCourses WHERE major = s.major)
),
StudentElective AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN ElectiveCourses ec ON e.course_id = ec.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = ec.major
    WHERE e.grade IN ('A', 'B')
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) >= 2
),
AverageGPA AS (
    SELECT e.student_id, AVG(e.GPA) AS avg_gpa
    FROM enrollments e
    GROUP BY e.student_id
    HAVING AVG(e.GPA) >= 2.5
)
SELECT DISTINCT sm.student_id
FROM StudentMandatory sm
JOIN StudentElective se ON sm.student_id = se.student_id
JOIN AverageGPA ag ON sm.student_id = ag.student_id
ORDER BY sm.student_id;
```
**MS SQL Server**
```
/* Write your T-SQL query statement below */
WITH MandatoryCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'Yes'
),
ElectiveCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'No'
),
StudentMandatory AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN MandatoryCourses m ON e.course_id = m.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = m.major
    WHERE e.grade = 'A'
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM MandatoryCourses WHERE major = s.major)
),
StudentElective AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN ElectiveCourses ec ON e.course_id = ec.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = ec.major
    WHERE e.grade IN ('A', 'B')
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) >= 2
),
AverageGPA AS (
    SELECT e.student_id, AVG(e.GPA) AS avg_gpa
    FROM enrollments e
    GROUP BY e.student_id
    HAVING AVG(e.GPA) >= 2.5
)
SELECT DISTINCT sm.student_id
FROM StudentMandatory sm
JOIN StudentElective se ON sm.student_id = se.student_id
JOIN AverageGPA ag ON sm.student_id = ag.student_id
ORDER BY sm.student_id;
```
**Oracle**
```
/* Write your PL/SQL query statement below */
WITH MandatoryCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'Yes'
),
ElectiveCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'No'
),
StudentMandatory AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN MandatoryCourses m ON e.course_id = m.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = m.major
    WHERE e.grade = 'A'
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM MandatoryCourses WHERE major = s.major)
),
StudentElective AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN ElectiveCourses ec ON e.course_id = ec.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = ec.major
    WHERE e.grade IN ('A', 'B')
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) >= 2
),
AverageGPA AS (
    SELECT e.student_id, AVG(e.GPA) AS avg_gpa
    FROM enrollments e
    GROUP BY e.student_id
    HAVING AVG(e.GPA) >= 2.5
)
SELECT DISTINCT sm.student_id
FROM StudentMandatory sm
JOIN StudentElective se ON sm.student_id = se.student_id
JOIN AverageGPA ag ON sm.student_id = ag.student_id
ORDER BY sm.student_id;
```
**PostgreSQL**
```
-- Write your PostgreSQL query statement below
WITH MandatoryCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'Yes'
),
ElectiveCourses AS (
    SELECT c.course_id, c.major
    FROM courses c
    WHERE c.mandatory = 'No'
),
StudentMandatory AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN MandatoryCourses m ON e.course_id = m.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = m.major
    WHERE e.grade = 'A'
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM MandatoryCourses WHERE major = s.major)
),
StudentElective AS (
    SELECT e.student_id, s.major
    FROM enrollments e
    JOIN ElectiveCourses ec ON e.course_id = ec.course_id
    JOIN students s ON e.student_id = s.student_id AND s.major = ec.major
    WHERE e.grade IN ('A', 'B')
    GROUP BY e.student_id, s.major
    HAVING COUNT(DISTINCT e.course_id) >= 2
),
AverageGPA AS (
    SELECT e.student_id, AVG(e.GPA) AS avg_gpa
    FROM enrollments e
    GROUP BY e.student_id
    HAVING AVG(e.GPA) >= 2.5
)
SELECT DISTINCT sm.student_id
FROM StudentMandatory sm
JOIN StudentElective se ON sm.student_id = se.student_id
JOIN AverageGPA ag ON sm.student_id = ag.student_id
ORDER BY sm.student_id;
```
**Quasi Pandas**
```
import sqlite3
import pandas as pd

def find_top_scoring_students(students: pd.DataFrame, courses: pd.DataFrame, enrollments: pd.DataFrame) -> pd.DataFrame:
    # Create an in-memory SQLite database
    conn = sqlite3.connect(':memory:')
    cursor = conn.cursor()
    
    # Create tables
    students.to_sql('students', conn, index=False, if_exists='replace')
    courses.to_sql('courses', conn, index=False, if_exists='replace')
    enrollments.to_sql('enrollments', conn, index=False, if_exists='replace')
    
    # Define the SQL query
    query = """
    WITH MandatoryCourses AS (
        SELECT course_id, major
        FROM courses
        WHERE mandatory = 'Yes'
    ),
    ElectiveCourses AS (
        SELECT course_id, major
        FROM courses
        WHERE mandatory = 'No'
    ),
    StudentMandatory AS (
        SELECT e.student_id, s.major
        FROM enrollments e
        JOIN MandatoryCourses m ON e.course_id = m.course_id
        JOIN students s ON e.student_id = s.student_id AND s.major = m.major
        WHERE e.grade = 'A'
        GROUP BY e.student_id, s.major
        HAVING COUNT(DISTINCT e.course_id) = (SELECT COUNT(*) FROM MandatoryCourses WHERE major = s.major)
    ),
    StudentElective AS (
        SELECT e.student_id, s.major
        FROM enrollments e
        JOIN ElectiveCourses ec ON e.course_id = ec.course_id
        JOIN students s ON e.student_id = s.student_id AND s.major = ec.major
        WHERE e.grade IN ('A', 'B')
        GROUP BY e.student_id, s.major
        HAVING COUNT(DISTINCT e.course_id) >= 2
    ),
    AverageGPA AS (
        SELECT e.student_id, AVG(e.GPA) AS avg_gpa
        FROM enrollments e
        GROUP BY e.student_id
        HAVING AVG(e.GPA) >= 2.5
    )
    SELECT DISTINCT sm.student_id
    FROM StudentMandatory sm
    JOIN StudentElective se ON sm.student_id = se.student_id
    JOIN AverageGPA ag ON sm.student_id = ag.student_id
    ORDER BY sm.student_id;
    """
    
    # Execute the query
    result = pd.read_sql_query(query, conn)
    
    # Close the connection
    conn.close()
    
    return result
```