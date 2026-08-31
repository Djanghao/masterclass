# Pandas cross merge with explanation

**Author:** SalvadorDali
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/3998854/](https://leetcode.com/problems/shortest-distance-in-a-plane/solutions/3998854/)

---

# Intuition

This code also handles duplicate points and consists of a few steps:

 1. Create id for the dataframe (to remove self-point on merge). L1
 2. Cross merge the dataframe. L2
 3. Remove points with the same id. L3
 4. Find the distances, take minimum. L4
 5. Do rounding and return datafram

# Code
```
import pandas as pd

def shortest_distance(df: pd.DataFrame) -> pd.DataFrame:
  df = df.reset_index()
  df = df.merge(df, how="cross", suffixes=('0', '1'))
  df = df[df['index0'] != df['index1']]
  minimum = ((df['x0'] - df['x1'])**2 + (df['y0'] - df['y1'])**2).min() ** 0.5
  return pd.DataFrame(data={'shortest': [round(minimum, 2)]})   
```