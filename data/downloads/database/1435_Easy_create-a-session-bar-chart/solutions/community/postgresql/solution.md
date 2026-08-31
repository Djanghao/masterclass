# UNNEST(ARRAY)  - you don't need UNION or a CTE

**Author:** Alfreds_Futterkiste
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-a-session-bar-chart/solutions/5411458/](https://leetcode.com/problems/create-a-session-bar-chart/solutions/5411458/)

---

# Intuition
You can unpivot using UNION but I find it a bit cumbersome. I was looking for a way to specify all the values in a list and let SQL put it into columns. 
# Approach
UNNEST() will transpose a list of comma-separated values into a column. However the list needs to be wrapped in an ARRAY [] call.

This isn't an inherently better approach than UNION in this case, but it's a bit more intuive if you prefer to think in terms of rows and columns instead of appending whole dataframes with UNION.  

# Code
```
SELECT   
    UNNEST(ARRAY ['[0-5>', '[5-10>', '[10-15>', '15 or more']) AS bin
    , UNNEST(ARRAY [
        COUNT(*) FILTER(WHERE duration/60 >= 0 AND duration/60 < 5)
        , COUNT(*) FILTER(WHERE duration/60 >= 5 AND duration/60 < 10)
        , COUNT(*) FILTER(WHERE duration/60 >= 10 AND duration/60 < 15)
        , COUNT(*) FILTER(WHERE duration/60 >= 15)
    ]) AS total
FROM Sessions

```