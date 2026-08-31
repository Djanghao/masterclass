# Java | 0 ms | 1 liner | Explained

**Author:** prashant404
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/1710899/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/1710899/)

---

**Idea:** 
* If month \u2260 2 (february), then days are same for every year
* Foe Leap years, Feb has 29 days, otherwise 28
* Leap year check:
	* If year is a century year, i.e. year % 100 = 0, then if year % 400 = 0, then year is leap else not
	* If year is not a century year, then if year % 4 = 0, then year is leap else not
>**T/S:** O(1)/O(1)
```
private static final int[] DAYS_IN_MONTH = {0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

public int numberOfDays(int year, int month) {
	if (month != 2)
		return DAYS_IN_MONTH[month];
	return isLeapYear(year) ? 29 : 28;
}

private boolean isLeapYear(int year) {
	if (year % 100 == 0)
		return year % 400 == 0;
	return year % 4 == 0;
}
```
**Version 2:** 1 liner
```
public int numberOfDays(int year, int month) {
	return month != 2 ? DAYS_IN_MONTH[month] : year % 100 == 0 ? year % 400 == 0 ? 29 : 28 : year % 4 == 0 ? 29 : 28;
}
```
***Please upvote if this helps***