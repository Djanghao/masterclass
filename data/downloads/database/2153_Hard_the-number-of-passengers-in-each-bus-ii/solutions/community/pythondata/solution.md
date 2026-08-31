# Pandas  succinct code - iterrows()

**Author:** piocarz
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/4499330/](https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/solutions/4499330/)

---

# Intuition
Iterrows is straightforward solution, going row by row and updating values of `cnt`: if passenger arrives: +=1, if bus arrives: - capacity of bus, however, not less than 0.  Our anwser - `passengers_cnt` is the minimum of: capacity of bus and accumulated `cnt`(passengers) just before bus arrived.

# Approach
1. First concat, buses and passengers. To buses add `cnt = -capacity`, since every time bus arrives we want to substract this number of passangers. To passangers add `cnt = 1`, since every time passenger arrives it's count go up by 1. ALSO add one row with `cnt == 0` and `arrival_time = -1` - we want to start from second row, and this is just placeholder.
2. sort concated `df` by arrival time and passanger (if there is a tie of bus and passenger, passenger will be first) 
3. go row by row: every time save as `passenger_cnt` minimum of capacity and current passengers - we will anyway drop all rows that are not at the time of arriving bus. also count current passenge by adding previous number of passengers to current arrival ( if bus arrives its counted as minus, however number of current passengers cannot be lower than 0)
4. finally, return only `bus_id` and `passengers_cnt`. As we were countign number of passengers in every row, but only rows with buses have bus_id - if we drop all rows with nulls, there will be only rows at the time of bus arriving - and thats our anwser.

# Code
```
import pandas as pd

def number_of_passengers(buses: pd.DataFrame, passengers: pd.DataFrame) -> pd.DataFrame:

    df = pd.concat([buses.assign(cnt = -buses.capacity), passengers.assign(cnt = 1),
                    pd.DataFrame({"arrival_time":[-1],"cnt":[0]})])
    df = df.sort_values(["arrival_time","passenger_id"]).reset_index(drop=1)
    for i,row in df.iloc[1:].iterrows():
        df.loc[i,"passengers_cnt"] = min(abs(df.loc[i,"cnt"]), df.loc[i-1,"cnt"])
        df.loc[i,"cnt"] = max(0, df.loc[i,"cnt"] +  df.loc[i-1,"cnt"])
    return df[["bus_id","passengers_cnt"]].sort_values("bus_id").dropna()
```