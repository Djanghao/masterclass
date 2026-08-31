# Pgres solution

**Author:** vamsI_05
**Votes:** 0
**Link:** [https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/6097651/](https://leetcode.com/problems/friend-requests-i-overall-acceptance-rate/solutions/6097651/)

---



# Code
```postgresql []
with total_request as (
  select
    count(distinct (sender_id, send_to_id)) as cnt_rqst
  from
    friendrequest
), 
total_accepted as (
    select
        count(distinct (requester_id, accepter_id)) as cnt_accptd
    from RequestAccepted
    )

    select 
        round(coalesce(1.0 * (select cnt_accptd from total_accepted)/NULLIF((select cnt_rqst from total_request),0),0),2) as accept_rate
```