# Drop_duplicates

**Author:** ChenxiLu
**Votes:** 1
**Link:** [https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/4003405/](https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/4003405/)

---

# Intuition
Note the request_accepted table may contain additional records that are not in the friend_request table. However, the question wants us to count these additional records as well. With this in mind, we don't need to join the tables to filter out these additional records.

Irrational as it is, to humor whoever sets this problem, we can count unique records in friend request and count unique records in request_accepted.

# Approach
Drop duplicates by (sender_id, accepter_id) using drop_duplicates().

# Code
```
import pandas as pd

def acceptance_rate(friend_request: pd.DataFrame, request_accepted: pd.DataFrame) -> pd.DataFrame:
    request = len(friend_request[["sender_id", "send_to_id"]].drop_duplicates())
    accept = len(request_accepted[["requester_id", "accepter_id"]].drop_duplicates())
    rate = 0 if request == 0 else accept / request
    return pd.DataFrame({"accept_rate" : [rate]}).round(2)
    
```