# pandas rank(method='min')

**Author:** cometolife
**Votes:** 1
**Link:** [https://leetcode.com/problems/status-of-flight-tickets/solutions/4076462/](https://leetcode.com/problems/status-of-flight-tickets/solutions/4076462/)

---

# Code
```
import pandas as pd

def ticket_status(flights: pd.DataFrame, passengers: pd.DataFrame) -> pd.DataFrame:
    df = pd.merge(flights, passengers, on='flight_id')
    df['rank'] = df.groupby('flight_id')['booking_time'].rank(method='min')
    df['Status'] = np.where(df['rank'] <= df['capacity'], 'Confirmed', 'Waitlist')

    return df[['passenger_id', 'Status']].sort_values(by='passenger_id')
```