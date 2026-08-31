# 3 Best One-liner Solution

**Author:** ShivamKhator
**Votes:** 106
**Link:** [https://leetcode.com/problems/select-data/solutions/5135241/](https://leetcode.com/problems/select-data/solutions/5135241/)

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

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return students.loc[students["student_id"] == 101, ["name", "age"]]
    #OR
    return students.loc[students["student_id"] == 101, "name" :]
    #OR
    return students[students['student_id'] == 101][['name', 'age']]
```
![cat asking for upvote.jpeg](./images/0.jpeg)
