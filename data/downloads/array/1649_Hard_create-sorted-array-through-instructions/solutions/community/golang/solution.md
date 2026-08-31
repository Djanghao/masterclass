# [Go] Binary Index Tree - using helper ds - O(N Log M)

**Author:** virtyaluk
**Votes:** 2
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1011272/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1011272/)

---

```go
const MOD = 1e9 + 7

func createSortedArray(instructions []int) int {
    ans, n, bit := 0, len(instructions), NewBIT(100002)
    
    for i := 0; i < n; i++ {
        lsum, rsum := bit.Query(instructions[i] - 1), i - bit.Query(instructions[i])
        ans += min(lsum, rsum)
        ans %= MOD
        bit.Update(instructions[i], 1)
    }
    
    return ans % MOD
}

func min(a, b int) int {
    if a < b {
        return a
    }
    
    return b
}

// Binary Tree Implementation taken from here https://github.com/modern-dev/gtl/blob/84c244bd22a75e10580ba2cf9c6c065c93001e80/bit.go2
type BIT struct {
	tree []int
	size int
}

func NewBIT(size int) *BIT {
	return &BIT{
		make([]int, size),
		size,
	}
}

func (this *BIT) Update(index, val int) {
	for ; index <= this.size; index += index & -index {
		this.tree[index] += val
	}
}

func (this *BIT) Query(index int) int {
	sum := 0

	for ; index > 0; index -= index & -index {
		sum += this.tree[index]
	}

	return sum
}
```