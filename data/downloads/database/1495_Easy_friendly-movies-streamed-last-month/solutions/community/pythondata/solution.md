# Pandas

**Author:** Prachi_404
**Votes:** 0
**Link:** [https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/6036171/](https://leetcode.com/problems/friendly-movies-streamed-last-month/solutions/6036171/)

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
```pythondata []
import pandas as pd

def friendly_movies(tv_program: pd.DataFrame, content: pd.DataFrame) -> pd.DataFrame:
    tv_program['content_id'] = tv_program['content_id'].astype(str)
    content['content_id'] = content['content_id'].astype(str)
    
    content_filtered = content[(content['Kids_content'] == 'Y') & (content['content_type'] == 'Movies')][['content_id', 'title']]
    
    
    tv_program_filtered = tv_program[(tv_program['program_date'].dt.year == 2020) & 
                                     (tv_program['program_date'].dt.month == 6)][['content_id', 'program_date']]
    
    merged = content_filtered.merge(tv_program_filtered, on='content_id', how='inner')
    
    result = merged[['title']].drop_duplicates()
    
    return result

```