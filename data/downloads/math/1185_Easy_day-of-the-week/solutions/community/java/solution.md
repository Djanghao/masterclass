# Java 3 liner Used java.time package

**Author:** JatinYadav96
**Votes:** 11
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/377388/](https://leetcode.com/problems/day-of-the-week/solutions/377388/)

---

```
public String dayOfTheWeek(int day, int month, int year) {
	String[] weeks = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"};
	int weekOfDay = Year.of(year).atMonth(Month.of(month)).atDay(day).getDayOfWeek().getValue() - 1;
	return weeks[weekOfDay];
}
```