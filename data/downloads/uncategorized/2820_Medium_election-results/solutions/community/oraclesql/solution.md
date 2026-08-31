# [Intuitive] Faster than 100% of the submissions

**Author:** minabeshay
**Votes:** 1
**Link:** [https://leetcode.com/problems/election-results/solutions/4320796/](https://leetcode.com/problems/election-results/solutions/4320796/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition here is to remove the nulls and distribute the vote over the candidates.

# Approach
<!-- Describe your approach to solving the problem. -->
Using the window functions to distribute the vote ove the candidates and then sum the votes per candidate.


# Code
```
/* Write your PL/SQL query statement below */
with votes_splitted as (

    select voter, candidate, 1/count(candidate) over (partition by voter) as vote_splitted
    from votes
    where candidate is not null
)
select candidate from (
select candidate, dense_rank() over(order by sum(vote_splitted) desc) votes_rank from votes_splitted group by candidate  
) where votes_rank =1 
order by 1 asc 

```