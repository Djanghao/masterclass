# Pandas || My Sql (Very Simple ) with Approach and explanation.

**Author:** sriganesh777
**Votes:** 184
**Link:** [https://leetcode.com/problems/article-views-i/solutions/3852944/](https://leetcode.com/problems/article-views-i/solutions/3852944/)

---

# Pandas Approach
<!-- Describe your approach to solving the problem. -->
- Create a new DataFrame named authors_viewed_own_articles by filtering the rows where the author_id and viewer_id are the same. This will give us the rows where authors viewed their own articles.

- Extract the unique author_id values from the DataFrame authors_viewed_own_articles. We want to find the unique authors who viewed at least one of their own articles.

- Sort the unique author_id values in ascending order to get the list of authors who viewed at least one of their own articles.

- Create a new DataFrame named result_df with a single column named id containing the sorted unique author_id values.

- Return the result_df, which will contain the list of authors who viewed at least one of their own articles, sorted by their IDs in ascending order.


# Pandas Code
```
import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    # Filter rows where author_id and viewer_id are the same (authors viewing their own articles)
    authors_viewed_own_articles = views[views['author_id'] == views['viewer_id']]
    
    # Get unique author_ids from the filtered data
    unique_authors = authors_viewed_own_articles['author_id'].unique()
    
    # Sort the unique author_ids in ascending order
    unique_authors = sorted(unique_authors)
    
    # Create a DataFrame with the sorted unique author_ids and rename the 'author_id' column to 'id'
    result_df = pd.DataFrame({'id': unique_authors})
    
    return result_df
```

# SQL Code
```
SELECT DISTINCT author_id AS id
FROM Views
WHERE author_id = viewer_id
ORDER BY id ASC;
```
# Explanation
- We use the SELECT DISTINCT clause to get only the unique author_id values. We want to find the unique authors who viewed at least one of their own articles.

- The WHERE clause filters the rows where author_id and viewer_id are the same. This ensures that we only get the rows where authors viewed their own articles.

- We use the ORDER BY clause to sort the results in ascending order based on the author_id (renamed as id in the result).

The SQL query will return the list of authors who viewed at least one of their own articles, sorted by their IDs in ascending order.
![upvote img.jpg](./images/0.jpeg)
## Please upvote if it is helpful

