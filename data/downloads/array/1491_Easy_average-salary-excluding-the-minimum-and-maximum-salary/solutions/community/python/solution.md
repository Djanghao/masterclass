# Python | 1 Liner | Beginner Friendly

**Author:** SamarthBaronia
**Votes:** 24
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2571392/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2571392/)

---

Upvote if it helped. Thanks

```
def average(self, salary: List[int]) -> float:
	return ((sum(salary)- max(salary) - min(salary))/ (len(salary)-2) )
```