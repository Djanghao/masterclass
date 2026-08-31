# step by step comment explain

**Author:** zhangmanyuzmy
**Votes:** 2
**Link:** [https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4806673/](https://leetcode.com/problems/friends-with-no-mutual-friends/solutions/4806673/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Explain the df returned after step 3:

In step 3, the DataFrame df contains pairs of user IDs where the user represented by user_id1 in the original DataFrame (representing the left side of the friendship relationship) shares at least one friend with the user represented by user_id2 in the original DataFrame (representing the right side of the friendship relationship).

The structure of df after step 3 is such that it only retains rows where the user_id2 of the original DataFrame matches the user_id1_y of the merged DataFrame. This ensures that the resulting pairs share at least one common friend.

Here's what each column in the DataFrame df represents after step 3:

user_id1_x: The user ID from the original DataFrame corresponding to the left side of the friendship relationship.
user_id2_x: The user ID from the original DataFrame corresponding to the right side of the friendship relationship.
Therefore, the pairs of user IDs in df represent friendships where ***the user on the left side has at least one common friend with the user on the right side***.

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

def friends_with_no_mutual_friends(friends: pd.DataFrame) -> pd.DataFrame:
    # 1. Concatenate the original dataframe with itself, swapping the user_id1 and user_id2 columns
    buddies = pd.concat([friends, friends.rename(columns={'user_id2': 'user_id1', 'user_id1': 'user_id2'})])

    # 2. Merge the dataframe with itself to find pairs that share at least one friend
    df = friends.merge(buddies, how='outer', on='user_id1').merge(buddies, how='outer', left_on='user_id2_x', right_on='user_id2')

    # 3. Filter pairs where user_id2 of the original dataframe matches user_id1_y of the merged dataframe
    df = df[df.user_id2_y == df.user_id1_y].iloc[:, [0, 1]]

    # 4. Merge the original dataframe with the filtered dataframe to find pairs without mutual friends
    df = friends.merge(df, how='left', left_on=['user_id1', 'user_id2'], right_on=['user_id1_x', 'user_id2_x'])

    # 5. Filter out pairs where the left join did not find a match (indicating no mutual friends)
    df = df[df.user_id1_x.isna()].iloc[:, [0, 1]]

    # 6. Sort the result by user_id1 and user_id2 for consistency
    df = df.sort_values(['user_id1', 'user_id2'])

    # 7. Return the final dataframe with pairs of friends who have no mutual friends
    return df

```