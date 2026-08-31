# pandas solution

**Author:** Kateryna_
**Votes:** 2
**Link:** [https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5143635/](https://leetcode.com/problems/consecutive-available-seats-ii/solutions/5143635/)

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
```
import pandas as pd

def consecutive_available_seats(cinema: pd.DataFrame) -> pd.DataFrame:
    # sort values by seat_id
    cinema.sort_values('seat_id', inplace = True)

    # change type of 'free' table from 'bool' to int
    cinema['free'] = cinema['free'].astype('int16')

    # cumsum in this case used to get the same value for consecutive available seats
    cinema['tag'] = cinema['seat_id'] - cinema.groupby(['free'])['free'].cumsum()

    # get our result table using groupby and agg
    result_df = cinema[cinema['free'] != 0].groupby('tag').agg(first_seat_id=('seat_id', 'min'), last_seat_id=('seat_id', 'max'), consecutive_seats_len=('tag' , 'count'))

    return result_df[result_df['consecutive_seats_len'] == max(result_df['consecutive_seats_len'])]
```