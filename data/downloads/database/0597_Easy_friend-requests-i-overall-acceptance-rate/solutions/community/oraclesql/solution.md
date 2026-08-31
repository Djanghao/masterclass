# Cross join

**Author:** Aloha_Bonjour
**Votes:** 1
**Link:** [https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/1449243/](https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/1449243/)

---

```
select NVL(Round(
    count(distinct A.requester_id||'-'||A.accepter_id)
    /NULLIF(count(distinct B.sender_id||'-'||B.send_to_id),0)
    ,2),0.00) as accept_rate
from requestAccepted A
cross join friendRequest B
```