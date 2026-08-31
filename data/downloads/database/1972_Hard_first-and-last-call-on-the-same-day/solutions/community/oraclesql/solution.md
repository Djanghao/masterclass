# No Window Function Solution

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/1643866/](https://leetcode.com/problems/first-and-last-call-on-the-same-day/solutions/1643866/)

---

```
with
once_aday as (
    select distinct caller_id from ( 
        select caller_id, call_time from calls 
        union 
        select recipient_id, call_time from calls
    )
    group by caller_id, to_char(call_time, 'DDMMYYYY')
    having count(1) = 1
),
final_query as (
    select a.caller_id, a.call_time from calls a inner join calls b on
     ((a.caller_id = b.caller_id and  a.recipient_id = b.recipient_id ) or ( a.caller_id= b.recipient_id  and a.recipient_id =b.caller_id ))
    and (a.call_time <> b.call_time )
    and to_char(a.call_time, 'DDMMYYYY') = to_char(b.call_time, 'DDMMYYYY')
    and 0 = (select count(1) from calls where to_char(a.call_time, 'DDMMYYYY') = to_char(call_time, 'DDMMYYYY') and (a.caller_id = caller_id or a.caller_id = recipient_id) and call_time > a.call_time and call_time > b.call_time )
    and 0 = (select count(1) from calls where to_char(a.call_time, 'DDMMYYYY') = to_char(call_time, 'DDMMYYYY') and (a.caller_id = caller_id or a.caller_id = recipient_id) and call_time < a.call_time and call_time < b.call_time )
    union 
    select a.recipient_id, a.call_time from calls a inner join calls b on
     ((a.caller_id = b.caller_id and  a.recipient_id = b.recipient_id ) or ( a.caller_id= b.recipient_id  and a.recipient_id =b.caller_id ))
    and (a.call_time <> b.call_time )
    and to_char(a.call_time, 'DDMMYYYY') = to_char(b.call_time, 'DDMMYYYY')
    and 0 = (select count(1) from calls where to_char(a.call_time, 'DDMMYYYY') = to_char(call_time, 'DDMMYYYY') and (a.recipient_id = caller_id or a.recipient_id = recipient_id) and call_time > a.call_time and call_time > b.call_time )
    and 0 = (select count(1) from calls where to_char(a.call_time, 'DDMMYYYY') = to_char(call_time, 'DDMMYYYY') and (a.recipient_id = caller_id or a.recipient_id = recipient_id) and call_time < a.call_time and call_time < b.call_time )
) 
select caller_id user_Id  from final_query 
union select caller_id from once_aday
```