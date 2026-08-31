# 👍Runtime 0 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4950647/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/4950647/)

---

# Code
```
func makeTheIntegerZero(num1 int, num2 int) int {
    n1 := int64(num1)
	for x := 1; x < 64; x++ {
		n1 -= int64(num2)

		// case a: num1 becomes <= 0
		if n1 <= 0 {
			return -1
		}

		// case b and c
		if n1 > 0 {
			cnt := countBits(n1)
			// case c: bitOfnum1 <= x
			if cnt <= x {
				if n1 >= int64(x) {
					return x
				} else {
					// if set all operations to 2^0, x still > n1
					return -1
				}
			}
			// case b, continue iteration, try x + 1
		}
	}
	return -1
}

func countBits(num int64) int {
	cnt := 0
	for i := 0; i < 64; i++ {
		x := int64(1 << uint(i))
		if (x & num) != 0 {
			cnt++
		}
	}
	return cnt
}
```