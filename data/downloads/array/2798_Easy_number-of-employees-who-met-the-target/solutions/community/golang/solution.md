# Easy and fast

**Author:** GpsyKd
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5933857/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/5933857/)

---


# Code
```golang []
func numberOfEmployeesWhoMetTarget(hours []int, target int) int {
    	i := 0
	for _, s := range hours {
		if s >= target {
			i++
		}
	}
	return i
}
```