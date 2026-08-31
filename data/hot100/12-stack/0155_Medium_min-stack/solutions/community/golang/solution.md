# Go stack clear solution

**Author:** qube
**Votes:** 9
**Link:** [https://leetcode.com/problems/min-stack/solutions/1992109/](https://leetcode.com/problems/min-stack/solutions/1992109/)

---

```
type MinStack struct {
    data []int // elements stack
    mins []int // minimums stack
}

func Constructor() MinStack {
    return MinStack{}
}

func (s *MinStack) Push(val int)  {
    if len(s.mins) == 0 || val <= s.GetMin() { s.mins = append(s.mins, val) }
    s.data = append(s.data, val)
}

func (s *MinStack) Pop()  {
    if s.Top() == s.GetMin() { s.mins = s.mins[:len(s.mins)-1] }
    s.data = s.data[:len(s.data)-1]
}

func (s *MinStack) Top() int {
    return s.data[len(s.data)-1]
}

func (s *MinStack) GetMin() int {
    return s.mins[len(s.mins)-1]
}
```