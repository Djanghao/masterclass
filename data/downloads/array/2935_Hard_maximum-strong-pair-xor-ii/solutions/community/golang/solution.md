# 👍Runtime 193 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4945364/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4945364/)

---

# Code
```
type Trie struct {
	Head   *Node
	MaxBit int
}

type Node struct {
	Child0   *Node
	Child1   *Node
	LastIdx  int
}

func NewTrie(maxBit int) *Trie {
	return &Trie{
		Head:   &Node{},
		MaxBit: maxBit,
	}
}

func (t *Trie) Insert(num, idx int) {
	temp := t.Head

	i := t.MaxBit
	for i >= 0 {
		bit := (num & (1 << i))

		if bit == 0 {
			if temp.Child0 == nil {
				temp.Child0 = &Node{}
			}
			temp = temp.Child0
		} else {
			if temp.Child1 == nil {
				temp.Child1 = &Node{}
			}
			temp = temp.Child1
		}

		temp.LastIdx = idx
		i--
	}
}

func (t *Trie) GetMaxXor(num, minIdx int) int {
	temp := t.Head

	i := t.MaxBit
	maxXor := 0

	for i >= 0 {
		bit := (num & (1 << i))

		if bit == 0 {
			if temp.Child1 != nil && temp.Child1.LastIdx >= minIdx {
				temp = temp.Child1
				maxXor |= (1 << i)
			} else {
				temp = temp.Child0
			}
		} else {
			if temp.Child0 != nil && temp.Child0.LastIdx >= minIdx {
				temp = temp.Child0
				maxXor |= (1 << i)
			} else {
				temp = temp.Child1
			}
		}

		i--
	}

	return maxXor
}

func maximumStrongPairXor(nums []int) int {
	sort.Ints(nums)

	n := len(nums)
	maxBit := int(math.Log2(float64(nums[n-1])))

	t := NewTrie(maxBit)

	i := 0
	j := 0
	maxXor := 0

	for j < n {
		t.Insert(nums[j], j)

		half := int(math.Ceil(float64(nums[j]) / 2.0))

		for nums[i] < half {
			i++
		}

		maxXor = max(maxXor, t.GetMaxXor(nums[j], i))

		j++
	}

	return maxXor
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```