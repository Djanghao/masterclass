# 👍 Simplest SQL Query ✨

**Author:** vadlamudinaveen999
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-olympic-table/solutions/2563027/](https://leetcode.com/problems/sort-the-olympic-table/solutions/2563027/)

---

```
# Code Author Naveen Kumar Vadlamudi 
# How to Approach the solution 
-- A Major Pitfall one might be doing
-- Writing the Statements as following 
-- SELECT * FROM OLYMPIC ORDER BY GOLD_MEDALS, SILVER_MEDALS, BRONZE_MEDALS DESC, COUNTRY ASC
-- Which gives erroneous answer to us as the columns over there are soreted combinedly which is obviously wrong.
-- Instead use the below Code ... 
-- Which sorts the data by every column and gives us the result as expected.

SELECT *
FROM OLYMPIC
ORDER BY GOLD_MEDALS DESC, SILVER_MEDALS DESC, BRONZE_MEDALS DESC, COUNTRY ASC

```
