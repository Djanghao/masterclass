# 🚀✔️ Simple Query Using  COUNT + DISTNCT + BETWEEN 👍✨

**Author:** vadlamudinaveen999
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/2163319/](https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/2163319/)

---

```
# Code Author Naveen Kumar Vadlamudi 
# Using DISTINCT + COUNT + WHERE Condition

CREATE FUNCTION getUserIDs(startDate DATE, endDate DATE, minAmount INT) RETURNS INT
BEGIN
  RETURN (
     SELECT COUNT(DISTINCT USER_ID)
     FROM PURCHASES 
     WHERE TIME_STAMP BETWEEN TIMESTAMP(STARTDATE) AND TIMESTAMP(ENDDATE)
     AND AMOUNT >= MINAMOUNT
  );
END
```