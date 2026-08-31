# Oracle Solution

**Author:** mit_cruz
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-a-session-bar-chart/solutions/3103136/](https://leetcode.com/problems/create-a-session-bar-chart/solutions/3103136/)

---

# Solution 1: Left Join\r
```\r
select \r
    b.bin,\r
    count(s.bin) as total\r
from\r
(\r
    select '[0-5>' as bin from dual\r
    union all\r
    select '[5-10>' as bin from dual\r
    union all\r
    select '[10-15>' as bin from dual\r
    union all\r
    select '15 or more' as bin from dual\r
) b\r
left join\r
(\r
    select\r
        case\r
            when (duration / 60) < 5 then '[0-5>'\r
            when (duration / 60) < 10 then '[5-10>'\r
            when (duration / 60) < 15 then '[10-15>'\r
            when (duration / 60) >= 15 then '15 or more'\r
        end as bin\r
    from\r
        sessions  \r
) s\r
on\r
    b.bin = s.bin\r
group by \r
    b.bin\r
```\r
\r
# Solution 2: Union All\r
```\r
select '[0-5>' as bin, count(session_id) as total from sessions where (duration / 60) < 5\r
union all\r
select '[5-10>' as bin, count(session_id) as total from sessions where (duration / 60) between 5 and 9.99\r
union all \r
select '[10-15>' as bin, count(session_id) as total from sessions where (duration / 60) between 10 and 14.99\r
union all\r
select '15 or more' as bin, count(session_id) as total from sessions where (duration / 60) >= 15\r
```