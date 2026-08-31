# Easy to follow logic using ROLLING()

**Author:** jonnyz
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bursty-behavior/solutions/5108408/](https://leetcode.com/problems/find-bursty-behavior/solutions/5108408/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def find_bursty_behavior(posts: pd.DataFrame) -> pd.DataFrame:
    
    # Date filter as described in problem statement
    posts = posts[posts['post_date'].astype(str) <= '2024-02-28']

    # Set the index to the date in order to use .rolling() method
    # Index must be sorted in order for .rolling() to work properly
    posts = posts.set_index('post_date').sort_index()

    # Create 7 day windows for each user where we find the total number of posts 
    df = posts.groupby('user_id')['post_id'].rolling('7D').count().reset_index()\\
    .rename(columns={'post_id':'weekly_posts'})

    # Get the max weekly post count per user on the same row using transform()
    df['max_weekly_posts'] = df.groupby('user_id')['weekly_posts'].transform('max')

    # Find the avg weekly posts per user (total posts / 4)
    avg_weekly = posts.groupby('user_id')['post_id'].count().reset_index().rename(columns={'post_id':'avg_weekly_posts'})
    avg_weekly['avg_weekly_posts'] = avg_weekly['avg_weekly_posts'] / 4

    # Join avg_weekly with df 
    df = df.merge(avg_weekly, on='user_id')

    # Apply filter for where (max_weekly_posts >= 2 * avg_weekly_posts) and drop duplicates 
    return df[df['max_weekly_posts'] >= df['avg_weekly_posts'] * 2][['user_id','max_weekly_posts','avg_weekly_posts']]\\
    .rename(columns={'max_weekly_posts':'max_7day_posts'}).drop_duplicates()
```