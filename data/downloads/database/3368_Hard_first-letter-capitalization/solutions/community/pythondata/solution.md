# Pandas .apply() to a column and .title() function

**Author:** nanzhuangdalao
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-letter-capitalization/solutions/6120724/](https://leetcode.com/problems/first-letter-capitalization/solutions/6120724/)

---

# Code
```pythondata []
import pandas as pd

def process_text(user_content: pd.DataFrame) -> pd.DataFrame:
    # You are working with a single column instead of an entire dataframe, so there's no need to specify the axis = 0 or 1.
    user_content['converted_text'] = user_content['content_text'].apply(lambda x: x.title())
    return user_content.rename(columns = {'content_text':'original_text'})
```