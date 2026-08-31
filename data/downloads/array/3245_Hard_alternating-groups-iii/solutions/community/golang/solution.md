# Golang | Treemap + Fenwick

**Author:** harshawasthi90
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-iii/solutions/5700248/](https://leetcode.com/problems/alternating-groups-iii/solutions/5700248/)

---

```
package main

import (
	"github.com/emirpasic/gods/v2/maps/treemap"
)

func numberOfAlternatingGroups(colors []int, queries [][]int) []int {
	n := len(colors)
	tmp := make([]int, n+n)
	copy(tmp, colors)
	copy(tmp[n:], colors)
	colors = tmp

	bit := NewBit[int](n*2 + 2)
	ans := make([]int, 0, len(queries))
	tree := treemap.New[int, int]()

	l := 0
	for r := 1; r < len(colors); r++ {
		if colors[r] == colors[r-1] {
			tree.Put(l, r-1)
			bit.Update(min(r, n)-l, 1)
			l = r
		}
	}

	if l < n {
		bit.Update(n-l, 1)
	}
	tree.Put(l, len(colors)-1)

	for _, query := range queries {
		if query[0] == 1 {
			size := query[1]
			count := bit.Query(size)
			left, right, ok := tree.Floor(n - 1)

			if ok && right >= n {
				left = max(left, n-size+1)
				right = min(right, n+size-2)

				x := right - left + 2 - size
				if x > 0 {
					count += x
				}
			}

			ans = append(ans, count)
		} else {
			do(colors, bit, query[1], tree, query[2], n, true)
			do(colors, bit, query[1]+n, tree, query[2], n, false)
		}
	}

	return ans
}

func do(colors []int, bit *Bit[int], index int, tree *treemap.Map[int, int], val int, n int, b bool) {
	if colors[index] == val {
		return
	}
	colors[index] = val

	l := index
	r := index

	v, ok := tree.Get(index)
	if ok {
		tree.Remove(index)
		if b {
			bit.Update(min(v, n-1)-index+1, -1)
		}
		r = v
	}

	k, v, ok := tree.Floor(index - 1)
	if ok {
		tree.Remove(k)
		if b {
			bit.Update(min(v, n-1)-k+1, -1)
		}
		l = k

		if v > index {
			r = v
		}
	}

	v, ok = tree.Get(index + 1)
	if ok {
		r = v
		tree.Remove(index + 1)
		if b {
			bit.Update(min(v, n-1)-index, -1)
		}

	}

	if index != 0 && colors[index-1] == colors[index] {
		tree.Put(l, index-1)
		if b {
			bit.Update(index-l, 1)
		}
		l = index
	}

	if index != len(colors)-1 && colors[index] == colors[index+1] {
		tree.Put(index+1, r)
		if b {
			bit.Update(min(r, n-1)-index, 1)
		}
		r = index
	}

	tree.Put(l, r)
	if b {
		bit.Update(min(r, n-1)-l+1, 1)
	}
}

type Ints interface{ int | int64 | int32 | int16 | int8 }

type Bit[T Ints] struct {
	array1 []T
	array2 []T
	n      int
}

func NewBit[T Ints](n int) *Bit[T] {
	return &Bit[T]{
		array1: make([]T, n),
		array2: make([]T, n),
		n:      n,
	}
}

func (b *Bit[T]) Update(index int, value T) {
	size := index
	array1 := b.array1
	array2 := b.array2
	index++

	for index > 0 {
		array1[index] += T(size) * value
		array2[index] += value
		index -= index & -index
	}
}

func (b *Bit[T]) Query(index int) T {
	size := index
	index++
	ans := T(0)
	for index < b.n {
		ans += b.array1[index] + T(1-size)*b.array2[index]
		index += index & -index
	}
	return ans
}

```