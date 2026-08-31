# 💯🔥[Pandas] Very Straight forward Approach (easy to understand)🔥💯

**Author:** sriganesh777
**Votes:** 55
**Link:** [https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/3899157/](https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/solutions/3899157/)

---


# Approach

1. Group the DataFrame by teacher_id using the groupby function.
2. Use the nunique function on the grouped DataFrame to count the number of unique subject_id values for each teacher.
3. Reset the index of the resulting grouped DataFrame and rename the subject_id column to unique_subjects_count.
4. Return the resulting DataFrame containing the number of unique subjects each teacher teaches.

# Code
```
import pandas as pd

def count_unique_subjects(teacher: pd.DataFrame) -> pd.DataFrame:
    # Group by teacher_id and count the number of unique subject_ids
    result = teacher.groupby('teacher_id')['subject_id'].nunique().reset_index()
    result.rename(columns={'subject_id': 'cnt'}, inplace=True)
    
    return result

```
![upvote img.jpg](./images/0.jpeg)
