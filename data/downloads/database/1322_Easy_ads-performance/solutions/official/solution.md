# Official Solution

**Link:** [https://leetcode.com/problems/ads-performance/solution/](https://leetcode.com/problems/ads-performance/solution/)

---

[TOC]

# Solution

---

## pandas
### Approach 1: Pandas DataFrame CTR Calculation using Conditional Aggregation and Transformation

#### Intuition

The Click-Through Rate (CTR) is a widely used metric in online advertising to measure the success of an ad campaign. It is defined as:

$ CTR = \left( \frac{\text{Number of Clicks}}{\text{Number of Clicks} + \text{Number of Views}} \right) \times 100\% $

In this case, we are tasked with computing the CTR for each individual ad based on user interactions recorded in a dataframe. The challenge is to correctly handle cases where an ad has not been clicked or viewed at all, to avoid a division by zero error.

Let's step through the process and examine the intermediate outputs generated at each stage:

Let's begin with the following `ads` input DataFrame:

<table>
<tr>
    <th>ad_id</th>
    <th>user_id</th>
    <th>action</th>
</tr>
<tr>
    <td>1</td>
    <td>1</td>
    <td>Clicked</td>
</tr>
<tr>
    <td>2</td>
    <td>2</td>
    <td>Clicked</td>
</tr>
<tr>
    <td>3</td>
    <td>3</td>
    <td>Viewed</td>
</tr>
<tr>
    <td>5</td>
    <td>5</td>
    <td>Ignored</td>
</tr>
<tr>
    <td>1</td>
    <td>7</td>
    <td>Ignored</td>
</tr>
<tr>
    <td>2</td>
    <td>7</td>
    <td>Viewed</td>
</tr>
<tr>
    <td>3</td>
    <td>5</td>
    <td>Clicked</td>
</tr>
<tr>
    <td>1</td>
    <td>4</td>
    <td>Viewed</td>
</tr>
<tr>
    <td>2</td>
    <td>11</td>
    <td>Viewed</td>
</tr>
<tr>
    <td>1</td>
    <td>2</td>
    <td>Clicked</td>
</tr>
</table>

<br>

**Step 1: Grouping by 'ad_id'**

```python
grouped_ads = ads.groupby('ad_id')['action']
```

We group the data by `ad_id`, and we select the 'action' column for further processing.

**Step 2: Applying a lambda function to calculate CTR**

Next, we'll apply a lambda function to calculate the CTR. Here, we will see the intermediate output for a single group (let's take `ad_id` = 1 as an example):

```python
example_group = grouped_ads.get_group(1)
num_clicked = sum(example_group == 'Clicked')  # Output: 3
num_viewed = sum(example_group == 'Viewed')    # Output: 1
```

In this group:
- Number of Clicks: 3
- Number of Views: 1

**Step 3: Calculating CTR**

Using these values, we can proceed to calculate the CTR:

```python
ctr = (num_clicked / (num_clicked + num_viewed)) * 100  # Output: 75.0
```

For `ad_id` 1, the CTR is 75.0%.

**Step 4: Creating a Dataframe with CTR values**

After processing all groups, we will have a series with the CTR values. For visualization, it is converted to a table and the column is named 'ctr':

```python
ctr_df = ctr.reset_index()
ctr_df.columns = ['ad_id', 'ctr']
```

The dataframe at this point looks like this:

<table>
<tr>
    <th>ad_id</th>
    <th>ctr</th>
</tr>
<tr>
    <td>1</td>
    <td>75.00</td>
</tr>
<tr>
    <td>2</td>
    <td>33.33</td>
</tr>
<tr>
    <td>3</td>
    <td>50.00</td>
</tr>
<tr>
    <td>5</td>
    <td>0.00</td>
</tr>
</table>
<br>

**Step 5: Sorting the Results**

Finally, we sort the results by the 'ctr' column in descending order and by 'ad_id' in ascending order in case of a tie:

```python
result_df = ctr_df.sort_values(by=['ctr', 'ad_id'], ascending=[False, True])
```

This is your final output:

<table>
<tr>
    <th>ad_id</th>
    <th>ctr</th>
</tr>
<tr>
    <td>1</td>
    <td>75.00</td>
</tr>
<tr>
    <td>3</td>
    <td>50.00</td>
</tr>
<tr>
    <td>2</td>
    <td>33.33</td>
</tr>
<tr>
    <td>5</td>
    <td>0.00</td>
</tr>
</table>
<br>

The final output is a dataframe that succinctly presents the `ad_id` along with its respective CTR, showcasing the performance of each ad based on the historical data of user actions.


#### Implementation

<iframe src="https://leetcode.com/playground/ZUMQUdES/shared" frameBorder="0" width="100%" height="378" name="ZUMQUdES"></iframe>

---

## Database
### Approach 1: Conditional Aggregation for CTR Calculation

#### Intuition

Let's break down the intuition behind calculating the Click-Through Rate (CTR) using the SQL query:

**Step 1: Calculating the Components of CTR**

First, we want to calculate the two main components of the CTR formula for each ad:
1. **Number of clicks:** How many times the ad was clicked.
2. **Number of views:** How many times the ad was viewed.

In SQL, we use conditional aggregation to calculate these values within a single query. The expressions `SUM(action = 'Clicked')` and `SUM(action = 'Viewed')` are used to count the number of 'Clicked' and 'Viewed' actions for each ad, respectively. Essentially, these expressions create a boolean mask (1 for true and 0 for false) for each action type, and then sum up these values to get the count of each action type.

**Step 2: Applying the CTR Formula**

Next, we apply the CTR formula:

$ \text{CTR} = \left( \frac{\text{number of clicks}}{\text{number of clicks + number of views}} \right) \times 100 $

We implement this formula directly in SQL using the counts calculated in Step 1. The calculation is performed for each ad separately.

**Step 3: Handling Special Cases (Zero Views and Zero Clicks)**

We encounter a problem when an ad has zero views and zero clicks, which would result in a division by zero error in the CTR formula. To handle this, we use the `IFNULL` function to replace potential `NULL` values (arising from division by zero) with a default value of 0. This ensures that the CTR of ads with zero views and clicks is reported as 0.00.

**Step 4: Rounding the CTR Value**

To make the CTR values more readable, we round them to two decimal places using the `ROUND` function.

**Step 5: Ordering the Results**

Finally, we want the output to be sorted by CTR in descending order, so that ads with the highest CTR come first. If two ads have the same CTR, we further sort them by `ad_id` in ascending order, so that the ad with the smaller ID comes first. This is achieved with the `ORDER BY` clause where we first order by `ctr DESC` and then by `ad_id ASC`.

By grouping the results by `ad_id` and ordering them as specified, we ensure the final output meets the requirements stated in the problem.


#### Implementation

```sql
SELECT
    ad_id,
    ROUND(
        IFNULL(
            (SUM(action = 'Clicked') / (SUM(action = 'Clicked') + SUM(action = 'Viewed'))) * 100,
            0
        ), 
        2
    ) AS ctr
FROM
    Ads
GROUP BY
    ad_id
ORDER BY
    ctr DESC,
    ad_id ASC;

```