# Go Solution using Standard Library - 0ms

**Author:** phea
**Votes:** 2
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/832891/](https://leetcode.com/problems/day-of-the-year/solutions/832891/)

---

Go's standard library for handling and parsing dates and time are very good.

https://github.com/phea/leetcode-go

```go
func dayOfYear(date string) int {
	t, _ := time.Parse("2006-01-02", date)
	start := time.Date(t.Year(), 1, 1, 0, 0, 0, 0, time.UTC)

	return int(t.Sub(start).Round(time.Hour).Hours())/24 + 1
}
```