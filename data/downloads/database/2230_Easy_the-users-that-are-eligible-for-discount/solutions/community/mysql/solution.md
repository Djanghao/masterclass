# Simple MySQL Solution | Easy to understand | [RESOLVED] Problem Statement Issue

**Author:** deb_dutta_
**Votes:** 10
**Link:** [https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/1936382/](https://leetcode.com/problems/the-users-that-are-eligible-for-discount/solutions/1936382/)

---

```
CREATE PROCEDURE getUserIDs(startDate DATE, endDate DATE, minAmount INT)
BEGIN
    select distinct user_id
    from purchases
    where time_stamp >= startDate and time_stamp <= endDate
    and amount >= minAmount
    order by user_id;
END

--Note: Here we need the endDate ending with 00:00:00. Ex: 2022-03-03 00:00:00. 
--For testcases to be successfull.
```
**<h3>NOTE: The question has been <a href="https://github.com/LeetCode-Feedback/LeetCode-Feedback/issues/7594">updated</a> and you can ignore the below issue.</h3>**

I got an issue with a testcase where 45 user_id was showing when I was doing
**where DATE(time_stamp) BETWEEN startDate and endDate**

It should be clarified what will be timestamp value or include the end_date with timestamp (like 2022-03-03 23:59:59) in test case since when we do
**where time_stamp BETWEEN startDate and endDate** or **time_stamp >= startDate and time_stamp <= endDate**
It is actually putting 00:00:00 at the end of startDate and endDate
Example:
2022-02-12 00:00:00 and 2022-03-03 00:00:00


**Testcase: (Check the bolded record below)**
{"headers": {"Purchases": ["user_id", "time_stamp", "amount"]}, 
"startDate": "2022-02-12", "endDate": "2022-03-03", "minAmount": 3773, 
"rows": {"Purchases": [
[31, "2022-10-22 01:36:59", 6551], 
[47, "2022-08-29 20:10:15", 5779], 
[47, "2022-01-02 08:08:59", 5878], 
...
[38, "2022-07-18 01:27:07", 4358], 
[21, "2022-12-29 13:06:01", 7576], 
[12, "2022-10-11 03:51:53", 2354], 
[47, "2022-02-19 00:01:33", 3106], 
[7, "2022-03-23 10:32:57", 5702], 
[31, "2022-05-16 14:25:42", 2344], 
**[45, "2022-03-03 18:49:34", 6692],** 
[47, "2022-03-01 06:54:33", 7455], 
[38, "2022-10-04 22:46:18", 2110], 
[43, "2022-12-12 14:19:07", 3206], 
[39, "2022-10-23 00:13:26", 3190], 
[46, "2022-08-15 19:32:37", 1874], 
[20, "2022-05-17 21:50:31", 2502], 
...
[8, "2022-04-12 13:44:33", 4697], 
[7, "2022-05-16 12:01:25", 1585], 
[49, "2022-10-26 22:18:58", 5712]]}}