# Beautiful go solution

**Author:** kirugan
**Votes:** 5
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/434682/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/434682/)

---

Use `cap`,  Luke!
```
type MovingAverage struct {
    buffer []int
    index int
}


/** Initialize your data structure here. */
func Constructor(size int) MovingAverage {
    return MovingAverage{make([]int, 0, size), 0}
}


func (this *MovingAverage) Next(val int) float64 {
    if len(this.buffer) < cap(this.buffer) {
        this.buffer = append(this.buffer, val)
    } else {
        this.index = this.index % len(this.buffer)
        this.buffer[this.index] = val
        this.index++
    }
    
    var sum int
    for _, v := range this.buffer {
        sum += v
    }
    
    return float64(sum) / float64(len(this.buffer))
}

```