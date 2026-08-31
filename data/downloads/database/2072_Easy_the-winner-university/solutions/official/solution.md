# Official Solution

**Link:** [https://leetcode.com/problems/the-winner-university/solution/](https://leetcode.com/problems/the-winner-university/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: DataFrame Filtering and Analysis

The solution involves filtering, counting, comparing, and presenting the results using pandas DataFrames.

**Visualization of Approach:**

![fig](../Figures/2072/2072-1.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

New York DataFrame (`new_york`):

<table border="1">
  <tr>
    <th>student_id</th>
    <th>score</th>
  </tr>
  <tr>
    <td>1</td>
    <td>90</td>
  </tr>
  <tr>
    <td>2</td>
    <td>87</td>
  </tr>
</table>
<br>

California DataFrame (`california`):

<table border="1">
  <tr>
    <th>student_id</th>
    <th>score</th>
  </tr>
  <tr>
    <td>2</td>
    <td>89</td>
  </tr>
  <tr>
    <td>3</td>
    <td>88</td>
  </tr>
</table>
<br>

1. Filtering Excellent Students
  
  We first identify excellent students in each university by using DataFrame filtering.
  
  ```python
  ny_excellent = new_york[new_york['score'] >= 90]
  ca_excellent = california[california['score'] >= 90]
  ```

`ny_excellent`: 

<table border="1">
  <tr>
    <th>student_id</th>
    <th>score</th>
  </tr>
  <tr>
    <td>1</td>
    <td>90</td>
  </tr>
</table>
<br>

`ca_excellent`:

<table border="1">
  <tr>
    <th>student_id</th>
    <th>score</th>
  </tr>
</table>
<br>

2. Counting Excellent Students
  
  We count the number of excellent students at each university by counting the number of rows in the filtered DataFrames.
  
  ```python
  ny_excellent_count = ny_excellent.shape[0]  # 1
  ca_excellent_count = ca_excellent.shape[0]  # 0
  ```

3. Comparing the Counts

  Compare the counts to determine which university has more excellent students using basic `if-elif-else` statements for comparison.

  ```python
  if ny_excellent_count > ca_excellent_count:
      winner = 'New York University'
  elif ny_excellent_count < ca_excellent_count:
      winner = 'California University'
  else:
      winner = 'No Winner'
  ```

4. Returning the Result

  Create a new DataFrame with the final result in the required format.

  ```python
  result = pd.DataFrame({'winner': [winner]})
  ```

`result`:

<table border="1">
  <tr>
    <th>winner</th>
  </tr>
  <tr>
    <td>New York University</td>
  </tr>
</table>
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/Eocu3ZcX/shared" frameBorder="0" width="100%" height="361" name="Eocu3ZcX"></iframe>

---

## Database

### Approach: Comparative Aggregation Query

The fundamental idea is to count the number of excellent students in each university and then compare these counts to determine the winner.

#### Intuition

Here's a breakdown of the logic:


1. Counting Excellent Students

   The first and most crucial step is to identify the excellent students in each university. This is done by filtering students who have scored 90 or more.

   We use the SQL `COUNT(*)` function within a subquery for each university. The `WHERE score >= 90` clause ensures we only count the students with scores of 90 or above.

2. Subqueries for Each University

   We need individual counts for each university. To do this, we create separate subqueries, one for New York University (`NY`) and one for California University (`CA`).

   We write two subqueries, each selecting from the respective university tables (`NewYork` and `California`). Each subquery uses `COUNT(*)` to count the number of records that meet our excellent student criteria.

3. Comparing the Counts

   Once we have the counts of excellent students from both universities, the next step is to compare these counts to determine which university has more excellent students, or if it's a tie.

   We use a `CASE` statement to compare the counts. This statement evaluates the conditions in sequence:
   - If New York's count is greater, it returns "New York University".
   - If California's count is greater, it returns "California University".
   - If neither condition is true (implying equality), it returns "No Winner".

4. Returning the Result as a Single Row

   The output needs to be a single row indicating the winner.

   The `CASE` statement is within a `SELECT` query that returns a single row. This row reflects the outcome of the comparison: either one of the universities as the winner or a draw.


#### Implementation


```mysql []
SELECT 
  CASE 
    WHEN NY.excellent_students > CA.excellent_students THEN 'New York University'
    WHEN NY.excellent_students < CA.excellent_students THEN 'California University'
    ELSE 'No Winner'
  END AS winner
FROM 
  (
    SELECT 
      COUNT(*) as excellent_students 
    FROM 
      NewYork 
    WHERE 
      score >= 90
  ) NY, 
  (
    SELECT 
      COUNT(*) as excellent_students 
    FROM 
      California 
    WHERE 
      score >= 90
  ) CA;

```