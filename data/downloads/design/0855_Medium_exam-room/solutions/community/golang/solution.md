# Golang 8ms 100% Solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/exam-room/solutions/791491/](https://leetcode.com/problems/exam-room/solutions/791491/)

---

```go
type ExamRoom struct {
	seat    int
	student []int
}

func Constructor(N int) ExamRoom {
	return ExamRoom{
		seat:    N,
		student: []int{},
	}
}

func (er *ExamRoom) Seat() int {
	if len(er.student) == 0 {
		er.student = append(er.student, 0)
		return 0
	}
	seat, distance, index := 0, er.student[0], 0
	for i := 0; i < len(er.student)-1; i++ {
		currentDistance := (er.student[i+1] - er.student[i]) / 2
		if currentDistance > distance {
			distance = currentDistance
			seat = er.student[i] + distance
			index = i + 1
		}
	}
    if er.seat - 1 - er.student[len(er.student)-1] > distance {
		distance = er.seat - 1 - er.student[len(er.student)-1]
		seat = er.seat - 1
		index = len(er.student)
	}
	er.student = append(er.student, 0)
	copy(er.student[index+1:], er.student[index:])
	er.student[index] = seat
	return seat
}

func (er *ExamRoom) Leave(p int) {
	l, r := 0, len(er.student)-1
	for l <= r {
		m := (l+r)>>1
		if er.student[m] == p {
            // remove student[m]
			er.student = append(er.student[:m], er.student[m+1:]...)
			return
		}
		if er.student[m] > p {
			r = m-1
		} else {
			l = m+1
		}
	}
	return
}
```