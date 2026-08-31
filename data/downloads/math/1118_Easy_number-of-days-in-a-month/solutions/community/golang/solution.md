# Go - Easy (you just need to check how calculate lear years for end of the centuries)

**Author:** P_A_R_U_S
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-days-in-a-month/solutions/5450339/](https://leetcode.com/problems/number-of-days-in-a-month/solutions/5450339/)

---

# Complexity
- Time complexity: O(1)
- Space complexity: O(1)
- 
# Code
```
func numberOfDays(year int, month int) int {
	if month == 2 {
		if (year % 100 == 0 && year%400 == 0) || (year % 100 != 0 && year%4 == 0) {
			return 29
		}
	}
	return []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}[month-1]
}
```