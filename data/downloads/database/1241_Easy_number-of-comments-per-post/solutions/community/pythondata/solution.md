# Pandas Solution

**Author:** mlearngo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-comments-per-post/solutions/4078173/](https://leetcode.com/problems/number-of-comments-per-post/solutions/4078173/)

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

def count_comments(submissions: pd.DataFrame) -> pd.DataFrame:
    unique_submissions = submissions.drop_duplicates()

    posts = unique_submissions[unique_submissions['parent_id'].isna()]
    comments = unique_submissions[unique_submissions['parent_id'].notna()]

    merged = posts.merge(comments, left_on='sub_id', right_on='parent_id', how='left', suffixes=('_post', '_comment'))

    result = merged.groupby('sub_id_post').agg(
        post_id=('sub_id_post', 'first'),
        number_of_comments=('sub_id_comment', 'nunique')
    ).sort_values(by='post_id').reset_index(drop=True)

    return result
```