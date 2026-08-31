# Golang - minimalistic and fast

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/my-calendar-iii/solutions/2673828/](https://leetcode.com/problems/my-calendar-iii/solutions/2673828/)

---

```
type MyCalendarThree struct {
    time []int
    change []int
}

func Constructor() MyCalendarThree {
    return MyCalendarThree{}
}

func (this *MyCalendarThree) Book(start int, end int) int {
    this.add(start, 1)
    this.add(end, -1)
    cur, max := 0, 0
    for _, change := range this.change {
        cur += change
        if cur > max {
            max = cur
        }
    }
    return max
}

func (this *MyCalendarThree) add(time int, change int) {
    i := sort.Search(len(this.time), func(i int) bool {
        return this.time[i] > time
    })
    if i > 0 && this.time[i-1] == time {
        this.change[i-1] += change
    } else {
        this.time = append(this.time, 0)
        copy(this.time[i+1:], this.time[i:])
        this.time[i] = time
        this.change = append(this.change, 0)
        copy(this.change[i+1:], this.change[i:])
        this.change[i] = change
    }
}