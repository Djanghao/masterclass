# Simple solution. No CTE. NO JOIN

**Author:** leo66six
**Votes:** 32
**Link:** [https://leetcode.com/problems/trips-and-users/solutions/2607018/](https://leetcode.com/problems/trips-and-users/solutions/2607018/)

---

SELECT request_at Day, 
    ROUND(SUM(IF(status = 'cancelled_by_driver' OR status = 'cancelled_by_client', 1,0)) / COUNT(*),2) AS "Cancellation Rate"
FROM Trips 
WHERE client_id  NOT IN (SELECT users_id FROM Users WHERE banned = "Yes") AND 
    driver_id NOT IN (SELECT users_id FROM Users WHERE banned = "Yes") AND
    request_at BETWEEN "2013-10-01" AND "2013-10-03"
GROUP BY request_at