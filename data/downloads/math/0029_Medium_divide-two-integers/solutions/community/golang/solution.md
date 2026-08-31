# Go Succinct Intuitive 100% with Explanation

**Author:** credford
**Votes:** 5
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/1774409/](https://leetcode.com/problems/divide-two-integers/solutions/1774409/)

---

```
func divide(dividend int, divisor int) int {
	// single special case that would cause overflow
	if dividend == math.MinInt32 && divisor == -1 {
		return math.MaxInt32
	}

	quotient := 0
	divid := abs(dividend)
	divis := abs(divisor)
	for divid >= divis {
		sub := divis
		add := 1
		for divid >= sub<<1 {
			sub <<= 1
			add <<= 1
		}
		divid -= sub
		quotient += add
	}

	negative := (dividend < 0) != (divisor < 0)
	if negative {
		return -quotient
	}

	return quotient
}
```

For anyone confused about the bitshifts (`<<`), the idea is that it makes the subtractions and additions faster by multiplying each value by a higher power of 2 with each shift, requiring fewer iterations. This is logically equivalent to this more intuitive code but much faster:

```
func divide_intuitive_but_slow(dividend int, divisor int) int {
	if dividend == math.MinInt32 && divisor == -1 {
		return math.MaxInt32
	}

	quotient := 0
	divid := abs(dividend)
	divis := abs(divisor)
	for ; divid >= divis; quotient++ {
		divid -= divis
	}

	negative := (dividend < 0) != (divisor < 0)
	if negative {
		return -quotient
	}

	return quotient
}
```

In the most extreme case of `2147483647 / 1` (`math.MaxInt32` divided by `1`), the second program would take 2147483647 iterations and the first would only take 465.