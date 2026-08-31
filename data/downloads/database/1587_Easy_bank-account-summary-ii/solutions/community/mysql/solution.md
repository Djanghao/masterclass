# MYSQL easy to understand

**Author:** subham27
**Votes:** 12
**Link:** [https://leetcode.com/problems/bank-account-summary-ii/solutions/1978360/](https://leetcode.com/problems/bank-account-summary-ii/solutions/1978360/)

---

```
SELECT u.name as name , SUM(t.amount) as balance 
FROM 
USERS u JOIN TRANSACTIONS t on u.account=t.account
GROUP BY 
t.ACCOUNT HAVING balance>10000;
```