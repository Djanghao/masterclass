# Official Solution

**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solution/](https://leetcode.com/problems/get-highest-answer-rate-question/solution/)

---

[TOC]

# Solution

---

## pandas

The general steps to approach this problem are:
   - calculate the answer rate for each `question_id`;
   - identify the highest answer rate;
   - find the `question_id` that has the answer rate that equals to the highest answer rate;
   - additionally, we will need to find the smallest `question_id` if there are more than one `question_id` that has the highest answer rate.

### Approach 1: Getting the Highest and the Smallest Using sort_values() and nsmallest()

#### Algorithm

This approach strictly follows the general steps and is very similar to the first approach under the Database section. 

Firstly, we create two separate DataFrames to store the number of times each question is showed and answered.

```python
#the number of times a question is showed
df1 = survey_log[survey_log['action'] == 'show'].groupby('question_id', as_index=False).agg(show_cnt=('timestamp', 'count'))

#the number of times a question is answered
df2 = survey_log[survey_log['action'] == 'answer'].groupby('question_id', as_index=False).agg(answer_cnt=('timestamp', 'count'))
```

Below is the output from this step:

| question_id | show_cnt |
| ----------- | -------- |
| 285         | 1        |
| 369         | 1        |

| question_id | answer_cnt |
| ----------- | ---------- |
| 285         | 1          |

As we can see from the output, the questions that are showed but not answered will not be stored in the `df2`. Therefore, we need to left merge `df1` to `df2` if we want to calculate the answer rate for all questions. In this step, we also set null values to 0 using `fillna()` for later calculation. 

```python
df = df1.merge(df2, on='question_id', how='left').fillna(0)
```

Now we have the number of times each `question_id` is showed and answered.

| question_id | show_cnt | answer_cnt |
| ----------- | -------- | ---------- |
| 285         | 1        | 1          |
| 369         | 1        | 0          |

With the number of times each `question_id` is showed and answered, we can calculate the answer rate for each `question_id`. We store the result in an column called `rate`. 

```python
df['rate'] = df.answer_cnt/df.show_cnt
```

| question_id | show_cnt | answer_cnt | rate |
| ----------- | -------- | ---------- | ---- |
| 285         | 1        | 1          | 1    |
| 369         | 1        | 0          | 0    |

The next step is to identify the highest answer rate and the `question_id` that has the highest answer rate. To do this, we can apply the function `max()` to the column `rate` and select only the `question_id` that equals to value. To identify the smallest `question_id` from the `question_id`s that have the highest answer rate, we can group the records by the `rate` and find the smallest `question_id` using function `nsmallest()`. Lastly but not least, we update the column name as per requested for the final output. 

```python
df = df[df['rate'] == df['rate'].max()].groupby('rate')['question_id'].nsmallest(1).to_frame().rename(columns={'question_id': 'survey_log'})
```

#### Implementation
​<iframe src="https://leetcode.com/playground/FPKZRKu7/shared" frameBorder="0" width="100%" height="310" name="FPKZRKu7"></iframe>

### Approach 2: Getting the Highest and the Smallest Using sort_values() and head()

#### Algorithm

The general idea of this appraoch is similar to the first one: we want to calculate the answer rate for each question and identify the `question_id` that has the highest answer rate (the smallest `question_id` if multiple questions have the same maximum answer rate). To differentiate, we use different functions to achieve this. 

Firstly, we calculate the answer rate for each `question_id`. Instead of calculating the number of times each question is showed and answer by users in separate DataFrames and then `merge` to calculate the answer rate, we can get the answer rate directly by using `lambda`. The calculation is grouped at the `question_id` level. 

```python
df = survey_log.groupby(
   'question_id', 
   as_index=False
).agg(
   rate = ('action', 
   lambda x: (x == 'answer').sum() / (x == 'show').sum())
)
```

We are getting the answer rate directly for each `question_id`. 

| question_id | rate |
| ----------- | ---- |
| 285         | 1    |
| 369         | 0    |


To get the smallest `question_id` that have the highest answer rate, we sort the `question_id` by the answer rate in an descending order and the `question_id` itself in an ascending order. This is very similar to how we use `RANK()` in the first appraoch under Database section. After sorting the values, the `question_id` that we are looking for is listed at the top. We then select the first record from the list using `head(1)`, which is similar to `LIMIT 1` in the second approach under the Database section. To get the final output, we select only the column `question_id` and rename the column as per requested. 

```python
df = df.sort_values(
   ['rate', 'question_id'], 
   ascending=[False, True]
).head(
   1
)[['question_id']].rename(
   columns={'question_id': 'survey_log'}
)
```

#### Implementation
<iframe src="https://leetcode.com/playground/5qL6uHnr/shared" frameBorder="0" width="100%" height="429" name="5qL6uHnr"></iframe>

----
## Database

The general steps to approach this problem are:
   - calculate the answer rate for each `question_id`;
   - identify the highest answer rate;
   - find the `question_id` that has the answer rate that equals to the highest answer rate;
   - additionally, we will need to find the smallest `question_id` if there are more than one `question_id` that has the highest answer rate.

### Approach 1: Getting the Highest and the Smallest Using RANK()

#### Algorithm

This approach strictly follows the general steps and is very similar to the first approach under the Pandas section. 

We can start by calculating the answer rate for each question. In the CTE, we can calculate the number of times a question is showed or answered using `SUM(CASE WHEN)` per values from the column `action`. The result is `GROUP BY` the `question_id` as each `question_id` will have one answer rate. 

```sql
WITH answer_rate AS
   (
   SELECT question_id, 
   SUM(CASE WHEN action = 'answer' THEN 1 ELSE 0 END) / SUM(CASE WHEN action = 'show' THEN 1 ELSE 0 END) AS rate
   FROM surveylog
   GROUP BY question_id
   )

Now we have the answer rate (`rate`) for each `question_id`. 

| question_id | rate |
| ----------- | ---- |
| 285         | 1    |
| 369         | 0    |

In the subquery, we want to identify the question that has the maximum answer rate. We cannot simply applying `MAX()` here since we only want to return one `question_id` if there are multiple ones that have the maximum answer rate. In this case, we `RANK()` the `question_id`s by the answer rate in a descending order and the `question_id` itself in an ascending order, so the first value in the sorted list is the `question_id` that we are looking for.  

```sql
SELECT question_id, 
   RANK()OVER(ORDER BY rate DESC, question_id) AS rnk
FROM answer_rate
```

In the subquery, we have a rank for each `question_id` based on their answer rate and the `question_id` itself. 

| question_id | rnk |
| ----------- | --- |
| 285         | 1   |
| 369         | 2   |

Lastly, we select the first `question_id` in the main query and update the column name as requested by the final output. 

```sql
SELECT question_id AS survey_log
FROM 
   (
   SELECT question_id, 
      RANK()OVER(ORDER BY rate DESC question_id) AS rnk
   FROM answer_rate
   ) AS t0
WHERE rnk = 1
```

#### Implementation

```mysql []
WITH answer_rate AS
   (
   SELECT question_id, 
   SUM(CASE WHEN action = 'answer' THEN 1 ELSE 0 END) 
   / SUM(CASE WHEN action = 'show' THEN 1 ELSE 0 END) AS rate
   FROM surveylog
   GROUP BY question_id
   )
SELECT question_id AS survey_log
FROM 
   (
   SELECT question_id, 
      RANK()OVER(ORDER BY rate DESC question_id) AS rnk
   FROM answer_rate
   ) AS t0
WHERE rnk = 1
```
<!-- an empty line to separate approaches -->
### Approach 2: Getting the Highest and the Smallest Using ORDER BY + LIMIT

#### Algorithm

The other common way to get the top results is to `ORDER` the values first and keep only the wanted rows using `LIMIT`.

The general idea remains the same. We want to order the `question_id`s by the answer rate in an descending order and the `question_id` itself in an ascending order so the query can return the smallest `question_id` if there are multiples questions that have the highest answer rate. Instead of calculating the answer rate in a subquery or CTE, we put the calculation directly in the `ORDER BY` clause. After sorting the list, we can select the top result by using `LIMIT`. The results are grouped by the `question_id` as we want to return only one `question_id`, and we can also update the column name accordingly to get the ideal final output. 

#### Implementation

```mysql []
 SELECT question_id AS survey_log
 FROM surveylog
 GROUP BY question_id
 ORDER BY SUM(CASE WHEN action = 'answer' THEN 1 ELSE 0 END)
   / SUM(CASE WHEN action = 'show' THEN 1 ELSE 0 END) DESC
   , question_id ASC
 LIMIT 1
```
----