# Simple MS SQL Server solution (Beats 94.77%)

**Author:** Rashmi_M_
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/3507658/](https://leetcode.com/problems/get-the-second-most-recent-activity/solutions/3507658/)

---



# Approach
Start date column is basically a distraction, you only need end date to find recent activity. Use row_number() to Order activities for each user.
Also create a count of activities per user to find if user has less than 2 activities. Filter for 2nd activity or count =1 (user has only 1 activity)



# Code
```
/* Write your T-SQL query statement below */
with A as (
select UserActivity.*,
  row_number() over (partition by username order by endDate desc) as rn,
  count(1) over (partition by username) as cnt
  from UserActivity
)

select username,activity,startDate,endDate from A where
rn=2 or cnt =1

```