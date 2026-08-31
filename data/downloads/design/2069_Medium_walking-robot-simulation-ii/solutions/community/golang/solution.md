# Golang. Formula

**Author:** baba_dro
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/2759422/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/2759422/)

---

```
type Robot struct {
	started   bool
	circleLen int
	currPoint int
	w, h      int
}

func Constructor(width int, height int) Robot {
	circleLen := 2*width + (height-2)*2

	return Robot{
		started:   false,
		circleLen: circleLen,
		currPoint: 0,
		w:         width,
		h:         height,
	}
}

func (r *Robot) Step(num int) {
	if num > 0 {
		r.started = true
	}

	r.currPoint = (r.currPoint + num) % r.circleLen
}

func (r *Robot) GetPos() []int {
	switch {
	case r.currPoint < r.w:
		return []int{r.currPoint, 0}
	case r.currPoint < r.w+r.h-2:
		return []int{r.w - 1, r.currPoint - r.w + 1}
	case r.currPoint < 2*r.w+r.h-2:
		return []int{r.w - (r.currPoint - r.w - (r.h - 2) + 1), r.h - 1}
	default:
		return []int{0, r.h - (r.currPoint - 2*r.w - (r.h - 2) + 2)}
	}
}

func (r *Robot) GetDir() string {
	if !r.started {
		return "East"
	}

	switch {
	case r.currPoint == 0:
		return "South"
	case r.currPoint < r.w:
		return "East"
	case r.currPoint < r.w+r.h-1:
		return "North"
	case r.currPoint < 2*r.w+r.h-2:
		return "West"
	default:
		return "South"
	}
}
```