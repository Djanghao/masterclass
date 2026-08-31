# Go stores non-full plates in heap

**Author:** craig08
**Votes:** 1
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/366516/](https://leetcode.com/problems/dinner-plate-stacks/solutions/366516/)

---

```go
type DinnerPlates struct {
    C int
    PushSeq intSlice
    Plates [][]int
}
type intSlice []int

// Implement sort.Interface
func (p intSlice) Len() int           { return len(p) }
func (p intSlice) Swap(i, j int)      { p[i], p[j] = p[j], p[i] }
func (p intSlice) Less(i, j int) bool { return p[i] < p[j] }
// Implement heap.Interface, use pointer recevier due to modifying contents
func (p *intSlice) Push(x interface{}) { *p = append(*p, x.(int)) }
func (p *intSlice) Pop() interface{} {
	v := (*p)[len(*p)-1]
	*p = (*p)[:len(*p)-1]
	return v
}


func Constructor(capacity int) DinnerPlates {
    return DinnerPlates{C: capacity}
}


func (this *DinnerPlates) Push(val int)  {
    p := len(this.Plates)-1
    // prevent push location exceeds current number of plates
    for this.PushSeq.Len() > 0 {
        if i := heap.Pop(&this.PushSeq).(int); i < len(this.Plates)-1 {
            p = i
            break
        }
    }
    if p < 0 || (p == len(this.Plates)-1 && len(this.Plates[p]) == this.C) {
        this.Plates = append(this.Plates, []int{val})
    } else {
        this.Plates[p] = append(this.Plates[p], val)
    }
}


func (this *DinnerPlates) Pop() int {
    if len(this.Plates) == 0 {
        return -1
    }
    plate := this.Plates[len(this.Plates)-1]
    ans := plate[len(plate)-1]
    if len(plate) > 1 {
        this.Plates[len(this.Plates)-1] = plate[:len(plate)-1]
    } else {
        this.Plates = this.Plates[:len(this.Plates)-1]
        this.TrimPlates()
    }
    return ans
}


func (this *DinnerPlates) PopAtStack(index int) int {
    if index >= len(this.Plates) || len(this.Plates[index]) == 0 {
        return -1
    }
    plate := this.Plates[index]
    ans := plate[len(plate)-1]
    this.Plates[index] = plate[:len(plate)-1]
    heap.Push(&this.PushSeq, index)
    this.TrimPlates()
    return ans
}

func (this *DinnerPlates) TrimPlates() {
    if len(this.Plates) == 0 {
        return
    }
    for len(this.Plates[len(this.Plates)-1]) == 0 {
        this.Plates = this.Plates[:len(this.Plates)-1]
    }    
}
```