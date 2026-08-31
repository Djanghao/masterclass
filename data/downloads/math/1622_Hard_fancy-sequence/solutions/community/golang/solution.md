# Golang hybrid implementation

**Author:** guillaumeguy
**Votes:** 1
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/906369/](https://leetcode.com/problems/fancy-sequence/solutions/906369/)

---

We implement 2 modes
1. Operation Accumulation
2. Purge (where all operations are applied at once to each element). The backlog of operations is then purged

For short sequences (<SWITCH_PURGE), each operation is performed on the slice (no accumulation) as the operation is recorded (MultAll,AddAll).
For longer sequences, we switch to an accumulation of operations and trigger the computation only on the index retrieved by GetIndex (similar to Lazy operation).

Note: With this mechanism, Operations are effectively "played back".

Time: 3.6sec 

``` 
package leetcode

import (
	"math"
)

/*
// We implement 2 modes
// 1- Operation Accumulation
// 2- Purge (where all operations are applied at once for each elements
// For short sequences (<SWITCH_PURGE), each operation is performed on the slice
// For longer sequences, we switch to an accumulation of operations
*/

type Fancy struct {
	data    []int64
	mod     int64
	backlog []*Op
}

type Op struct {
	op  Do
	arg int64
	ind int // The Op applies to slice [0:ind]
}

type Do int

const (
	addAll Do = iota
	multAll
)

const (
	SWITCH_PURGE = 20
)

func Constructor() Fancy {
	return Fancy{mod: int64(math.Pow10(9) + float64(7))}
}

func (this *Fancy) Append(val int) {
	this.data = append(this.data, int64(val))
}

func (this *Fancy) View() []int64 {
	return this.data
}

// Store operations
func (this *Fancy) AddAll(inc int) {
	this.backlog = append(this.backlog, &Op{addAll, int64(inc), len(this.data)})
}

func (this *Fancy) MultAll(m int) {
	this.backlog = append(this.backlog, &Op{multAll, int64(m), len(this.data)})
}

// Applies all Operations to the slice
func (this *Fancy) Purge() {
	for i, d := range this.data {
		s := d
		s = this.applyBacklog(s, i)
		this.data[i] = s
	}
	// Reset the array
	this.backlog = make([]*Op, 0)
}

// i = index in the data slice
// Applies the backlog of operations to the element s in position i
func (this *Fancy) applyBacklog(s int64, i int) int64 {

ApplyOps:
	for j := 0; j < len(this.backlog); j++ {
		o := this.backlog[j]
		if i >= o.ind {
			continue ApplyOps
		} else {
			switch o.op {
			case addAll:
				s = modInt(s+int64(o.arg), this.mod)
			case multAll:
				s = modInt(s*int64(o.arg), this.mod)
			}
		}
	}
	return s
}

func (this *Fancy) GetIndex(idx int) int {
	if idx >= len(this.data) {
		return -1
	}

	// this helps for short sequence
	if len(this.data) < SWITCH_PURGE {
		this.Purge()
		s := this.data[idx]
		return int(s)
	}

	s := this.data[idx]
	s = this.applyBacklog(s, idx)
	return int(s)
}

func modInt(a, mod int64) int64 {
	mul := a / mod
	return a - mul*mod
}
```