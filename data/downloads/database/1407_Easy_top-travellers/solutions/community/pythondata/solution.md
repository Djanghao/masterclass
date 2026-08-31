# PANDAS | STEP BY STEP APPROACH

**Author:** sheharyarone
**Votes:** 10
**Link:** [https://leetcode.com/problems/top-travellers/solutions/3908365/](https://leetcode.com/problems/top-travellers/solutions/3908365/)

---


# Code
```
import pandas as pd

def top_travellers(users: pd.DataFrame, rides: pd.DataFrame) -> pd.DataFrame:
    
    df = rides.groupby( ['user_id'])['distance'].sum().reset_index(name='travelled_distance' )

    df = pd.merge( users, df, how='left', left_on='id', right_on='user_id')

    df['travelled_distance'] = df['travelled_distance'].fillna(0)

    df.sort_values( by=['travelled_distance','name'], ascending=[False,True], inplace=True )

    return df[['name','travelled_distance']]
```
![cb4680e8-b410-4c2f-a9f7-914b5be19e87_1680183976.0080035.png](./images/0.png)
