# [Go] Binary search with explanation

**Author:** sebnyberg
**Votes:** 1
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2406935/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/2406935/)

---

This is an excellent number theory problem.

* The only way to get a trailing zero is by getting a product of 10, 100, 1000, and so on.
* The only way to form a 10 is given by its prime factors: 5 and 2.
* The number of zeroes in any given number is given by `min(count_factors(x, 2), count_factors(x, 5))`.
* Given the product of `1*2*...*x`, there are plenty more 2s than 5s. Therefore we only need to count the number of 5s.
* 15! contains three zeroes, because there are three 5s.
* Higher powers of 5 contribute with more than one zero. 25 gives two 5s, 125 gives three, etc.
* To count the number of zeroes for any given number, we can count the number of 5s, 25s, and so on.
* To find the right answer, perform binary search. Upper bound is given by `(5*(k+1))` because there will be *at least* k/5 zeroes in `k!`
* Note that one or more zeroes appear every 5 numbers (occurrence of 5s), so the answer is either zero or 5.

```go
func preimageSizeFZF(k int) int {
	countZeroes := func(x int) int {
		var res int
		for x > 0 {
			res += x / 5
			x /= 5
		}
		return res
	}

	lo, hi := 0, (k+1)*5
	for lo < hi {
		mid := lo + (hi-lo)/2
		if countZeroes(mid) > k {
			hi = mid
		} else {
			lo = mid + 1
		}
	}
	if countZeroes(lo-1) == k {
		return 5
	}
	return 0
}
```