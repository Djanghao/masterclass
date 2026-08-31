# Oracle solution - LeetCode strikes again! (updated)

**Author:** adamrbeier
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-bursty-behavior/solutions/4916803/](https://leetcode.com/problems/find-bursty-behavior/solutions/4916803/)

---

**EDIT**: LeetCode has adjusted the problem and fixed the incorrect calculation in determining a user's 7-day average, and the expected results are now correct.  This solution writeup was published before the problem was corrected.  The original code that I wrote now works and no longer needs the silly adjustment to match the incorrect values that LeetCode was expecting, but I've included both versions of my code for completeness, and you'll see things below in the writeup that reference the problem in its initial problematic state.

# Introduction

This problem should have been straightforward with the following steps:
\\- Calculate the average weekly posting rate by dividing total posts for a user by 4 (since there are 4 weeks in February)
\\- For each post, count posts in the following 6 days (that is $post\\_date - initial\\ post\\ date < 7$).  Take the max of these for each user_id to determine a user's maximum weekly (7 day) rate.
\\- Join those two calculations on user_id and filter for users that have a max weekly rate >= 2 * user montly average

The expected solution has a bug in that "7-day max" calculation which took some testing to crack.  My snarky title here refers to issues that I'm sure we've all seen in LeetCode SQL/data problems, usually it's a misleading or confusing problem description, but here I think that the expected solution just has a straight-up invalid calculation.  I go into the solution below and try to note what I think is going on.

# Approach
The above outlines the process, and the calculations are handled through a series of CTEs.  I'll discuss the CTEs and also where this problem goes off the rails.

The first CTE is `avg_post_freq` which calculates the averge posting frequency for a user.  This is a simple count(*)/4 for each user_id, and be sure to exclude posts on February 29 as per the problem requirements.

The next CTE is `user_weekly_posts` which handles the second calculation in the introduction - for each post, use the post_date as a starting date, and get the users total # of posts within the window of [start_date, start_date + 7).  This solution does that calculation with a subselect, which is basically a self-join.  With the main query of `Posts`, aliased as `P1`, the following subquery gets the total # of posts in the next 7 days:
```
(select count(*) from Posts PX where PX.user_id = P1.user_id
and PX.post_date >= P1.post_date
and PX.post_date < P1.post_date + 7)
```

The logical next step would be to take the max weekly rate from `user_weekly_posts` for each user but **here is where things go awry**.  Rather than finding that straight maximum, another CTE, `user_weekly_posts_agg` is required that aggregates `user_weekly_posts` by user_id **and post_date**, summing the weekly post count.  **THIS WILL DOUBLE (OR TRIPLE OR MORE)  THE WEEKLY RATE IF A USER HAS MULTIPLE POSTS ON A SINGLE DAY**.  I dive into an example below for test case #3 outlining this problem, and this aggregation is inexplicable.

Now back to our regular programming :).  The next CTE, `user_weekly_posts_rk`, takes `user_weekly_posts_agg` (should be `user_weekly_posts` as noted) and takes a row_number(), partitioning by user_id and ordering by the "weekly post count" descending.  This is done to determine a user's maximum 7-day posting frequency.  In hindsight I realized there's a max() function, oh well.

The final step is the final step presented in the introduction, where the overall average and the maximum weekly frequency are joined, so here that means `avg_post_freq` and `user_weekly_posts_rk` are joined on user_id.  Take only row number 1 from `user_weekly_posts_rk` as we only want the maximum 7-day frequency for a user.  Also check that that maximum 7-day frequency is >= (2 * average rate).  Rename the columns and order by user_id.

### WTF?  A dive into the silliness of this problem...
Test case #3 was when I noticed that this was another LeetCode SQL problem with serious flaws.  My initial solution (before I figured out the unnecessary aggregation noted earlier) returned 0 rows, indicating that there were no "bursty" users.  The expected solution indicated that user_id 1 had a maximum 7-day post count of 20 (note that we're only examining user_id 1 here, I'm showing only their data to be concise).  Time to dive into the input data!

The expected results for user_id 1, showing that they're bursty and with a maximum 7-day frequency of 20: 

| user_id | max_7day_posts | avg_weekly_posts |
| ------- | -------------- | ---------------- |
| 1       | 20             | 5.25             |


Here's the input data for testcase #3, filtered for user_id 1 and ordered by the post_date ascending so that it's easy to see the 7-day windows.  Posts 73 and 79 both occur on Feb. 8, with the 7 day window being Feb. 15 (not inclusive).  This 7-day window includes those posts on Feb. 14, and counting all posts in the window (73, 79, 69, 86, 77, 30, 46, 22, 103, 115), there are **10** posts.  However, the expected solution inexplicably **sums** the 7-day post count by post_date, **doubling** user_id's 7-day rate since they have 2 posts on that initial date of Feb. 8.  Based on this input data, user_id 1 has a maximum 7-day post count of **10** posts and is therefore not bursty.  FWIW, all users in test case #3 are affected by this issue but I chose to highlight user_id 1.

| post_id | user_id | post_date  |
| ------- | ------- | ---------- |
|19|1| 2024-02-01 |
|94|1| 2024-02-05 |
|36|1| 2024-02-07 |
|73|1| 2024-02-08 |
|79|1| 2024-02-08 |
|69|1| 2024-02-09 |
|86|1| 2024-02-09 |
|77|1| 2024-02-11 |
|30|1| 2024-02-13 |
|46|1| 2024-02-13 |
|22|1| 2024-02-14 |
|103|1| 2024-02-14 |
|115|1| 2024-02-14 |
|59|1| 2024-02-17 |
|72|1| 2024-02-17 |
|28|1| 2024-02-18 |
|35|1| 2024-02-21 |
|93|1| 2024-02-23 |
|118|1| 2024-02-23 |
|113|1| 2024-02-26 |
|20|1| 2024-02-27 |
|105|1| 2024-02-29 |
|114|1| 2024-02-29 |



# Code
Original solution, which now works after the problem was corrected:
```
with avg_post_freq as (select user_id, count(*)/4 as avg_weekly_posts
from Posts
where to_char(post_date, 'dd') != '29'
group by user_id),
user_weekly_posts as (select P1.user_id, P1.post_id, P1.post_date,
(select count(*) from Posts PX where PX.user_id = P1.user_id
and PX.post_date >= P1.post_date
and PX.post_date < P1.post_date + 7) as week_post_ct
from Posts P1
),
user_weekly_posts_rk as (select user_id, week_post_ct, row_number() over (partition by user_id order by week_post_ct desc) as RN
from user_weekly_posts
)
select uwpr.user_id,
uwpr.week_post_ct as max_7day_posts,
apf.avg_weekly_posts
from user_weekly_posts_rk uwpr,
avg_post_freq apf
where uwpr.user_id = apf.user_id
and uwpr.rn = 1
and uwpr.week_post_ct >= (2 * apf.avg_weekly_posts)
order by 1
```

Code involving the incorrect aggregation, for posterity:
```
/* Write your PL/SQL query statement below */

with avg_post_freq as (select user_id, count(*)/4 as avg_weekly_posts
from Posts
where to_char(post_date, 'dd') != '29'
group by user_id),
user_weekly_posts as (select P1.user_id, P1.post_id, P1.post_date,
(select count(*) from Posts PX where PX.user_id = P1.user_id
and PX.post_date >= P1.post_date
and PX.post_date < P1.post_date + 7) as week_post_ct
from Posts P1
),
user_weekly_posts_agg as (select user_id, post_date, sum(week_post_ct) as week_post_ct_sum
from user_weekly_posts
group by user_id, post_date
),
user_weekly_posts_rk as (select user_id, week_post_ct_sum, row_number() over (partition by user_id order by week_post_ct_sum desc) as RN
from user_weekly_posts_agg
)
select uwpr.user_id,
uwpr.week_post_ct_sum as max_7day_posts,
apf.avg_weekly_posts
from user_weekly_posts_rk uwpr,
avg_post_freq apf
where uwpr.user_id = apf.user_id
and uwpr.rn = 1
and uwpr.week_post_ct_sum >= (2 * apf.avg_weekly_posts)
order by 1
```