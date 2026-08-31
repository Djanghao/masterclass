# Official Solution

**Link:** [https://leetcode.com/problems/the-latest-login-in-2020/solution/](https://leetcode.com/problems/the-latest-login-in-2020/solution/)

---

[TOC]

## Solution

--- 

### Overview

The two conditions needed to get the final result are : 
1. find all records in the year 2020 
2. from these records, identify the latest record for each user

For condition 1, there are two commonly used functions to get the year from a date:

1. [YEAR(date)](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_year)
2. [EXTRACT(unit from date)](https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_extract): this function can extract different units (e.g. year, month, week) from a date

For condition 2, there are two methods to get the latest record: 
1. [MAX(expr)](https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_max): this function returns the maximum value of `expr`, and the MAX(time_stamp) returns the latest login time
2. [FIRST_VALUE(expr)](https://dev.mysql.com/doc/refman/8.0/en/window-function-descriptions.html#function_first-value): this window function returns the value of `expr` from the first row of the window frame; if the column `time_stamp` is sorted in descending order,  the FIRST_VALUE(time_stamp) also returns the latest login time

---

### Approach 1: Using YEAR() to extract year from the date column and MAX() to find the latest record 

#### Algorithm
1. Select the columns needed for the final output
2. Add condition 1 using YEAR() to select all records with a timestamp in the year 2020 
3. Add condition 2 using MAX() to get the latest record for each user from the previous step
4. Group the result by user_id to get the distinct record for each user_id 

##### MySQL

```sql
SELECT 
    user_id, 
    MAX(time_stamp) AS last_stamp
FROM 
    Logins
WHERE 
    YEAR(time_stamp) = 2020
GROUP BY 1;
```
---

### Approach 2: Using EXTRACT() to get year from the date column and FIRST_VALUE() to find the latest record 

#### Algorithm
1. Select the columns needed for the final output
2. Add condition 1 using EXTRACT() to select all records with a timestamp in the year 2020 
3. Add condition 2 using FIRST_VALUE() to get the latest record for each user from the previous step; the date column is sorted in descending order to make sure the first record is the latest record in 2020
4. Because window function returns non-aggregate results,  DISTINCT is needed for this approach to make sure users with multiple records in 2020 will return only one record

```sql
SELECT
    DISTINCT user_id,
    FIRST_VALUE(time_stamp)OVER(PARTITION BY user_id ORDER BY time_stamp DESC) AS last_stamp
FROM
    Logins
WHERE EXTRACT(Year FROM time_stamp) = 2020;
```

---