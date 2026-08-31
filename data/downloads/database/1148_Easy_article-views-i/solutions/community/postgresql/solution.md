# ✅4/50 | All SQL50 Explained

**Author:** Piotr_Maminski
**Votes:** 9
**Link:** [https://leetcode.com/problems/article-views-i/solutions/5834079/](https://leetcode.com/problems/article-views-i/solutions/5834079/)

---


```mysql [MySQL]
SELECT DISTINCT author_id id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id -- ORDER BY Id ASC
;
```
```mssql [MS SQL Server]
SELECT DISTINCT author_id id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id
;
```
```oraclesql [Oracle]
SELECT DISTINCT author_id id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id 
;
```
```postgresql [PostgreSQL]
SELECT DISTINCT author_id id
FROM Views
WHERE author_id = viewer_id
ORDER BY author_id
;
```
```pythondata [Pandas]
import pandas as pd

def article_views(views: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame({'id':
        sorted(views.loc[views['author_id'] == views['viewer_id']]['author_id'].unique())})
```

# Approach

- **SELECT DISTINCT** author_id **AS** id:
This part of the query selects unique (**DISTINCT**) author_id values from the Views table.
The author_id is given an alias id for the output.
- **WHERE author_id = viewer_id:**
This condition filters the rows to include only those where the author_id is the same as the viewer_id. This means it selects records where the author viewed their own article.
- **ORDER BY id:**
This sorts the results by the id (which is the author_id) in ascending order.
If you don't specify ASC or DESC, it will automatically sort in ascending order.
"While 'ORDER BY id' is technically correct, I believe that specifying the original column name enhances code readability, especially when dealing with larger datasets.
# Order of Execution 

**FROM** Views > **WHERE** author_id = viewer_id > **SELECT DISTINCT** author_id AS id > **ORDER BY** id (author_id)

![image.png](./images/0.png)
![image.png](./images/1.png)