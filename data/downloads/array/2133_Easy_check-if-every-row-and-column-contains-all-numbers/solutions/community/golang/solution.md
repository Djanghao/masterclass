# Go 100% time and 100% space | Bitset

**Author:** Dexes
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1677965/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1677965/)

---

```
func checkValid(matrix [][]int) bool {
	bitset := makeBitset(len(matrix) * 2)

	for i := 0; i < len(matrix); i++ {
		bitset.Clear()

		for j := 0; j < len(matrix); j++ {
			bitset.Set(matrix[i][j] - 1)
			bitset.Set(matrix[j][i] - 1 + len(matrix))
		}

		if !bitset.IsFilledUp() {
			return false
		}
	}

	return true
}
```
Bitset implementation
```
type Bitset struct {
	bits   []uint64
	length int
}

func makeBitset(length int) *Bitset {
	return &Bitset{bits: make([]uint64, (length+63)/64), length: length}
}

func (b *Bitset) Set(n int) {
	b.bits[n/64] |= 1 << (n % 64)
}

func (b *Bitset) IsFilledUp() bool {
	length := b.length / 64
	for i := 0; i < length; i++ {
		if b.bits[i] != 0xffffffffffffffff {
			return false
		}
	}

	if b.length%64 > 0 {
		return b.bits[length] == 1<<(b.length%64)-1
	}

	return true
}

func (b *Bitset) Clear() {
	for i := 0; i < len(b.bits); i++ {
		b.bits[i] = 0
	}
}
```