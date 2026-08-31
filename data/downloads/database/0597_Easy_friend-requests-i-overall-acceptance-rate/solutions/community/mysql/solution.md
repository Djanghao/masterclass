# MySQL select from two tables

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/426171/](https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/426171/)

---

```
SELECT ROUND(IFNULL(COUNT(DISTINCT requester_id, accepter_id) / COUNT(DISTINCT sender_id, send_to_id), 0), 2) AS accept_rate
FROM friend_request, request_accepted;
```