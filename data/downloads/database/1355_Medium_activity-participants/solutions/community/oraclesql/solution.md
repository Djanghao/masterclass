# Documented | Oracle Solution | Faster Than 100%

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/activity-participants/solutions/1820089/](https://leetcode.com/problems/activity-participants/solutions/1820089/)

---

/*
1- get the number of participants per each activity 
2- rank those numbers 
3- exclude the first and last 
*/

with participants as (
    select b.name,rank () over (order by count(a.id) asc ) rank_asc ,  rank () over (order by count(a.id) desc ) rank_desc
    from friends a right outer  join activities b on a.activity = b.name
    group by b.name
)
select name as activity  from participants where rank_asc <>1 and rank_desc <> 1