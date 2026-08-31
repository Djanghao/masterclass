# Official Solution

**Link:** [https://leetcode.com/problems/classes-with-at-least-5-students/solution/](https://leetcode.com/problems/classes-with-at-least-5-students/solution/)

---

<!-- Don't delete this -->
[TOC]

# Solution

---

## pandas

### Approach: Group By

#### Algorithm
We need to count the number of each unique classes, so we can group the DataFrame `courses` by the `class` column using the function `groupby('class')`. Then, we use the function `size()` to count the number of occurrences for each unique class, which gives us the count of students in each class. We use `reset_index(name='count')` to name this column as `count`.

The result DataFrame `df` consists of two columns: `class` and `count`.


```python
df = courses.groupby('class').size().reset_index(name='count')
```

We will have the following DataFrame `df`:

<table>
  <tr>
    <th>class</th>
    <th>count</th>
  </tr>
  <tr>
    <td>Biology</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Computer</td>
    <td>1</td>
  </tr>
  <tr>
    <td>English</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Math</td>
    <td>6</td>
  </tr>
</table>


<br>

Next, we filter `df` to select only the rows where the `count` column is greater than or equal to 5, which helps us identify the classes with more than 5 students. 

```python
df = df[df['count'] >= 5]
```

<table>
  <tr>
    <th>class</th>
    <th>count</th>
  </tr>
  <tr>
    <td>Math</td>
    <td>6</td>
  </tr>
</table>

<br>

We need to return the required column `class`, thus the complete code is as follows:

#### Implementation

<iframe src="https://leetcode.com/playground/CdymVeDg/shared" frameBorder="0" width="100%" height="191" name="CdymVeDg"></iframe>

We will obtain the following DataFrame:
<table>
  <tr>
    <th>class</th>
  </tr>
  <tr>
    <td>Math</td>
  </tr>
</table>

<br>

---

## Database

### Approach: Group By

#### Algorithm

First, we can count the student number in each class. And then select the ones have more than 5 students.

To get the student number in each class. We can use `GROUP BY` and `COUNT`, which is very popular used to statistic bases on some character in a table.

```sql
SELECT
    class, COUNT(student)
FROM
    courses
GROUP BY class
;
```

<table>
  <tr>
    <th>class</th>
    <th>COUNT(student)</th>
  </tr>
  <tr>
    <td>Biology</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Computer</td>
    <td>1</td>
  </tr>
  <tr>
    <td>English</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Math</td>
    <td>6</td>
  </tr>
</table>

<br>

To continue, we can filter the classes by taking the above query as a sub-query.

#### Implementation

```sql
SELECT
    class
FROM
    (SELECT
        class, COUNT(student) AS num
    FROM
        courses
    GROUP BY class) AS temp_table
WHERE
    num >= 5
;
```
>Note: Make an alias of `COUNT(student)` ('num' in this case) so that you can use in the `WHERE` clause because it cannot be used directly over there.

<br>

### Approach 2: Using `GROUP BY` and `HAVING` condition

#### Algorithm

Using sub-query is one way to add some condition to a `GROUP BY` clause, however, using [`HAVING`](https://dev.mysql.com/doc/refman/5.7/en/group-by-handling.html) is another simpler and natural approach. So we can rewrite the above solution as below.

#### Implementation

```sql
SELECT
    class
FROM
    courses
GROUP BY class
HAVING COUNT(student) >= 5
;
```