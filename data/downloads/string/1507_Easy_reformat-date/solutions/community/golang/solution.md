# simple golang solution, beats 100% time&mem

**Author:** KTyy
**Votes:** 3
**Link:** [https://leetcode.com/problems/reformat-date/solutions/915247/](https://leetcode.com/problems/reformat-date/solutions/915247/)

---

```
var month = map[string]int {
    "Jan": 1,
    "Feb": 2, 
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sep": 9,
    "Oct": 10, 
    "Nov": 11,
    "Dec": 12,
}

func reformatDate(date string) string {
    res := strings.Split(date, " ")
    day, _ := strconv.Atoi(string([]byte(res[0])[:len(res[0]) - 2]))    
    return fmt.Sprintf("%s-%02d-%02d", res[2], month[res[1]], day)
}
```