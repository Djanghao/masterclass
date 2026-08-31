# Pandas, succint code with shift  & bonus oneliner with np.where

**Author:** piocarz
**Votes:** 12
**Link:** [https://leetcode.com/problems/exchange-seats/solutions/4073961/](https://leetcode.com/problems/exchange-seats/solutions/4073961/)

---

# Intuition
Create temporary copy of student original places. For those which seat is not divisible by 2 (id%2 == 1 or id%2) and are not last, assign one from below, for those which seat is divisible by 2 (id%2 == 0 or ~id%2) assign one from above.

# Approach
Use `.shift(-1)` for id%2 and `.shift(1)` for ~id%2

# Code
```
import pandas as pd

def exchange_seats(seat: pd.DataFrame) -> pd.DataFrame:
    temp = seat.student.copy()
    seat.loc[(seat.id%2==1) & (seat.id != len(seat)), 'student'] = temp.shift(-1)
    seat.loc[(seat.id%2==0), 'student'] = temp.shift(1)
    return seat
    
```
Bonus one liner with np.where
```
import pandas as pd
import numpy as np

def exchange_seats(s: pd.DataFrame) -> pd.DataFrame:
    return s.assign(student = np.where(s.id%2 & (s.id==len(s)), s.student, np.where(s.id%2, s.student.shift(-1), s.student.shift(1))))
    
```