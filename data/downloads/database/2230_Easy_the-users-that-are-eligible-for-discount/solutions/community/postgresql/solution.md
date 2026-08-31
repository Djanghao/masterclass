# Solution with CTE

**Author:** Inveterate_Enthusiast
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/5607463/](https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/5607463/)

---

# Code on PostgreSQL
```
CREATE OR REPLACE FUNCTION getUserIDs(startDate DATE, endDate DATE, minAmount INT)
RETURNS TABLE (user_id INT) AS $
BEGIN
  RETURN QUERY (
      -- Write your PostgreSQL query statement below.
        WITH filtered AS
            (SELECT Purchases.*
            FROM Purchases
            WHERE time_stamp BETWEEN startDate::TIMESTAMP AND endDate::TIMESTAMP)
        SELECT filtered.user_id
        FROM filtered
        GROUP BY filtered.user_id
        HAVING MAX(filtered.amount) >= minAmount
  );
END;
$ LANGUAGE plpgsql;
```