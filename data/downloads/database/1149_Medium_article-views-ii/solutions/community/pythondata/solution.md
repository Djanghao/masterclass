# Pandas, groupby user and date, count unique

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/article-views-ii/solutions/3947466/](https://leetcode.com/problems/article-views-ii/solutions/3947466/)

---

# Intuition
If we group by viewer and date, anyone who had more than 1 unique article, will have count > 1.
# Approach
1. grouping by user and date
2. counting unique articles
3. if any user had more than 1 article per day: count > 1
4. resetting index and selecting viewers
5. dropping duplicates becouse one reader could have more than 1 article in multiple days
6. returning renamed frame


# Code
```
import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    return (views.groupby(['viewer_id','view_date'])  #1
                .nunique()                            #2
                .query("article_id > 1")              #2
                .reset_index()['viewer_id']           #4
                .drop_duplicates()                    #5
                .to_frame('id'))                      #6
```