# Golang 62 ms 6.1 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3265690/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3265690/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$
# Code
```
var primes = []uint16{
	2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
	73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173,
	179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281,
	283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409,
	419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541,
	547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659,
	661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809,
	811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941,
	947, 953, 967, 971, 977, 983, 991, 997,
}

func factorize(factors map[uint32]uint16, num uint32) {
	for i, sqrt := 0, uint16(math.Sqrt(float64(num))); i < len(primes) && primes[i] <= sqrt; i++ {
		var recalculateSqrt bool
		for num%uint32(primes[i]) == 0 {
			factors[uint32(primes[i])]++
			num /= uint32(primes[i])
			recalculateSqrt = true
		}
		if recalculateSqrt {
			sqrt = uint16(math.Sqrt(float64(num)))
		}
	}
	if num != 1 {
		factors[num]++
	}
}

func applyFactors(prefix map[uint32]struct{}, suffix map[uint32]uint16, num uint32) {
	for i, sqrt := 0, uint16(math.Sqrt(float64(num))); i < len(primes) && primes[i] <= sqrt; i++ {
		var recalculateSqrt bool
		for num%uint32(primes[i]) == 0 {
			if count := suffix[uint32(primes[i])]; count != 1 {
				prefix[uint32(primes[i])] = struct{}{}
				suffix[uint32(primes[i])] = count - 1
			} else {
				delete(prefix, uint32(primes[i]))
				delete(suffix, uint32(primes[i]))
			}
			num /= uint32(primes[i])
			recalculateSqrt = true
		}
		if recalculateSqrt {
			sqrt = uint16(math.Sqrt(float64(num)))
		}
	}
	if num != 1 {
		if count := suffix[num]; count != 1 {
			prefix[num] = struct{}{}
			suffix[num] = count - 1
		} else {
			delete(prefix, num)
			delete(suffix, num)
		}
	}
}

func findValidSplit(nums []int) int {
	suffix := make(map[uint32]uint16)
	for i := 0; i < len(nums); i++ {
		factorize(suffix, uint32(nums[i]))
	}
	prefix := make(map[uint32]struct{})
	for i, iEnd := 0, len(nums)-1; i < iEnd; i++ {
		applyFactors(prefix, suffix, uint32(nums[i]))
		if len(prefix) == 0 {
			return i
		}
	}
	return -1
}
```