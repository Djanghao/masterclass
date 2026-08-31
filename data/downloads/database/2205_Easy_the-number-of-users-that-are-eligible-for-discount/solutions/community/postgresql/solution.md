# Runtime 432ms Beats 100%

**Author:** lokaunt
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/5687302/](https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/5687302/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```postgresql []
CREATE OR REPLACE FUNCTION getUserIDs(startDate DATE, endDate DATE, minAmount INT) RETURNS INT AS $
BEGIN
  RETURN (
	  -- Write your PostgreSQL query statement below.
      SELECT COUNT(DISTINCT user_id)
      FROM Purchases
      WHERE (time_stamp BETWEEN startDate and EndDate) and amount>=minAmount
  );
END;
$ LANGUAGE plpgsql;




```