# Solution with regular expression (i like it)

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-unique-email-domains/solutions/5683240/](https://leetcode.com/problems/find-all-unique-email-domains/solutions/5683240/)

---

# Code on Python
```python
import pandas as pd
import re

def find_unique_email_domains(emails: pd.DataFrame) -> pd.DataFrame:
    pattern = r".*?@(.*\\.com)"
    emails["email_domain"] = emails["email"].apply(lambda x: y.groups()[0] if (y := re.match(pattern, x)) else None)
    return (emails
            .groupby(by="email_domain", as_index=False, dropna=True)
            .agg(count=("email", "count"))
            .sort_values(by="email_domain", ascending=True))
```
---
# Code on PostgreSQL
### LeetCode doesn't pass this version because of function REGEXP_MATCHES()
```sql
-- Write your PostgreSQL query statement below
SELECT REGEXP_MATCHES(email, '^.*?@(.*)$') AS email_domain, COUNT(email) AS count
FROM Emails
WHERE email ~ '^.*?@.*\\.com$'
GROUP BY email_domain
ORDER BY email_domain ASC;
```
### This approach is ok
```sql
-- Write your PostgreSQL query statement below
SELECT SUBSTRING(email FROM '^.*?@(.*)$') AS email_domain, COUNT(email) AS count
FROM Emails
WHERE email ~ '^.*?@.*\\.com$'
GROUP BY email_domain
ORDER BY email_domain ASC;
```