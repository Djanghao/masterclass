# Rust solution

**Author:** ibrohimkhan
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2288199/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/2288199/)

---

```
pub fn days_between_dates(date1: String, date2: String) -> i32 {
	fn is_leap(year: i32) -> bool {
		(year % 4 == 0 && year % 100 != 0) || year % 400 == 0
	}

	fn f(date: String) -> i32 {
		const MONTH_DAYS: [i32; 12] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

		let array = date
			.split("-")
			.map(|item| item.parse().unwrap())
			.collect::<Vec<i32>>();

		let year = array[0];
		let month = array[1];
		let mut days = array[2];

		for i in 1970..year {
			if is_leap(i) { days += 366; }
			else { days += 365; }
		}

		for i in 1..month {
			if i == 2 && is_leap(year) { days += 1; }
			days += MONTH_DAYS[i as usize - 1];
		}

		days
	}

	i32::abs(f(date1) - f(date2))
}
```