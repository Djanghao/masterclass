# Beats 100% Go solution. Easy to understand

**Author:** Cdayz
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/4769212/](https://leetcode.com/problems/count-days-spent-together/solutions/4769212/)

---


```
import (
    "strings"
    "strconv"
)

func countDaysTogether(arriveAlice string, leaveAlice string, arriveBob string, leaveBob string) int {
    aliceStart := parseDate(arriveAlice)
    aliceEnd := parseDate(leaveAlice)

    bobStart := parseDate(arriveBob)
    bobEnd := parseDate(leaveBob)

    if bobStart.after(aliceEnd) || aliceStart.after(bobEnd) {
        return 0
    }

    start := aliceStart
    if bobStart.after(aliceStart) {
        start = bobStart
    }

    end := aliceEnd
    if bobEnd.before(aliceEnd) {
        end = bobEnd
    }

    return start.deltaDays(end)
}

type date struct {
    month int
    day int
}

var daysInMonth = []int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

func (d date) deltaDays(other date) int {
    l, r := d, other
    if r.before(l) {
        l, r = r, l
    }

    if l.month == r.month {
        return r.day - l.day + 1
    }

    delta := daysInMonth[l.month-1] - l.day + 1
    for m := l.month+1; m < r.month; m++ {
        delta += daysInMonth[m-1]
    }
    delta += r.day

    return delta
}

func (d date) before(other date) bool {
    if d.month < other.month {
        return true
    } else if d.month == other.month {
        return d.day < other.day
    } else {
        return false
    }
}

func (d date) after(other date) bool {
    return other.before(d)
}

func parseDate(dateStr string) date {
    parts := strings.Split(dateStr, "-")
    month, _ := strconv.Atoi(parts[0])
    day, _ := strconv.Atoi(parts[len(parts)-1])

    return date{month, day}
}
```