# Easy Solution

**Author:** VittalNesaragi
**Votes:** 1
**Link:** [https://leetcode.com/problems/daily-leads-and-partners/solutions/6109029/](https://leetcode.com/problems/daily-leads-and-partners/solutions/6109029/)

---



# Code
```oraclesql []
/* Write your PL/SQL query statement below */
select to_char(date_id,'YYYY-MM-DD') as date_id, make_name, count(distinct lead_id) as unique_leads,count(distinct partner_id) as unique_partners from DailySales group by date_id,make_name;
```