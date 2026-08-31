# Official Solution

**Link:** [https://leetcode.com/problems/reported-posts/solution/](https://leetcode.com/problems/reported-posts/solution/)

---

[TOC]

# Solution

---



## pandas


### Approach 1: Using groupby()


#### Algorithm


1. We first filter the `actions` table to include only actions that occurred on July 4, 2019.

2. Next, we narrow down the data to only include 'report' actions using another filter.

3. We then use the Pandas groupby function to group the filtered data by the 'extra' column, which contains the report reasons. For each group, we count the number of unique 'post_id's, representing the number of posts reported for that reason.

4. Finally, we rename the columns in the result to make it more descriptive and return the result as a Pandas DataFrame.


#### Code 

```python

import pandas as pd

def reported_posts(actions: pd.DataFrame) -> pd.DataFrame:
    # Filter the 'actions' table to include only actions on the specified date (July 4, 2019).
    actions = actions[actions['action_date'] == '2019-07-04']
    
    # Filter further to include only 'report' actions.
    actions = actions[actions['action'] == 'report']

    # Group the filtered data by the 'extra' column (report reasons) and count the unique 'post_id's.
    report_counts = actions.groupby('extra')['post_id'].nunique().reset_index()
    
    # Rename the columns for clarity.
    report_counts = report_counts.rename(columns={
        'extra': 'report_reason',
        'post_id': 'report_count'
    })

    return report_counts


```

<br>

## Database


### Approach 1: Use GROUP BY Clause


#### Algorithm

1. Initialize Query: Start an SQL query.

2. Select Columns: Choose extra as report_reason and count distinct post_id as report_count.

3. Filter Data: Include rows with action_date as '2019-07-04' and action as 'report'.

4. Group Data: Group results by report_reason.

5. Execute Query: Execute the query and retrieve the report counts by reason.


#### Code

```sql

SELECT
    extra AS report_reason,
    COUNT(DISTINCT post_id) AS report_count
FROM Actions
WHERE action_date = '2019-07-04' AND 
      action = 'report'
GROUP BY report_reason;
```


<br>