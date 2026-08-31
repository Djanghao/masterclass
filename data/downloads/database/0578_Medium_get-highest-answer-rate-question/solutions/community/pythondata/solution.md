# Two-liners Solution using `groupby + agg` and `sort_values`

**Author:** zux106
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-highest-answer-rate-question/solutions/4265816/](https://leetcode.com/problems/get-highest-answer-rate-question/solutions/4265816/)

---

# Intuition
We use `agg` to calculate answer rates then select the highest answer rate observation using `sort_values`.  To break ties, the `by` parameter in `sort_values` contains a second element `question_id`.

# Code
```
import pandas as pd

def get_the_question(survey_log: pd.DataFrame) -> pd.DataFrame:
    df = survey_log.groupby('question_id', as_index=False).agg(ar = ('action', lambda x: (x == 'answer').sum()/(x == 'show').sum()))[['question_id', 'ar']]
    return df.sort_values(by=['ar', 'question_id'], ascending=[False, True])[['question_id']].head(1).rename(columns={'question_id': 'survey_log'})
    
```