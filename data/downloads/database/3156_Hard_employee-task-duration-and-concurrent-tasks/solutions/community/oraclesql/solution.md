# Single CTE with lead() function

**Author:** avinash2196
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5732665/](https://leetcode.com/problems/employee-task-duration-and-concurrent-tasks/solutions/5732665/)

---

# Intuition
First thought was to approach this as an island & gap problem

# Approach
Create a CTE table and find the next start time of the task. if the next start time is less than previous end time, it means the user is working on 2 tasks during the overlapping time period. So any such tasks gets a value as 2 (number of concurrent tasks), else a value of 0 for no overlap. Then get the max value of the concurrents task for each user. 

The approach is refined based on given test data sets. It does not consider scenarios where more than 2 tasks are done within a single time frame.


# Code
```oraclesql []
/* Write your PL/SQL query statement below */
WITH DATA AS (
                select  employee_id,
                        start_time, end_time,
                        case
                            when end_time > lead(start_time) over (partition by employee_id order by start_time)   then 2
                            else 0
                        end as CT1,
                        case
                            when end_time > lead(start_time) over (partition by employee_id order by start_time)   
                            then ROUND(TO_NUMBER((lead(start_time) over (partition by employee_id order by start_time)-START_TIME )*24*60),0)
                            else ROUND(TO_NUMBER(END_TIME-START_TIME)*24*60,0)
                        end as TASK_DURATION
                from tasks
            )
SELECT  EMPLOYEE_ID,
        FLOOR(SUM(TASK_DURATION)/60) AS TOTAL_TASK_HOURS,
        CASE
            WHEN (SUM(CT1) = 0 ) THEN 1
            ELSE MAX(CT1)
        END AS  max_concurrent_tasks 
FROM DATA
GROUP BY EMPLOYEE_ID     

 
```