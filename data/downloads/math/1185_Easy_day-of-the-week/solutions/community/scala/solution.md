# Scala (with Java library as scala doesn't have one natively 😔)

**Author:** devinha49
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/2806726/](https://leetcode.com/problems/day-of-the-week/solutions/2806726/)

---

```scala
def dayOfTheWeek(day: Int, month: Int, year: Int): String =
	java.time.LocalDate.of(year, month, day)
	  .getDayOfWeek.toString.toLowerCase.capitalize
```
Use Java library to parse the date, then basic string manipulation to get the result.