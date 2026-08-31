# Oracle solution - partitioning, lead + "consecutive?"

**Author:** adamrbeier
**Votes:** 0
**Link:** [https://leetcode.com/problems/user-activities-within-time-bounds/solutions/4782519/](https://leetcode.com/problems/user-activities-within-time-bounds/solutions/4782519/)

---

Let me lead off by noting some confusion that I had.  The problem concerns "consecutive" sessions of the same type for a given user.  Thinking about this in terms of partitions, I originally interpreted this to mean that sessions should be paritioned by **user_id only**, so if a user had sessions in a sequence like ((Viewer, t1), (Streamer, t2), (Viewer, t3), (Streamer, t4)), none of those would be consecutive and of the same type, even if the times were within the 12 hour criteria.  Based on playing around with my solution, the partitioning is actally by **user_id and session_type**, so think of each user having a separate queue or channel for each session_type:
\\- Viewer Sessions: (t1, t3, ...)
\\- Streamer Sessions: (t2, t4, ...)
So we're just looking for users that have **any** sessions of the same type, less than 12 hours apart.  I certainly thought the description of "consecutive" was misleading but it is what it is.

##### Intro Addendum:
Do LeetCode long enough and you're bound to encounter problems with questions ([here's a solution to a previous problem having a similar confusing statement](https://leetcode.com/problems/count-occurrences-in-text/solutions/3663508/oracle-multiple-solutions-explanation-of-problem-quirks/)).  The purpose of this addendum is not to complain about the problem, but to point out that the original solution I implemented was overkill based on the actual mechanics of the problem (as was also the case with that linked problem).  Since we no longer care about the "consecutive" criteria, and just need to find **any** sessions for the same user, of the same type, less than 12 hours apart, we can accomplish this with a self-join or using `exists`.  I've provided an alternative solution that uses a self-join below the initial solution that uses partitioning and lead.  As with the other problem, rather than needing CTEs or analytic functions or parititioning and windowing, a simple single select can get the job done here.

# Approach
As noted above, this solution is based on originally partitioning by user_id only.  It starts with a CTE `next_session` which selects the information from `Sessions`, then uses lead() to pull the information for the next session.  The partitioning for lead() orders by session_start, so that the next session after the current one is what is pulled, and from there the two sessions can be compared.  A lead() on session_type was originally pulled, but that's irrelevant based on the information I gave in the intro.  The important one is the lead on session_start, partitioning by user_id and session_type, and ordering by session_start as noted earlier.  Since the problem boils down to finding users that have **any** sessions of the same type less than 12 hours apart, this lead(session_start) will pull the start of the next session of the same type.

Now perform a select of the distinct user_id values from the `next_session` CTE.  As noted in the above about the CTE, for a given session, the field next_session_start will contain the start of the next session of the same type as the current session.  Subtract the end of the current session from the start of the next session and check that it is less than 12 hours, or 0.5 days (`(next_session_start - session_end) < 0.5`).  As I've touched on many times, there was initally a check that the session_type of the current session matches that of the next session **overall for a user** but this check is also irrelevant since we modified the partitioning in the CTE.  Add in the ordering based on user_id and you're done with this silly problem.

# Code
```
/* Write your PL/SQL query statement below */
with next_session as (
    select user_id, session_start, session_end, session_id, session_type,
    lead(session_type) over (partition by user_id, session_type order by session_start) as next_session_type,
    lead(session_start) over (partition by user_id, session_type order by session_start) as next_session_start
    from Sessions
)
select distinct user_id
from next_session
where session_type = next_session_type
and (next_session_start - session_end) < 0.5
order by 1
```

##### Alternative (Simpler) Solution:
```
select distinct S1.user_id
from Sessions S1,
Sessions S2
where S1.session_type = S2.session_type
and S1.user_id = S2.user_id
and S1.session_id <> S2.session_id
and abs(S2.session_start - S1.session_end) <= 0.5
order by 1
```