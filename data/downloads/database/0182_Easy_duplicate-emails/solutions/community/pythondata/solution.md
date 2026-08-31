# 👽👽 Easy Beginner Solution using .loc and .duplicated

**Author:** joshurbandavis
**Votes:** 21
**Link:** [https://leetcode.com/problems/duplicate-emails/solutions/3942961/](https://leetcode.com/problems/duplicate-emails/solutions/3942961/)

---

# Intuition
We want select all values that are duplicated in our email column and return those as a dataframe, ensuring that we only report each email value once. 

# Approach
This is a straightforward problem using .loc(), .duplicated(), and .drop_cuplicates().

1. We create a new dataFrame called results
2. We use .loc to find all elements of the person dataframe whos emails are duplicated using the .duplicated() method. This will populate our results dataframe with each duplicated email. 
3. We then use drop_duplicates to remove any duplicated values from our results dataFrame since some entries may be duplicated more than once. 

Please upvote and happy coding :) 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import pandas as pd

def duplicate_emails(person: pd.DataFrame) -> pd.DataFrame:

    results = pd.DataFrame()

    results = person.loc[person.duplicated(subset=['email']), ['email']]
    
    return results.drop_duplicates()
```