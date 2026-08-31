# Should be marked as easy

**Author:** saini5259
**Votes:** 12
**Link:** [https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/1596307/](https://leetcode.com/problems/accepted-candidates-from-the-interviews/solutions/1596307/)

---

select candidate_id
from Candidates c join rounds r on c.interview_id = r.interview_id
where years_of_exp >=2
group by candidate_id
having sum(score) > 15