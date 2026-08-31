# Official Solution

**Link:** [https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solution/](https://leetcode.com/problems/the-number-of-seniors-and-juniors-to-join-the-company/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Cumulative Salary-Based Hiring Strategy

This approach involves a series of data manipulation steps to determine the maximum number of senior and junior candidates that can be hired within a given budget. Initially, the candidates are separated based on their experience level ('Senior' or 'Junior') and sorted by their salary in ascending order. This sorting is crucial as it aligns with the strategy of maximizing hires within a budget constraint. For both groups, we calculate the cumulative salary, which helps in understanding how the total salary expenditure accumulates as we consider each candidate in order. We first focus on hiring as many seniors as possible, guided by the cumulative salary and budget limit. After allocating the budget to seniors, the remaining budget is calculated. This leftover budget is then used to determine how many juniors can be hired, again using the cumulative salary approach. The process results in two counts: the number of seniors and juniors hired, which are then presented in a final summary table. This method is systematic, leveraging Pandas' capabilities for sorting, filtering, and cumulative sum calculations.

**Visualization of Approach:**

![fig](../Figures/2004/2004-1.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrames:

Candidates DataFrame (`candidates`):

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Senior</td>
        <td>50000</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Junior</td>
        <td>40000</td>
    </tr>
</table>
<br>


1. **Sorting and Filtering Candidates by Experience and Salary**

   Separate seniors and juniors and sort them by salary.

   ```python
   seniors = candidates[candidates['experience'] == 'Senior'].sort_values(by='salary')
   juniors = candidates[candidates['experience'] == 'Junior'].sort_values(by='salary')
   ```
   
   The first step is to categorize candidates based on their experience level ('Senior' or 'Junior') because our hiring strategy differs for each group. Within each group, we sort them by salary in ascending order. This sorting is crucial because we want to hire as many individuals as possible within a fixed budget, so starting with those who demand lower salaries helps maximize the number of hires.

`seniors`:

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Senior</td>
        <td>50000</td>
    </tr>
</table>
<br>

`juniors`:

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Junior</td>
        <td>40000</td>
    </tr>
</table>
<br>

2. **Calculating Cumulative Salaries**

   Compute the cumulative sum of salaries for both seniors and juniors.

   ```python
   seniors['cumulative_salary'] = seniors['salary'].cumsum()
   juniors['cumulative_salary'] = juniors['salary'].cumsum()
   ```
   
   The cumulative salary calculation tells us the total salary expense at each point in our sorted list of candidates. This step is key in understanding when we hit the budget limit as we go down the list of sorted candidates. It essentially sets up a running total of salary costs, helping us to pinpoint exactly where our budget will be exhausted.

`seniors`:

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
        <th>cumulative_salary</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Senior</td>
        <td>20000</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Senior</td>
        <td>20000</td>
        <td>40000</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Senior</td>
        <td>50000</td>
        <td>90000</td>
    </tr>
</table>
<br>

`juniors`:
<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
        <th>cumulative_salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Junior</td>
        <td>10000</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Junior</td>
        <td>10000</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Junior</td>
        <td>40000</td>
        <td>60000</td>
    </tr>
</table>
<br>

3. **Determining the Number of Seniors That Can be Hired**

   Find out how many seniors can be hired within the budget.

   ```python
   seniors_hired = seniors[seniors['cumulative_salary'] <= BUDGET]
   ```
   
   Given that our priority is to hire as many seniors as possible within the budget, this step filters out those seniors whose cumulative salary fits within our budget limit. It utilizes the cumulative salary we calculated earlier to make this determination.
   We will employ a greedy approach here, starting with hiring the senior with the lowest salary and continuing until we can no longer hire the next senior. Since we are hiring a batch of seniors with the lowest salaries, this method ensures that we employ the maximum number of seniors.

`seniors_hired`: 

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
    <tr>
        <td>11</td>
        <td>Senior</td>
        <td>20000</td>
    </tr>
</table>
<br>

4. **Adjusting Budget for Juniors**

   Calculate the remaining budget after hiring seniors.

   ```python
   remaining_budget = BUDGET - seniors_hired['salary'].sum()
   ```
   
   After hiring as many seniors as possible, we need to know how much of our budget is left for hiring juniors. This step subtracts the total salary committed to seniors from the original budget, giving us the remaining funds available.

`remaining_budget`: $30,000

5. **Determining the Number of Juniors That Can be Hired**

   Find out how many juniors can be hired with the remaining budget.
   
   ```python
   juniors_hired = juniors[juniors['cumulative_salary'] <= remaining_budget]
   ```
   
   With the adjusted budget, this step repeats the process of filtering candidates, but this time for juniors. We select those juniors whose cumulative salary fits within the remaining budget.
   Similarly, we will employ the greedy approach again, starting with hiring the juniors with the lowest salary and continuing until we can no longer hire the next junior. Since we are hiring a batch of juniors with the lowest salaries, this method ensures that we employ the maximum number of juniors.

`juniors_hired`:

<table border="1">
    <tr>
        <th>employee_id</th>
        <th>experience</th>
        <th>salary</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Junior</td>
        <td>10000</td>
    </tr>
</table>
<br>

6. **Preparing the Final Result**

   Create a DataFrame with the counts of hired seniors and juniors.
   
   ```python
   result = pd.DataFrame({
       'experience': ['Senior', 'Junior'],
       'accepted_candidates': [len(seniors_hired), len(juniors_hired)]
   })
   ```
   
   The final step is to present our findings in a clear and concise format. We create a DataFrame that aligns with the output structure specified in the problem statement - listing the number of seniors and juniors hired.

`result`:

<table border="1">
    <tr>
        <th>experience</th>
        <th>accepted_candidates</th>
    </tr>
    <tr>
        <td>Senior</td>
        <td>2</td>
    </tr>
    <tr>
        <td>Junior</td>
        <td>2</td>
    </tr>
</table>


#### Implementation

<iframe src="https://leetcode.com/playground/6QRRZP3N/shared" frameBorder="0" width="100%" height="500" name="6QRRZP3N"></iframe>

---

## Database

### Approach: Tiered Cumulative Salary Allocation Strategy

#### Intuition

Here's a breakdown of the logic:

1. **Sorting and Filtering Seniors and Juniors**

   ```sql
   WITH SeniorCandidates AS (
       SELECT *,
              SUM(salary) OVER (ORDER BY salary) AS cumulative_salary
       FROM Candidates
       WHERE experience = 'Senior'
   ),
   JuniorCandidates AS (
       SELECT *,
              SUM(salary) OVER (ORDER BY salary) AS cumulative_salary
       FROM Candidates
       WHERE experience = 'Junior'
   )
   ```
   
   The first step is to separate the candidates into two groups based on their experience: seniors and juniors. For each group, we sort the candidates by their salary in ascending order. This sorting is crucial because the goal is to hire as many individuals as possible within a fixed budget, and starting with those who have lower salary demands allows us to maximize the number of hires.

2. **Calculating Cumulative Salaries**

   The code for this step is integrated within the step above.

   While sorting the candidates, we also calculate the cumulative salary for each candidate. This is done using a window function that computes the running total of salaries. The cumulative salary helps us understand the total cost at each step as we add more candidates, which is vital for making decisions within the budget constraints.

3. **Determining the Number of Seniors That Can be Hired**

   ```sql
   WITH HiredSeniors AS (
       SELECT COUNT(*) AS count
       FROM SeniorCandidates
       WHERE cumulative_salary <= 70000
   )
   ```
   
   The priority is to hire as many seniors as possible within the budget. This part of the query filters out the senior candidates whose cumulative salary fits within the budget limit. It essentially counts how many senior candidates can be hired before the budget is exceeded. Note that seniors are ranked in descending order of salary, meaning that we will be hiring a batch of seniors with the lowest salaries, this method ensures that we employ the maximum number of seniors.

4. **Calculating Remaining Budget for Juniors**

   ```sql
   WITH RemainingBudget AS (
       SELECT 70000 - COALESCE((SELECT cumulative_salary FROM SeniorCandidates WHERE cumulative_salary <= 70000 ORDER BY cumulative_salary DESC LIMIT 1), 0) AS budget
   )
   ```
   
   After determining how many seniors can be hired, we need to know the remaining budget for hiring juniors. This step calculates the leftover budget after hiring seniors. The `COALESCE` function is used to handle cases where no seniors are hired, ensuring the remaining budget is still set correctly.

5. **Determining the Number of Juniors That Can be Hired**

   ```sql
   WITH HiredJuniors AS (
       SELECT COUNT(*) AS count
       FROM JuniorCandidates, RemainingBudget
       WHERE JuniorCandidates.cumulative_salary <= RemainingBudget.budget
   )
   ```
   
   Using the adjusted budget, this step repeats the process for juniors. It filters out junior candidates whose cumulative salary is within the remaining budget and counts the number of juniors that can be hired. Similarly, the juniors are ranked in descending order of salary, meaning that we will be hiring a batch of juniors with the lowest salaries, this method ensures that we employ the maximum number of juniors.

6. **Preparing the Final Result**

   ```sql
   SELECT 'Senior' AS experience, (SELECT count FROM HiredSeniors) AS accepted_candidates
   UNION
   SELECT 'Junior' AS experience, (SELECT count FROM HiredJuniors) AS accepted_candidates;
   ```
   
   The final step is to combine the results from the previous steps to get the total counts of hired seniors and juniors. The `UNION` operator is used to merge the results into one table, aligning with the output structure specified in the problem statement.


#### Implementation


```mysql []
WITH SeniorCandidates AS (
  SELECT 
    *, 
    SUM(salary) OVER (
      ORDER BY 
        salary
    ) AS cumulative_salary 
  FROM 
    Candidates 
  WHERE 
    experience = 'Senior'
), 
HiredSeniors AS (
  SELECT 
    COUNT(*) AS count 
  FROM 
    SeniorCandidates 
  WHERE 
    cumulative_salary <= 70000
), 
RemainingBudget AS (
  SELECT 
    70000 - COALESCE(
      (
        SELECT 
          cumulative_salary 
        FROM 
          SeniorCandidates 
        WHERE 
          cumulative_salary <= 70000 
        ORDER BY 
          cumulative_salary DESC 
        LIMIT 
          1
      ), 0
    ) AS budget
), 
JuniorCandidates AS (
  SELECT 
    *, 
    SUM(salary) OVER (
      ORDER BY 
        salary
    ) AS cumulative_salary 
  FROM 
    Candidates 
  WHERE 
    experience = 'Junior'
), 
HiredJuniors AS (
  SELECT 
    COUNT(*) AS count 
  FROM 
    JuniorCandidates, 
    RemainingBudget 
  WHERE 
    JuniorCandidates.cumulative_salary <= RemainingBudget.budget
) 
SELECT 
  'Senior' AS experience, 
  (
    SELECT 
      count 
    FROM 
      HiredSeniors
  ) AS accepted_candidates 
UNION 
SELECT 
  'Junior' AS experience, 
  (
    SELECT 
      count 
    FROM 
      HiredJuniors
  ) AS accepted_candidates;

```