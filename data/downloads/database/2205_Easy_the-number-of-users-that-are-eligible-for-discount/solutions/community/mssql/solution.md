# EZ solution

**Author:** jhgf9999
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/5281743/](https://leetcode.com/problems/the-number-of-users-that-are-eligible-for-discount/solutions/5281743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
(1) Time format should be convert to datetime
(2) user should be distinct or will get duplicate count
# Approach
<!-- Describe your approach to solving the problem. -->
use convert and distinct
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
na
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
na
# Code
```
CREATE FUNCTION getUserIDs(@startDate DATE, @endDate DATE, @minAmount INT) RETURNS INT AS
BEGIN
    RETURN (
        /* Write your T-SQL query statement below. */
        select count (distinct user_id) as user_cnt
        from purchases
        where time_stamp > cast(@startDate as datetime) and time_stamp < cast(@endDate as datetime) and amount > @minAmount 
    );
END
```