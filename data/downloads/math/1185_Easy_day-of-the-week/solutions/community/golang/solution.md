# Go, using Zeller's algorithm

**Author:** alex123456
**Votes:** 2
**Link:** [https://leetcode.com/problems/day-of-the-week/solutions/903055/](https://leetcode.com/problems/day-of-the-week/solutions/903055/)

---

I'd be quite peeved if I got this in an interview.

```
func dayOfTheWeek(day int, month int, year int) string {
    // https://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week#Zeller's_algorithm
    
    Y := year
    if month < 3 {
        Y--
    }
    y := Y % 100
    c := Y / 100
    
    d := day
    
    m := month
    if m < 3 {
        m += 12
    }
    
    w := (13 * (m+1)) / 5
    w += y/4
    w += c/4
    w += d
    w += y
    w -= 2*c
    w %= 7
    if w < 0 {
        w += 7
    }
    
    return days[w]
}

var days = []string{
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
}
```