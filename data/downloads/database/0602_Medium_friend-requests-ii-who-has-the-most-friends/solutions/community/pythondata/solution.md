# USE CONCAT

**Author:** JustChis100
**Votes:** 10
**Link:** [https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/5116308/](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/5116308/)

---



# CODE
```
import pandas as pd

def most_friends(request_accepted: pd.DataFrame) -> pd.DataFrame:
    res = pd.concat([request_accepted["requester_id"], request_accepted["accepter_id"]]).tolist()
    r = mode(res)
    return pd.DataFrame({"id" : [r], "num" : [res.count(r)]})
```

#### PLS