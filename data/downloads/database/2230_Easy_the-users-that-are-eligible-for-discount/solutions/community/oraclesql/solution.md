# Simple opening of cursor

**Author:** user9509z
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/5980467/](https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/5980467/)

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
```oraclesql []
CREATE FUNCTION getUserIDs(startDate IN DATE, endDate IN DATE, minAmount IN NUMBER)
RETURN SYS_REFCURSOR IS result SYS_REFCURSOR;
BEGIN
    /* Write your PL/SQL query statement below */
    open result for 
    select distinct user_id from 
    purchases 
    where 
    time_stamp between startDate and endDate 
    and amount >=minamount
    order by 1;
    
    RETURN result;
END;
```