# 🔥💯✅ [Pandas] 2 Liner Very simple Approach.🔥💯✅

**Author:** sriganesh777
**Votes:** 120
**Link:** [https://leetcode.com/problems/delete-duplicate-emails/solutions/3863077/](https://leetcode.com/problems/delete-duplicate-emails/solutions/3863077/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The approach is very simple we just need to: 
1. sort the rows based on the id column since while removing the duplicates we need to keep the lowest id one.
2. Now we can simply delete the duplicates using the drop_duplicates method.

# Code
```
import pandas as pd

# Modify Person in place
def delete_duplicate_emails(person: pd.DataFrame) -> None:
    # Sort the rows based on id (Ascending order)
    person.sort_values(by='id',ascending=True,inplace=True)
    # Drop the duplicates based on email.
    person.drop_duplicates(subset='email', keep='first', inplace=True)

```
![upvote img.jpg](./images/0.jpeg)
