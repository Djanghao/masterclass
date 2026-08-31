# Pandas 3 lines. Sort -> groupby -> cumsum

**Author:** SalvadorDali
**Votes:** 4
**Link:** [https://leetcode.com/problems/game-play-analysis-iii/solutions/3948233/](https://leetcode.com/problems/game-play-analysis-iii/solutions/3948233/)

---

# Intuition

Pandas has a [groupby function](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html) after which you can apply some transformation. There are many of them, but you see that you need to do [summulative sum](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.cumsum.html). 

As we need to do cumsum based on sorted event_date and player_id, so you need to [sort_values](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html)

After that there is just a cosmetic renaming of columns and dropping not-needed columns

# Code
```
import pandas as pd

def gameplay_analysis(df: pd.DataFrame) -> pd.DataFrame:
  df = df.sort_values(by=["player_id", "event_date"])[["player_id", "event_date", "games_played"]]
  df["games_played_so_far"] = df.groupby("player_id")["games_played"].transform(pd.Series.cumsum)
  return df.drop(columns=["games_played"])
```