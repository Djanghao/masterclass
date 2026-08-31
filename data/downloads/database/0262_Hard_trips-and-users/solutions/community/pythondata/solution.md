# pandas || filter and group || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 20
**Link:** [https://leetcode.com/problems/trips-and-users/solutions/4211836/](https://leetcode.com/problems/trips-and-users/solutions/4211836/)

---

```
import pandas as pd

def trips_and_users(trips: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:

    users = users[users.banned == 'No']
    trips = trips[trips.request_at
                     .between('2013-10-01','2013-10-03')
                    ].rename(columns = {'request_at': 'Day'})

    trips['can'] = trips.status.str.startswith('can')

    trips = trips[(trips.client_id.isin(users.users_id)) &
                  (trips.driver_id.isin(users.users_id))
                  ].groupby('Day')['can'].agg(['sum','size']).reset_index()

    trips['Cancellation Rate'] = (trips['sum']/trips['size']).round(2)
    
    return trips[['Day','Cancellation Rate']]
```
[https://leetcode.com/problems/trips-and-users/submissions/1084879659/](https://leetcode.com/problems/trips-and-users/submissions/1084879659/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(trips)`.