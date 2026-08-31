# MYSQL: SELF JOIN + DISTINCT + BETWEEN. Good Luck 👍✨

**Author:** ashlyjoseph
**Votes:** 4
**Link:** [https://leetcode.com/problems/leetflex-banned-accounts/solutions/2461213/](https://leetcode.com/problems/leetflex-banned-accounts/solutions/2461213/)

---

```
# Write your MySQL query statement below

/**
One Table: LogInfo
There is no primary key for this table, and it may contain duplicates.
LogInfo table contains information about the login and logout dates of Leetflex accounts.

PROBLEM: find the account_id of the accounts that should be banned from Leetflex
 An account should be banned if it was logged in at some moment from two different IP addresses.
 
 */
 
 SELECT 
    DISTINCT L1.account_id
    
FROM LogInfo L1
JOIN LogInfo L2
    ON L1.account_id = L2.account_id 
            AND L1.ip_address <> L2.ip_address 
            
WHERE (L1.login BETWEEN L2.login AND L2.logout)
```