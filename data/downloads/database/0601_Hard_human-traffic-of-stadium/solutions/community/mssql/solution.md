# simplest solution ever

**Author:** ahmedelsaid22
**Votes:** 7
**Link:** [https://leetcode.com/problems/human-traffic-of-stadium/solutions/2914407/](https://leetcode.com/problems/human-traffic-of-stadium/solutions/2914407/)

---

# Please upvote if you find it helpful, thank you.\r
# Intuition\r
**Using window functions and WHERE clause [Accepted]**\r
\r
# Approach:\r
**it required only two sub queries to solve the problem**\r
# first sub query: \r
Select the days with more than 100 people attending the stadium\r
# second sub query:\r
get the first lead , second lead , first lag and second lag\r
# outer query\r
**filter the records with the following conditions :**\r
(people > 100 and first lead people > 100 and second lead people > 100)\r
**or**\r
**"to handle case that there is an id before the last record with people more than 100"**\r
(people > 100 and first lead people > 100 and first lag people > 100)\r
**or**\r
**"to handle case that there is an id second to last record with people more than 100"**\r
(people > 100 and first lag people > 100 and second lag people > 100)\r
\r
\r
# Code\r
```\r
select id  , visit_date  , people \r
from\r
(\r
    select * , \r
           lead(PeopleMoreThan100) over (order by id) lead1,\r
           lead(PeopleMoreThan100,2) over(order by id) lead2,\r
           lag(PeopleMoreThan100) over(order by id) lag1,\r
           lag(PeopleMoreThan100,2) over(order by id) lag2\r
    from\r
    (\r
        select id , visit_date  , people ,\r
               case when people>= 100\r
                    then 1\r
                    else 0\r
                    end as PeopleMoreThan100\r
        from stadium\r
    ) temp\r
)temp1\r
where (PeopleMoreThan100 = 1 and lead1 = 1 and lead2 = 1)\r
      or\r
      (PeopleMoreThan100 = 1 and lead1 = 1 and lag1 =1)\r
      or\r
      (PeopleMoreThan100 = 1 and lag1 = 1 and lag2 = 1)\r
```