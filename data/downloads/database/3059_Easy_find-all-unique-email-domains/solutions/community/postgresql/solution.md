# uses split_part() function

**Author:** _jhowlett_
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-unique-email-domains/solutions/5893623/](https://leetcode.com/problems/find-all-unique-email-domains/solutions/5893623/)

---

![image.png](./images/0.png)


# Code
```postgresql []
-- Write your PostgreSQL query statement below
select
    split_part(email, '@', 2) as email_domain,
    count(*) as count
from emails
where split_part(email, '@', 2) ilike '%.com'
group by split_part(email, '@', 2)
```