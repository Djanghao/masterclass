# Official Solution

**Link:** [https://leetcode.com/problems/popularity-percentage/solution/](https://leetcode.com/problems/popularity-percentage/solution/)

---

[TOC]

# Solution

---

## pandas

### Approach: Bidirectional Friendship Expansion and Aggregation

The high-level steps and the overall strategy of the solution:

1. **Bidirectional Friendship Expansion:** The first part of the approach involves expanding the friendship data to account for the bidirectional nature of friendships. In the dataset, each row represents a friendship with two participants, `user1` and `user2`. A friendship is inherently mutual, that is, if `user1` is a friend of `user2`, the reverse is also true. However, this reversed friendship is not recorded in the original dataset. To capture this, the approach creates an expanded dataset where each friendship is represented twice - once from each user's perspective.

2. **Aggregation:** The second part involves aggregating this expanded data to count the number of unique friends for each user and then using these counts to calculate the popularity percentage. The aggregation is done with respect to each user, treating them as the primary subject in the friendship relation. This step provides the necessary counts for the subsequent calculation of popularity percentages.

3. **Percentage Calculation and Result Formatting:** Finally, the approach involves calculating the popularity percentage for each user based on the aggregated data and formatting the results into a clean, readable DataFrame. This step ensures that the output is not only accurate but also presentable and easy to interpret.

**Visualization of Approach:**

![fig](../Figures/2720/2720-1.png)

#### Intuition

Let's review the intuition behind each step given the following input DataFrame:

Friends DataFrame (`friends`):

<table>
  <tr>
    <th>user1</th>
    <th>user2</th>
  </tr>
  <tr><td>2</td><td>1</td></tr>
  <tr><td>1</td><td>3</td></tr>
  <tr><td>4</td><td>1</td></tr>
  <tr><td>1</td><td>5</td></tr>
  <tr><td>1</td><td>6</td></tr>
  <tr><td>2</td><td>6</td></tr>
  <tr><td>7</td><td>2</td></tr>
  <tr><td>8</td><td>3</td></tr>
  <tr><td>3</td><td>9</td></tr>
</table>
<br>


1. Expand Friendships in Both Directions

   ```python
   expanded_friends = pd.concat([
       friends.rename(columns={'user1': 'primary_user', 'user2': 'friend_user'}),
       friends.rename(columns={'user1': 'friend_user', 'user2': 'primary_user'})
   ])
   ```
   - In the original data, each row represents a friendship between two users, `user1` and `user2`. However, the concept of friendship is bidirectional - if `user1` is a friend of `user2`, then `user2` is also a friend of `user1`, but the latter is not shown in the data.
   - To capture this bidirectionality, we create two versions of each friendship: one where `user1` is considered the "primary user" and `user2` is the "friend user", and another where these roles are reversed.
   - By concatenating these two versions, we ensure that each user's friendships are fully represented, regardless of whether they were originally listed as `user1` or `user2`.

`expanded_friends`: 

<table>
  <tr>
    <th>primary_user</th>
    <th>friend_user</th>
  </tr>
  <tr><td>2</td><td>1</td></tr>
  <tr><td>1</td><td>3</td></tr>
  <tr><td>4</td><td>1</td></tr>
  <tr><td>1</td><td>5</td></tr>
  <tr><td>1</td><td>6</td></tr>
  <tr><td>2</td><td>6</td></tr>
  <tr><td>7</td><td>2</td></tr>
  <tr><td>8</td><td>3</td></tr>
  <tr><td>3</td><td>9</td></tr>
  <tr><td>1</td><td>2</td></tr>
  <tr><td>3</td><td>1</td></tr>
  <tr><td>1</td><td>4</td></tr>
  <tr><td>5</td><td>1</td></tr>
  <tr><td>6</td><td>1</td></tr>
  <tr><td>6</td><td>2</td></tr>
  <tr><td>2</td><td>7</td></tr>
  <tr><td>3</td><td>8</td></tr>
  <tr><td>9</td><td>3</td></tr>
</table>
<br>

2. Count the Number of Unique Friends for Each User

   ```python
   friend_count = expanded_friends.groupby('primary_user')['friend_user'].nunique()
   ```

   - Now that we have a complete list of friendships for each user (considering both directions), we need to count how many unique friends each user has.
   - We use `groupby` on `primary_user` to gather all records pertaining to each user.
   - The `nunique()` function counts the number of unique `friend_user` values for each `primary_user`. This gives us the total number of different friends each user has.

`friend_count` (note that this is a `Series` and not a `DataFrame`):

<table>
  <tr>
    <th>primary_user</th>
  </tr>
  <tr><td>1</td><td>5</td></tr>
  <tr><td>2</td><td>3</td></tr>
  <tr><td>3</td><td>3</td></tr>
  <tr><td>4</td><td>1</td></tr>
  <tr><td>5</td><td>1</td></tr>
  <tr><td>6</td><td>2</td></tr>
  <tr><td>7</td><td>1</td></tr>
  <tr><td>8</td><td>1</td></tr>
  <tr><td>9</td><td>1</td></tr>
</table>
<br>

3. Calculate the Total Number of Users

   ```python
   total_users = expanded_friends['primary_user'].nunique()
   ```

   - To calculate the popularity percentage, we need to know the total number of users on the platform.
   - We extract all user IDs from `primary_user` column and then use the `.nunique()` method to find all unique user IDs.
   - The length of this unique user ID list represents the total number of users on the platform.

`total_users`: 9

4. Calculate the Popularity Percentage

   ```python
   popularity_percentage = 100 * friend_count / total_users
   ```

   - The popularity percentage is defined as the proportion of the total user base that each user is friends with.
   - We calculate this by dividing the number of unique friends each user has (from step 2) by the total number of users (from step 3).
   - Multiplying this ratio by 100 converts it into a percentage.

 `popularity_percentage` (note that this is a `Series` and not a `DataFrame`):

 <table>
  <tr>
    <th>primary_user</th>
  </tr>
  <tr><td>1</td><td>55.555556</td></tr>
  <tr><td>2</td><td>33.333333</td></tr>
  <tr><td>3</td><td>33.333333</td></tr>
  <tr><td>4</td><td>11.111111</td></tr>
  <tr><td>5</td><td>11.111111</td></tr>
  <tr><td>6</td><td>22.222222</td></tr>
  <tr><td>7</td><td>11.111111</td></tr>
  <tr><td>8</td><td>11.111111</td></tr>
  <tr><td>9</td><td>11.111111</td></tr>
</table>
<br>

5. Create the Result DataFrame

   ```python
   result = pd.DataFrame({
       'user1': popularity_percentage.index,
       'percentage_popularity': popularity_percentage.values.round(2)
   }).reset_index(drop=True)
   ```

   - Finally, we need to present our results in a readable format.
   - We create a new DataFrame where `user1` corresponds to each user (the index from our `friend_count` series) and `percentage_popularity` is the calculated popularity percentage.
   - We round the popularity percentage to two decimal places as requested in the problem statement.
   - The `reset_index(drop=True)` ensures that the DataFrame has a clean, sequential index.

`result`:

<table>
  <tr>
    <th>user1</th>
    <th>percentage_popularity</th>
  </tr>
  <tr><td>1</td><td>55.56</td></tr>
  <tr><td>2</td><td>33.33</td></tr>
  <tr><td>3</td><td>33.33</td></tr>
  <tr><td>4</td><td>11.11</td></tr>
  <tr><td>5</td><td>11.11</td></tr>
  <tr><td>6</td><td>22.22</td></tr>
  <tr><td>7</td><td>11.11</td></tr>
  <tr><td>8</td><td>11.11</td></tr>
  <tr><td>9</td><td>11.11</td></tr>
</table>
<br>

#### Implementation

<iframe src="https://leetcode.com/playground/2BP3qaQs/shared" frameBorder="0" width="100%" height="500" name="2BP3qaQs"></iframe>

---

## Database

### Approach: Bidirectional Friendship Popularity Analysis

The approach effectively accounts for the bidirectional nature of friendships in a social network and calculates what percentage of the entire network each user is connected to. This gives a measure of how "popular" each user is in terms of their connectedness to other users in the network.

#### Intuition

Here's a breakdown of the logic:

1. Common Table Expression: `FriendshipsExpanded`

   1.1 Expanding Friendships:
   - The query starts with a Common Table Expression (CTE) named `FriendshipsExpanded`.
   - The purpose of this CTE is to create a comprehensive view of friendships where each friendship is represented twice: once with `user1` as the primary user and `user2` as the friend, and again with `user2` as the primary user and `user1` as the friend.
   - This expansion is necessary because the original `Friends` table likely represents friendships in a single direction (e.g., `user1` is friends with `user2`), but in reality, friendships are bidirectional (`user2` is also friends with `user1`).
   - The `UNION` is used to ensure that all instances of friendships are included without duplicates. This is important for the next steps of the calculation.

2. Main Query

   2.1 Selecting and Grouping:
   - The main query selects `user1` from the expanded friendships. Here, `user1` represents each user in the dataset.
   - It then groups the results by `user1`. This grouping is crucial for calculating the number of friends each user has (i.e., the number of unique `user2` entries for each `user1`).

   2.2 Calculating Popularity Percentage:
   - For each user (now referred to as `user1`), the query counts the number of distinct `user2` values. This count represents the number of unique friends each user has.
   - The total number of users in the network is calculated using `COUNT(user1) OVER ()`. This window function counts the total number of entries in `user1` across the entire expanded dataset, effectively giving the size of the network.
   - The popularity percentage is then calculated by dividing the number of friends (unique `user2` counts) by the total number of users in the network and multiplying by 100 to convert it into a percentage.
   - The `ROUND` function is applied to round this percentage to two decimal places for readability.

   2.3 Ordering the Results:
   - Finally, the results are ordered by `user1`. This ensures that the output is sorted by user ID, making it easier to read and interpret.


#### Implementation


```mysql []
WITH FriendshipsExpanded AS (
  -- Expanding friendships to account for both user1 and user2 as primary users
  SELECT 
    user1, 
    user2 
  FROM 
    Friends 
  UNION
  SELECT 
    user2, 
    user1 
  FROM 
    Friends
) 
SELECT 
  user1, 
  ROUND(
    -- Calculating the percentage popularity
    100 * COUNT(DISTINCT user2) / COUNT(user1) OVER (), 
    2
  ) AS percentage_popularity 
FROM 
  FriendshipsExpanded 
GROUP BY 
  user1 -- Grouping results by primary user
ORDER BY 
  user1;

```