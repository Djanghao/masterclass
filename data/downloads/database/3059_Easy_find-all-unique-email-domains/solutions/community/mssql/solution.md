# Very Easy MS SQL Server Solution using SUBSTRING + CHARINDEX

**Author:** Vaishnav-Dahake
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-unique-email-domains/solutions/5841492/](https://leetcode.com/problems/find-all-unique-email-domains/solutions/5841492/)

---

# Code
```mssql []
SELECT SUBSTRING(email,CHARINDEX('@',email)+1,len(email)) as "email_domain", count(1) as "count"
from Emails
where right(email,4) = '.com'
group by SUBSTRING(email,CHARINDEX('@',email)+1,len(email))
order by 1
```