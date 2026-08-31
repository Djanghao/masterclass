# Official Solution

**Link:** [https://leetcode.com/problems/winning-candidate/solution/](https://leetcode.com/problems/winning-candidate/solution/)

---

[TOC]

# Solution
---

### Overview

 **Visualization of approach**
![fig](../Figures/574/574-1.png)

---

## pandas

### Approach: Group and Aggregate for Maximum

#### Intuition

Let's break down the intuition behind the algorithm:

1. **Counting Votes for Each Candidate**:
   ```python
   vote_counter = vote.groupby('candidateId').size().reset_index(name='vote_count')
   ```
   - `groupby('candidateId')`: This method is grouping the `vote` DataFrame by the `candidateId`. This will create a grouping for each unique `candidateId`, where each group contains the rows (votes) for that candidate.
   - `size()`: After grouping, this method is used to count the number of elements (votes) in each group (candidate).
   - `reset_index(name='vote_count')`: This is resetting the index of the resulting Series to convert it into a DataFrame. The counts are placed in a new column named `vote_count`.

2. **Finding the ID of the Winning Candidate**:
   ```python
   winner_id = vote_counter.loc[vote_counter['vote_count'].idxmax(), 'candidateId']
   ```
   - `vote_counter['vote_count'].idxmax()`: This is finding the index of the maximum value in the `vote_count` column of the `vote_counter` DataFrame, which corresponds to the ID of the candidate with the most votes.
   - `.loc`: This indexer is used to access a group of rows and columns by labels or booleans. In this case, it is used to access the `candidateId` of the row with the maximum `vote_count`.

3. **Retrieving the Name of the Winning Candidate**:
   ```python
   return candidate[candidate['id'] == winner_id][['name']]
   ```
   - `candidate['id'] == winner_id`: This is creating a boolean mask, where each element is `True` if the `id` of the candidate matches the `winner_id` and `False` otherwise.
   - `candidate[candidate['id'] == winner_id]`: This is filtering the `candidate` DataFrame using the boolean mask to get the row of the winning candidate.
   - `[['name']]`: This is selecting only the `name` column from the filtered DataFrame, thus retrieving the name of the winning candidate.

The result is a DataFrame containing the name of the candidate who has received the most votes.

#### Implementation

<iframe src="https://leetcode.com/playground/P7WB5A97/shared" frameBorder="0" width="100%" height="0" name="P7WB5A97"></iframe>

---

## Database

### Approach: Group and Find the Maximum using the `ORDER BY` Clause

#### Intuition

Let's break down the intuition behind the query:

1. **Subquery**:
   - **`SELECT candidateId, COUNT(*) AS vote_count`**: This part of the subquery is counting the number of rows (votes) for each `candidateId` in the `Vote` table. The result is a list of `candidateId`s along with their respective vote counts.
   - **`FROM Vote`**: This specifies that we are selecting from the `Vote` table.
   - **`GROUP BY candidateId`**: We are grouping the results by `candidateId` so that we can count the number of votes each candidate received.
   - **`ORDER BY COUNT(*) DESC`**: After grouping, we are ordering the candidates based on their vote count in descending order, so the candidate with the most votes will be ranked first.
   - **`LIMIT 1`**: We only want the top candidate (the one with the most votes), so we limit the results to 1.

2. **Main Query**:
   - **`SELECT c.name`**: We are interested in the name of the winning candidate.
   - **`FROM Candidate AS c`**: We are selecting from the `Candidate` table and aliasing it as `c` for brevity.
   - **`JOIN ( ... ) v ON c.id = v.candidateId`**: We are joining the `Candidate` table with the results of our subquery (aliased as `v`) based on the `id` from the `Candidate` table and `candidateId` from the subquery. This is done to fetch the name of the candidate who has the most votes.

By combining the subquery and the main query in this way, we are able to determine the name of the candidate who received the highest number of votes, fulfilling the requirement of reporting the name of the winning candidate.

#### Implementation

**MySQL**

```sql
SELECT 
  c.name 
FROM 
  Candidate AS c 
  JOIN (
    SELECT 
      candidateId, 
      COUNT(*) AS vote_count 
    FROM 
      Vote 
    GROUP BY 
      candidateId 
    ORDER BY 
      COUNT(*) DESC 
    LIMIT 
      1
  ) AS v 
  ON c.id = v.candidateId;


```