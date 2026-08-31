# Go | Time: O(1) / 0 ms / 100% | Space: O(1) / 2.1 MB / 33.33%

**Author:** aristorinjuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-days-between-two-dates/solutions/1548007/](https://leetcode.com/problems/number-of-days-between-two-dates/solutions/1548007/)

---

```
func daysBetweenDates(date1 string, date2 string) int {
    t1, _ := time.Parse(time.RFC3339, date1 + "T00:00:00.000Z")
    t2, _ := time.Parse(time.RFC3339, date2 + "T00:00:00.000Z")
    
    return int(math.Abs(t2.Sub(t1).Hours() / 24))
}
```