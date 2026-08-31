# Python simple one line solution

**Author:** TovAm
**Votes:** 26
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/1550770/](https://leetcode.com/problems/day-of-the-week/solutions/1550770/)

---

**Python :**

```
def dayOfTheWeek(self, day: int, month: int, year: int) -> str:
	return date(year, month, day).strftime("%A")
```

**Like it ? please upvote !**